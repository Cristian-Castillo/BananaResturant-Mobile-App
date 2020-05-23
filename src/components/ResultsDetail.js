import React from "react";
import { View, Text, StyleSheet,Image} from "react-native";

const ResultsDetail = ({result}) => {
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={{uri: result.image_url}} />
            <Text style={styles.name}>
            {result.name}
            </Text>
            <Text>
            {result.rating} Stars, {result.review_count} Reviews
            </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        marginLeft:15
    },
    image:{
        width:250,
        borderRadius:4,
        height:120,
        marginBottom:5
    },
    name:{
        fontWeight:'bold'
    }
});

export default ResultsDetail;

/* Documentation
------------------------------------------------------

result will be the object from the terminal, more specifically
the api from yelp that contains businesses object that
has vital information that we can tap into!


const ResultsDetail = ({result}) => {


-----------------------------------------------------
                IMAGE

Need to import so that you can use images in react-native
If you once again check yelp api in terminal the objects
You can tap into the source property.

We will then pass in an object with two sets of curly braces
The outer is we are about to refer to a javascript expression
the inner {} is the forming the actual object.

uri: prop - where react-native is where react basically
looks for where this image comes from!

  <Image source={{uri: result.image_url}} />

  Recall you have set height and width so the image displays. Images
  by default will try to collapase itself
*/