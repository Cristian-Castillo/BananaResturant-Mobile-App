import {useEffect,useState} from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const searchApi = async (searchTerm) => {

        try {
        const response = await yelp.get("/search", {
            params: {
            limit: 50,
            term: searchTerm,
            location: "santa cruz",
            },
        });
        setResults(response.data.businesses);
        } catch (err) {
        setErrorMessage("Something went wrong");
        }
    };
    /*Call searchApi when compnet is firsrt rendered BAD CODE !
    searchApi('pasta'); Causing a reiteration
    (like an inifinite loop) in terminal, performance dec.Instead useEffect!*/
    useEffect(() => {
        searchApi("pasta");
    }, []);

    return [searchApi,results,errorMessage];
};

/* NOTE Documentation of Component I
        Inside this function will be the code to request to API
 */

/* NOTE Documentation of Component Search Screens II

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
            ***** RETURNING THIS TO SearchScreen *****

This part is needed so that the variables know how to identify the infroationn
needed to continu to process the compoenentn


    return [searchApi,results,errorMessage];


    Lastly once you are done imiport the hook in the file that needs it.
    In this case the SearchScreen
 ----------------------------------------------------------------

 */