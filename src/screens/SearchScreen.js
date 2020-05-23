import React, {useState} from 'react';
import {View,StyleSheet,Text,ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from "../components/ResultsList";

// we need to pass down to child component. so when
// a user taps on a resturant we can go to another screen
// See Navigating from a CHILD COMPONENT in Comments
const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi,results,errorMessage] = useResults();
  
    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        return results.filter(results=> {
            return results.price === price;
        })
    };
  /* place holder better then flex to fit content on phone <> and </>*/
    return (
      <>
        <SearchBar
          term={term}
          onTermChange={setTerm}
          onTermSubmit={() => searchApi(term)}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <ScrollView>
          <ResultsList
            results={filterResultsByPrice("$")}
            title="Cost Effective"
          />
          <ResultsList
            results={filterResultsByPrice("$$")}
            title="Bit Pricier"
             />
          <ResultsList
            results={filterResultsByPrice("$$$")}
            title="Big Spender"
            />
        </ScrollView>
      </>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;
/* NOTE Documentation of Component 

useState is a hook allows us to modify state

useEffect is a hook, or a function, that allows to run our code just one time
when our component is 1st rendered to the screen


UseState's Second Argument

1) useState(()=>{})     Run the arrow function every time the component is rendered
2) useState(()=>{},[])  Run the arrow function only when the component is first rendered
3) useState(()=>{},[value]) Run the arrow function only when the component is first rendered, and when the 'value' changes

This concepts can be applied to the hooks such as useEffect!
*/
/*
------------------------------------------------------------------------------------
const [term,setTerm] = useState('') *Basically we will
import the useState, to receive state from a user
term is the initiazation think of it as term[0],
and setTerm is the mutator that sets the state
useState('') initialized to empty string

term = {term} is the prop being passed from parent 
to child component

       <SearchBar term={term} 
           onTermChange={newTerm => setTerm(newTerm)} />
 onTermChange is another prop, name we made passed to our
 child component. and we have a callback of newTerm
 that is passed to setTerm, and setTerm modifies newTerm
 upon the callback function
 --------------------------------------------------------------------------------------------
 Now we have a piece of state managed by searchscreen, and 
 to pass down the state and a way to change it by search bar
 ---------------------------------------------------------------------------------------------------
 */
/*
------------------------------------------------------------------------------------
    <Text>{term}</Text>
    If you place this inside view you can
    see if the child component is passing back that data
    to the SearchSCreen from SearchBar
    and thus useState, the state is def. working at this point.
------------------------------------------------------------------------------------
 */
/*
------------------------------------------------------------------------------------
The SearchSCreen will call the api. We will do a new call back
onTermSubmit = {() => ()}
------------------------------------------------------------------------------------
*/
/*
Use axios to make a network request, but you have 
to add as dependcy but incr size 
npm install axios.. Make a new file that
will preconfigure to work with yelp api.
If you are working with different apis for 1 project
make sure that in the src directory you create 
a separate api folder for each api
*/
/*
----------------------------------------------------------------
  const [results,setResults] = useState([]);

  We intialiize results as empty array as we expect
  results to have a big array of objects that contains
  the results that we got back from api


  See Yelp Documentation you get total, business, etc properties
----------------------------------------------------------------
*/
/*
----------------------------------------------------------------
<Text>We have found {results.length} results</Text>
outputs 0 because we have nothing at the moment!
----------------------------------------------------------------
*/
/*
----------------------------------------------------------------
API REQUEST
 *Helper Function*

 async allows us to handle a request.. more formally
 a timing protocol which begins a specific operation
 upon the receipt of an indication (signal) preceding 
 operation has been completed

     const searchApi = async () =>{
        const response = await yelp.get('/search');
        response.data.business
    };

    Recall that /search will be concat to our baseURL
    in our API folder yelp.js file http: link request

Recall **** 
When we do an api request it is an asynchrnous operation
So we need to add in either a promise that 
will handle the search results!

----------------------------------------------------------------
*/
/*
----------------------------------------------------------------
const response = await yelp.get('/search');

wait for some response.Once this things resolves we will
assign the result to the reponse variable
which will be back from the axios reqquest

        response.data property ---- ****
        will be actual json data,
        which is in yelp documentation... response body
----------------------------------------------------------------
*/
/*
----------------------------------------------------------------
  setResults(response.data.business);

  lasty after tapping into the yelp documentation
  we can mutate the data by passing this information
  into the setter, which will render on the screen

----------------------------------------------------------------
*/

/*
----------------------------------------------------------------
Calling YELP.GET *** Notes on Parameters 

in the 2nd parameter we will pass in an object 
         params:{
                 limit:50,
                term:term,
                location:'san jose'
            }
  propety. Any key value pairs will be auto append to our 
  '/search?limit=50'

  which if you look inside yelp api, parameter is
  needed for the query of a string



    const searchApi = async () =>{
        const response = await yelp.get('/search',{
            params:{
                limit:50,
                term,
                location:'santa cruz'
            }
        });
        setResults(response.data.businesses); <--- mutates the network request
    };
----------------------------------------------------------------
*/

/*
----------------------------------------------------------------
        **** HANDLING ERROR  ***** 
If this request fails, then prompt user to try agian later.

Lets wrap our request with a try as so:::

   const [errorMessage,setErrorMessage] = useState('');

    const searchApi = async () =>{

    try{    
        const response = await yelp.get("/search", {
                params: {
                limit: 50,
                term,
                location: "santa cruz",
                },
            });
        setResults(response.data.businesses);
    }catch(err){
        setErrorMessage('Something went wrong');
    }
    
----------------------------------------------------------------
*/
/*
------------------------------------------------------------------------------------
                Adding a Tenary conditional

If it is a truthy value print out that text element, otherwise
print out null --->
    {errorMessage ? <Text>{errorMessage}</Text>:null}

Will display if something went wrong
 ---------------------------------------------------------------------------------------------------
 */

 /*    ----------------------------------------------------------------

          PREDEFINE OUR SEARCH RESULTS

 with the helper function we want to pass in a serchTerm (data)


    const searchApi = async (searchTerm) =>{
         try{    
        const response = await yelp.get("/search", {
                params: {
                limit: 50,
                term:searchTerm,
                location: "santa cruz",
                },
            });

Once we pass in the serachTerm data we can update our onTermSubmit
with a call back function and pass the term data upon submit

    return(
         
      onTermSubmit={()=> searchApi(term)}
 ----------------------------------------------------------------

               RESULTS - searchApi - errorMessage
               
Since we want componets to be reusable we moved all the hook 
information to hooks dir. We are also ref variables results from
that hooks directory. So in order for this 'component' to
receive the data we have to return that data from the hook back to here
*** results is the variable not in this file **

     <SearchBar 
        term={term} 
        onTermChange={setTerm} 
        onTermSubmit={()=> searchApi(term)}
        />
        {errorMessage ? <Text>{errorMessage}</Text>:null}
        <Text>We have found {results.length} results</Text>


------------------------------------------------------------


Lastly since we are returning the 3 variables metioned in RESULTS

 const [searchApi,results,errorMessage] = useResults();

 We need create this list with the same names and invoke the function
 useResults()


 --------------------------------------------------------------
        --- HELPER FUNCTION filterResultsByPrice ---

The argument is the price we are looking for... We will call filter Results 3xs
and it will tell us what set of price we get back.

     const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        return results.filter(results=> {
            return results.price === price;
        })
    };

    The price is from the results of the api yelp which we tap into its
    data with results.price


 --------------------------------------------------------------


                    ** Importing SCROLLVIEW***

import {ScrollView} works like <View></View>. However,
if there is to much content inside the screen to fit all in the
screen in one time. It will auto fit the list for you. Just wrap
the rendered ResultsList with it to apply as so:


        <ScrollView>
          <ResultsList results={filterResultsByPrice("$")} title="Cost Effective"/>
          <ResultsList results={filterResultsByPrice("$$")} title="Bit Pricier"/>
          <ResultsList results={filterResultsByPrice("$$$")} title="Big Spender"/>
        </ScrollView>

 --------------------------------------------------------------


                    *** flex: 1 ***

What we want to do as we apply this to the entire page of the parent 
component is to fill up the content to fit in teh screen as much as possible
of your device. Thus, by applying a flex:1, this indicates we fill
up the entire screen

        <View style={{flex:1}}>


BUT BEST PRACTICE IS to use 

 <>
 // some foo code here
 </>

 which works better then flex:1 as it renders the content to fit
 on the screen upon return, and thus we dont have to worry
 about styling the information
 -------------------------------------------------------------------------------------
    ***** ------ Navigate from a child component ------ *****

To ensure that that we navigate from a child component. You can
check the props first by doing this:

console.log(props)

1) This will display the objects with all the member functions/features
and you can see that we have a built in
navigation inside the props

   <ResultsList
            results={filterResultsByPrice("$$$")}
            title="Big Spender"
            navigation={navigation}
          />

Next you can set the props and just call it navigation 
and pass it navigation the member feature you accessed from the object
to pass these results!



                       !!!     HOWEVER !!!

There is a best practice, thus oopen 
 -----------------------------------------------------------------------------
 */