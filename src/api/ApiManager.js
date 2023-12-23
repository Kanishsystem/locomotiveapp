import axios from 'axios';


const ApiManager = axios.create({
    baseURL: 'http://ebookapi.softdigisolutions.com/api/', // Replace with your base URL
    timeout: 100000, // Set a timeout (optional)
    headers: {
      'Content-Type': 'application/json' // Set default headers (optional)
     
      // Add any other headers you need
    },
    responseType:'json',
   // withCredentials:true
});


/**
 * 
 * @param {*} url 
 * @returns 
 */
const apiGetDataAwait = async(url,headersEnable=true)=>{
    try{
      const headers = {};
      let output =  await ApiManager.get(url,headers);
      return output.data;
    }catch(ex){
      
        console.log("api get await error" , ex)
    }
}



export{
    apiGetDataAwait   
}

export default ApiManager;
  