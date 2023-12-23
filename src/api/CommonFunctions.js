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
    console.log("dec output ", output);
    return output
  }

export {
    getDayName,
    formatDate,
    getDayNameFromString,
    getCurrentDate,
    decrypt_data
}