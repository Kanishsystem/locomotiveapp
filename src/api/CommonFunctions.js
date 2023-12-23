import { ENCRYPT_KEY } from "./ApiUrls";
import * as CryptoJS from 'crypto-js';

const getDayName=(day)=>{
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dayName = days[day];
    return dayName;
}

const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-based
    const year = date.getFullYear();

    // Ensure that day and month are always two digits
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;

    return `${formattedDay}-${formattedMonth}-${year}`;
  }

  const getCurrentDate=()=>{
    let date = new Date();
    return formatDate(date);
  }

  const getDayNameFromString = (dateString) => {
    const [day, month, year] = dateString.split('-');
    const dateObject = new Date(`${year}-${month}-${day}`);
    const options = { weekday: 'short' };
    return dateObject.toLocaleDateString('en-US', options);
  };

  const decrypt_data=(data)=>{
    let decrypt_string = CryptoJS.AES.decrypt((data), ENCRYPT_KEY).toString(CryptoJS.enc.Utf8);
    let output = JSON.parse(decrypt_string);
  //  console.log("dec output ", output);
    return output
  }

  const formatDateDb=(inputDateStr)=>{   
      // Split the input date string into day, month, and year
      var dateParts = inputDateStr.split("-");
      //
      return dateParts[2] +"-"+dateParts[1]+"-"+ dateParts[0];
      
      // Create a new Date object using the parts
      var inputDate = new Date(dateParts[2], dateParts[1], dateParts[0]);
      
      // Format the date as "yyyy-mm-dd"
      var outputDateStr = inputDate.toISOString().slice(0, 10);
      
      return outputDateStr;
  
  }

export {
    getDayName,
    formatDate,
    getDayNameFromString,
    getCurrentDate,
    decrypt_data,
    formatDateDb
}