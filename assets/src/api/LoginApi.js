import CryptoJS from "react-native-crypto-js";
import AsyncStorage from '@react-native-async-storage/async-storage';

const key = "AES1234567890123";
const iv = "AES1234567890123";
import moment from 'moment';

const encryptUsername = (input_string) => {
  const item_username = input_string;
  const keyUtf8 = CryptoJS.enc.Utf8.parse(key);
  const ivUtf8 = CryptoJS.enc.Utf8.parse(iv);
  const itemUsernameUtf8 = CryptoJS.enc.Utf8.parse(item_username);

  const encrypted = CryptoJS.AES.encrypt(itemUsernameUtf8, keyUtf8, {
    iv: ivUtf8,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  const encryptedMessage = encrypted.toString();
  return encryptedMessage;
};

const clearStorage = () => {
  AsyncStorage.clear();
}

const storeItem = async (name, item) => {
  await AsyncStorage.setItem(name, item);
}

const getItem = async (name) => {
  return await AsyncStorage.getItem(name);
}

const storeJwt = async (jwt_string) => {
  await storeItem("jwt", jwt_string);
}

const getJwt = async () => {
  return await getItem("jwt")
}

const storeUserData = async (data) => {
  let login_data = JSON.stringify(data);
  //  console.log("login_data ", login_data);
  await storeItem("udata", login_data);
}

const storeLanguge = async (languageCode) => {
  await storeItem("softLanguageCode", languageCode);
}

const getLanguage = async () => {
  return await getItem("softLanguageCode") || "en";
}



const getUserData = async () => {
  let data = await getItem("udata");
  //console.log("output_data ", data);
  if (data) {
    return JSON.parse(data);
  }
  return null;
}

const getUserId = async () => {
  let udata = await getUserData();
  //console.log("udata " , udata);
  return udata != null && udata.id != undefined ? udata.id : 0;
}

const getStateId = async () => {
  let udata = await getUserData();
  return udata != null && udata.address != undefined ? udata.address.state : 0;
}

const getRoleId = async () => {
  let udata = await getUserData();
  return udata != null && udata.userTypeId != undefined ? udata.userTypeId : 0;
}

const getCurrentDate = () => {
  const formattedDate = moment().format('YYYY-MM-DD HH:mm:ss');
  return formattedDate;
}




export {
  encryptUsername, storeJwt, getJwt, storeUserData, getUserData,
  getUserId, getStateId, getRoleId, clearStorage, storeLanguge, getLanguage, getCurrentDate
};
