import React from 'react';
import {View,Text,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import ResultsDetail from './ResultsDetail';
import {withNavigation} from 'react-navigation';

const ResultsList = ({title,results,navigation}) => {
  // if results == 0 then return nothing
  // this will remove results that have generated 0 resturants 
  // but will still populate everything else that has resturants count > 0
    if(!results.length){
      return null;
    }
    return (  
      <View style={styles.container}>
        <Text style={styles.titleStyle}>{title}</Text>
        <FlatList 
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={results}
        keyExtractor = {(results) => results.id}
        renderItem={({item})=> {
            return (
              <TouchableOpacity onPress = {()=> navigation.navigate('ResultsShow',{id: item.id})}>
                <ResultsDetail result={item} />
              </TouchableOpacity>
            );
         }}
        />
      </View>
    );
}

const styles = StyleSheet.create({
    titleStyle:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:15,
        marginBottom:5
    },
    container:{
        marginBottom:10
    }
});

export default withNavigation(ResultsList);

/* Documentation
------------------------------------------------------

We are going to destructure our props
that was passed by SearchScreen, parent component..

    const ResultsList = ({title,results}) => {

        results is from ScreenSearch, and returns the 
        the results.price from yelp api
------------------------------------------------------

        <Text>{results.length}</Text>

Will display the count of x amount of restuarnats/bars/coffee

------------------------------------------------------

1) FlatList - By default renders it self vertical from top to bottom
              horizontal = {true} renders the data horizontally.
              Next up we will pass our list of. It automatically creates
              a scroll bar so becareful with that to disable add 
              prop showsHorizontalScrollIndicator={false}
              
2) data that is comming from
              the results. Then remember we have to add the 
              
3) key extractor
              which will look at every item inside results or every object inside
              there. From every object we need to return a stable identifier.
              This Flatlist is a peformance thing to use keyExtractor.So
              we add a prop that is going to get a function that is called with
              every result inside of a results array and all we have to do
              inside here is return a string that is somehow consistent and not 
              going to change between renders if we look at terminal we have a 
              unique ID Property that is being used.

              From keyExtractor we will return result.id. Finally we can 
              define our 

4) renderItem function. Recall that renderItem is a little
              bit different then keyExtractor. First argument will have a copule
              of differnet propteris assign to it. item property is the actual
              result object which in the terminal is the object that has all of 
              our restuant data inside of it. Lastly, we can return just the names 
              with the <Text>{item.name}</Text>


                <FlatList 
                    horizontal={true}
                    data={results}
                    keyExtractor = {(results) => results.id}
                    renderItem={({item})=> {
                        return <Text>{item.name}</Text>
                    }}
                    />

--------------------------------------------------------------------

                **** PASSING PROPS TO ResultsDetail *****

we are creating a prop called result and 
actually passing the item object to the child component

                 return <ResultsDetail result={item}/>;

--------------------------------------------------------------------

                    Navigating from a child component ***


const ResultsList = ({title,results,navigation}) => {


after passing in the navigation which was seen in the terminal 
within the object props. We can 



--------------------------------------------------------------------
TouchableOpacity - primitive element it will fade out any child elements
                    placed inside of it any time a user taps on it (image)
                    in this case. The user gets immediate feedback and 
                    will feel oh I just tap on tha tthing

--------------------------------------------------------------------

            **** NAVIGATION ADD ON ****


We add in a call back function and tap into navigation.navigate('pathFromApp.jsStr')
and when the user taps should navigate to child compononent

           <TouchableOpacity onPress = {()=> navigation.navigate('ResultsShow')}>
                <ResultsDetail result={item} />
              </TouchableOpacity>
--------------------------------------------------------------------



        ***** HOWEVER BEST PRACTICE withNavigation Helper ******* 

    import {withNavigation} from 'react-navigation';

you can imoprt this so we dont have to receive props from our parent.
This is a very special function that we're goinna pass our component
int. Will return a special version to our component that has access to
navigation.

After you imported at the top of the file.. We want to wrap our 
export default as so:

    export default wtihNavigation(ResultsList);

--------------------------------------------------------------------

     *    ---- Child component showing more information like pics --- *

In the second parameter we pass in an object and form yelps 
id.. can also check in docs for yelp or teriminal, but it has an
id we can tap into it 



  <TouchableOpacity onPress = {()=> navigation.navigate('ResultsShow',{
                  id: item.id
              })}>

Which is our business (id) object from yelp
--------------------------------------------------------------------


*/