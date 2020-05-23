import axios from 'axios';

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:'Bearer ZJ16dOtDR8D2RJiOeoRdsU97K4K8BXjXFQ3b87jPw5xbp2C6NzI1nU1ZNvYuS4jhcIsxwhi2JTqGO8LPm6wAskJtWP4L0sNsk-cvRxWEnpNSD8krBLhfKgvQ2p_IXnYx'
  },
});

/*
------------------------------------------------
    fetching network request for api
------------------------------------------------
*/
/*
------------------------------------------------
  baseURL:
  property is going to be root url to 
  make the request too! See documentation yelp
------------------------------------------------
*/
/*
------------------------------------------------
 Yelp doucmentation
 GET https://api.yelp.com/v3/businesses/{id}
------------------------------------------------
*/
/*
------------------------------------------------
yelp.get('/search')

If you need to make a request just call our yelp 
instance and make a get request.
------------------------------------------------
*/
/*
------------------------------------------------
Getting Authorization - Request Header to YELP API
headers:{
    Authorization: 'Bearer ZJ16dOtDR8D2RJiOeoRdsU97K4K8BXjXFQ3b87jPw5xbp2C6NzI1nU1ZNvYuS4jhcIsxwhi2JTqGO8LPm6wAskJtWP4L0sNsk-cvRxWEnpNSD8krBLhfKgvQ2p_IXnYx'
}

Allows us authorization to yelp api
Copy and paste only the api key

Client ID
bCcOJ9KaM6b0_5xux8T8uQ

API Key
ZJ16dOtDR8D2RJiOeoRdsU97K4K8BXjXFQ3b87jPw5xbp2C6NzI1nU1ZNvYuS4jhcIsxwhi2JTqGO8LPm6wAskJtWP4L0sNsk-cvRxWEnpNSD8krBLhfKgvQ2p_IXnYx
------------------------------------------------
*/
/*
------------------------------------------------
WE CAN IMPORT to ANY COMPONENT BY Accessing this file
to access the yelp api, allows us to avoid doing this 
over and over in our other components
------------------------------------------------
*/