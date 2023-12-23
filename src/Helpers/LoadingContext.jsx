import React, { createContext, useContext, useState,useEffect } from 'react';
import { ActivityIndicator, Dialog, Portal, Button, Modal} from 'react-native-paper';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { getCurrentDate } from '../api/CommonFunctions';

const LoadingContext = createContext();

const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);  
  const [toast, setToastMessage] = useState(""); 
  const [cdate, setDate] = useState(getCurrentDate()); 
  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);
  
  const delay = 3000;
  let interValId = null;
  /*
  */
  const getHeight = () => {
    const screenHeight = Dimensions.get('window').height;
    return screenHeight;
  }

  const startTimer = () => {
    interValId = setInterval(() => {
      clearInterval(interValId);
      setToastMessage(null)
    }, delay)
  }


  useEffect(() => {
   
  }, []);






  const toastModel = () => {
    return (
      <Portal>
        <Modal
          visible={toast ? true : false}
         // onDismiss={hideModal}
          contentContainerStyle={[styles.containerStyle,toast.type=="error" ?styles. error_container : null ]}
        >
        <View style={{width:"100%",flexDirection:"row"}}>
         <Image
            source={logo}
            style={{ width: 30, height: 30, marginRight: 5 }}
          />
          <Text style={[styles.toast,toast.type=="error" ? styles.error:null]}>{toast.msg}</Text>
          </View>
        </Modal>
      </Portal>
    )
  }

  const setToast = (msg, type = "INFO") => {
    let data = {
      msg: msg,
      type: type
    }
    setToastMessage(data);
     startTimer();
  }

  return (
    <LoadingContext.Provider value={{ loading, startLoading, stopLoading, setToast,cdate,setDate }}>
      {children}
      {loading && (
        <View style={{
          flex: 1, justifyContent: 'center', alignItems: 'center', position: "absolute",
          backgroundColor: "#000", width: "100%", height: "100%",opacity:0.8
        }}>
          <ActivityIndicator animating={true} size="large" /> 
        </View>
      )}
      {toast && toastModel()}   
    </LoadingContext.Provider>
  );
};

const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};

const styles = StyleSheet.create({
  dialog: {
    borderRadius: 6,
    minHeight: 30
  },
  toast: {
    color: "green",
    marginTop:4
  },
  toasterMain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: "absolute",
    backgroundColor: "#000",
    opacity: 0.5,
    width: "100%",
    height: "100%",
    zIndex: 9999
  },
  toastView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: "absolute",
    bottom: "20%",
    width: "80%",
    left: "10%",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 5,
    zIndex: 9999

  },
  containerStyle:{
    backgroundColor: "white",
    padding: 8,
    width: "80%",
    marginLeft:"10%",
    borderRadius:5,
    borderWidth:1,
    borderColor:"#ddd"
  },
  error_container:{
    borderColor:"red"
  },
  error:{
    color:"red"
  }
})

export { LoadingProvider, useLoading };