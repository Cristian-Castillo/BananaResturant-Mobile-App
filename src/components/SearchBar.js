import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar = ({term,onTermChange,onTermSubmit}) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle}/>
      <TextInput style={styles.inputStyle} 
      autoCapitalize="none"
      autoCorrect={false}
      placeholder="Search"
      value = {term}
      onChangeText= {onTermChange}
      onEndEditing = {onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    backgroundStyle:{
        marginTop:15,
        backgroundColor:'#F0EEEE',
        height:50,
        borderRadius: 5,
        marginHorizontal:15,
        flexDirection:'row',
        marginBottom:10
    },
    inputStyle:{
        flex:1,
        fontSize:18,
    },
    iconStyle:{
      fontSize:35,
      alignSelf:'center',
      marginHorizontal:15,  
    }
});

export default SearchBar;
/*we put the name of library, and 
will pull a few components and then from github expo
make sure that on github 'search' & 'Feather' match in terms of name
--------------------------------------------------------
const SearchBar = ({term,onTermChange})
is the destructuring of the props that we have from
our SearchScreen parent component that allows us 
to use the props passed in Search Bar child component to
manage our text input
--------------------------------------------------------
*/
/*
--------------------------------------------------------
  value = {term}
  onChangeText= {newTerm => onTermChange(newTerm)}

  our text input will be informed of exact value that it should be 
  with the value = {term} part.

  and anytime the user changes that text with the user on callback feature
  and pass in new term to update the state
  --------------------------------------------------------
*/
/*
--------------------------------------------------------
onEndEditing = {()}
the function will be called any time the user hits the 
box to enter input. This callback indicates that we want want
to initiate a search to the API
--------------------------------------------------------
*/

/*
--------------------------------------------------------
      onChangeText= {onTermChange}
      onEndEditing = {onTermSubmit}

      is a shortcut and just simply calls the functions as 
      references
--------------------------------------------------------
*/
/*    SIZE PROP
size is a prop that was used for our magnify glass size
placeholder within TextInput is a prop that provides 
text to prompt user to input information
flexDirection will align our child properties within the same line
flex:1 tells the style to use the flex in the flex direction to 
take up maximun space */