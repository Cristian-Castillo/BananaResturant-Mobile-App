# BananaRestaurant-Mobile-App
Company: BananaTech - This is a mobile react-native project that locates restaurants and compares prices from Santa Cruz

This was my first react-native mobile application. The goal was to 
learn how to make a beautiful app that would search for restaurants 
within a given price range. I chose react-native due to its cross 
platform capabilities. Lastly, I wanted to express my fondness for mobile 
applications development as my dream is to successfully deploy a solid
application on both trending markets (apple/android)
that will impact users in a profound way. Hopefully letting this first 
application be one of many in terms of mobile applications!

## Requirements & Setup

- https://docs.expo.io/

## Learning Objective Outcomes
--------------------------------------------------------------------------------------------------------------
What I learned from this project are the following:

- Fetch network request through Yelp's API
- axios (easier to use with API as well)is needed in lieu of making such 
    request to the network along with a baseURL
    (the root url that makes the request) and headers to correctly assign 
    the API Key for authorization
- Instantiate yelp request e.g yelp.get('/search')
-  Components concept/refactoring of code
- useState & useEffect(function), where useState modifies state and handles state over multiple 
    reiterations in terms of execution (in terminal). Whereas useEffect is solely meant as processing 
    state once in terms of state manipulation.
- I also learned about useState(()=>{}) which indicates that we must run the arrow function every time
    the component is rendered
- useState(()=>{},[]) runs the arrow function only when the component is first rendered
- useState(()=>{},[value]) runs the arrow function only when the component is first rendered, and 
       the when the value changes. Which can also be applied to hooks such as useEffect
- How to initiate useState via const [term,setTerm] = useState(''). Meaning our first element is our
    initialized state, and the second element is our mutator of "this" state.
- How to pass properties (props) from parent to child components
- Callback functions and useful javascript handlers such as onTermChange, awaiting for data change. 
    Also onChangeText and onEndEditing capabilities
    from the interface
- async - which allows us to handle a request; which in a sense is a timing protocol awaiting for a
    a specific operation (like a signal, or waiting for a signal) which will handle our API result request
- How to access Yelp's response body objects and extract pertinent information to my mobile app
- Handling errors, e.g. what if the application renders 0 restaurants, then display nothing but continue to display
    other restaurants if applicable
- How to effectively use Ternary conditionals(truthy values)

- How to desctruture props in child components
-The ability to render images on screen, and how to style the defaulted collapsed images accordingly
-Flatlist - which basically is an interface for rendinger basic, flat lists, and supports cross-platform 
    features, horizontal mode, configurable view callbacks, header support, footer support, scroll's loading, and etc.
-keyExtractor - enabling the developer to look at every item inside the requested object. Essentially telling the
    list to use id's for the react keys instead of the default key properties. Also note strings 'must be unique'
-renderItem - almost like keyExtractor but slightly different in which it takes an item from data 
    and renders it into the list
-Navigation and route configuration
-Navigating from a child components
-TouchableOpacity - A primitive element which fades out any child elements. Also upon click a user will definitely
    know that they have touched the mobile screen
-library of with Navigation navigation.navigate('pathFoo.js') implementation allowing 
    navigation amongst components

