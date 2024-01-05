import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ApiManager = axios.create({
    baseURL: 'https://ebook.softdigisolutions.com/api/', // Replace with your base URL
    timeout: 100000, // Set a timeout (optional)
    headers: {
      'Content-Type': 'application/json' // Set default headers (optional)
     
      // Add any other headers you need
    },
    responseType:'json',
   // withCredentials:true
});

const authorizationHeader=async()=>{
  const token = await AsyncStorage.getItem("jwt");
  if(token){
    return {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
  }else{
    return {headers:{}}
  }

}

/**
 * 
 * @param {*} url 
 * @returns 
 */
const apiGetDataAwait = async(url,headersEnable=true)=>{
    try{
      const headers =  {};
      let output =  await ApiManager.get(url,headers);
      return output.data;
    }catch(ex){
        console.log("api get await error" , ex)
        return "test";
    }
}


const apiGetDataAwaitHeader = async(url)=>{
  try{
    const headers = {headers:{header:"IO1290ad11"}};
    let output =  await ApiManager.get(url,headers);
    //console.log("api get await output " ,  output)
    return output.data;
  }catch(ex){
    //console.log('Response Data:', ex.response);
      console.log("api get await error" , ex)
  }
}

const process_error=(error)=>{
  console.log("error ", error);
  if(error.code=="ERR_NETWORK"){
    return "SERVER NOT REACHABLE";
  }else if(error.code=="ERR_BAD_REQUEST"){
    if(error &&  error.response && error.response.data && error.response.data.data){
      return error.response.data.data;
    }
    return error.message;
  }
}

const apiPostData = async(url,data_in,call_back,error_call_back,headersEnable=true) => {
    const headers = headersEnable ? await authorizationHeader() : {};
    ApiManager.post(url, data_in,headers) // Use the instance to make requests
      .then(response => {
       // console.log("response ", response);
        call_back(response.data);
      })
      .catch(error => {
        let msg = process_error(error);
        error_call_back(msg);
        //console.error('Error posting data:', error);
      });
  };
// IO1290ad11

const apiPostDataHeaders = async(url,data_in,call_back,error_call_back) => {
  const headers = {headers:{header:"IO1290ad11"}};
  ApiManager.post(url, data_in,headers) // Use the instance to make requests
    .then(response => {
      //console.log("response ", response);
      call_back(response.data);
    })
    .catch(error => {
      let msg = process_error(error);
      error_call_back(msg);
      //console.error('Error posting data:', error);
    });
};

  const apiPutData = async(url,data_in,call_back,error_call_back,headersEnable=true) => {
    const headers = headersEnable ? await authorizationHeader() : {};
    ApiManager.put(url, data_in,headers) // Use the instance to make requests
      .then(response => {
       // console.log("response ", response);
        call_back(response.data);
      })
      .catch(error => {
        let msg = process_error(error);
        error_call_back(msg);
        console.error('Error making PUT request:', error);

        // Log specific details if available
        if (error.response) {
          console.error('Response status:', error.response.status);
          console.error('Response data:', error.response.data);
          console.error('Response headers:', error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.error('No response received. Request details:', error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error during request setup:', error.message);
        }
      });
  };
  const apiPostDataMultiPart = async(url,data_in,call_back,error_call_back,headersEnable=true,headId="") => {
    const headers = headersEnable ? await authorizationHeader() : {headers:{}};   
    headers.headers["Content-Type"]="multipart/form-data";
    if(headId.length > 0){
      headers.headers["header"] = "IO1290ad11";
    }
    console.log("post data "  , data_in);
    console.log("headers ", headers);
    ApiManager.post(url, data_in,headers) // Use the instance to make requests
      .then(response => {
       // console.log("response ", response);
        call_back(response.data);
      })
      .catch(error => {
       // console.log(" e data ",error.response.data)
        let msg = process_error(error);
        error_call_back(msg);
        console.error(error);
      });
  };


/**
 * 
 */
const apiGetData = async(url,call_back)=>{
  const headers = await authorizationHeader();
    ApiManager.get(url,headers) // Use the instance to make requests
    .then(response => {
      call_back(response.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

export{
    apiGetDataAwait,
    apiPostData,
    apiGetData,
    apiPostDataMultiPart,
    apiPutData,
    apiGetDataAwaitHeader,
    apiPostDataHeaders 
}

export default ApiManager;
  