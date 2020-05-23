import React, {useState,useEffect} from 'react';
import {Text,StyleSheet,View,FlatList,Image} from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({navigation}) =>{
    const [result,setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };
    useEffect(()=> {
        getResult(id);
    },[]);
    // if there is nothing, just return nothing!
    if(!result){
        return null;
    }
    // else there must be something and render the return photos!

    return(
        <View>
            <Text>{result.name}</Text>
            <FlatList 
            data = {result.photos}
            keyExtractor = {(photo) => photo}
            renderItem = {({item})=> {
                return <Image style= {styles.imageStyle} source={{uri:item}} />
            }}
            />
        </View>
        );
};

const styles = StyleSheet.create({
    imageStyle:{
        width:200,
        height:300
    }
});

export default ResultsShowScreen;

/*
            DOCUMENTATION
-------------------------------------------------------------------------------------

This is how we will get some information out of that second argument that 
we called navigate

navigation.getParam('id');

and pass in the paramter that we want. We are using the I.D. because back
in our ResultsList that second object had an I.D. property inside of it

So essentially we are saying give me that piece of information from ResultsList
that was the props id:item.id


    console.log(id); 

    will show the id tied to the image and will display in terminal

-------------------------------------------------------------------------------------

            ---- WE then pass the id and make another request to YELP API ----

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




CONTINUE .... FOR THIS DOCUMENTATION



recall from async
    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        response.data;
    };

-------------------------------------------------------------------------------------
            --- useEffect ---

            Recall with useEffect we are only calling this once through the teriminal
            and thus will not cause an infinjite loop! Really imporptant

                useEffect(()=> {
                     getResult(id);
                 },[]);

-------------------------------------------------------------------------------------
                    FLat List

Recall anytime we are buildilng a list we reach out to flat list element
*/