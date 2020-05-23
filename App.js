import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';
// you must first install the dependencies to 
// use the following and import
// the createStackNavigator and createAppContainer to 
// navigate. Second argument is another object
//defaultNaviggationOptions is a terms for some default that will we use
// for a different screen! Which can be used to customize the header
// of the screen.. THus, ttitle will be the text that will appear in our 
// application!
const navigator = createStackNavigator({
  Search:SearchScreen,
  ResultsShow:ResultsShowScreen
},{
  inititalRouteName: 'Search',
  defaultNavigationOptions:{
  title:'Business Search'
  }
});

export default createAppContainer(navigator);
// automatically shown to advice, app is special!
// we really only have a navigator here not component
// displays whatever the conent is inside the component
// only ensures that we createApp just makes sure we import 
//a react compononet