import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import { SCREEN_THREE_1_URL, SCREEN_THREE_2_URL } from "../../api/ApiUrls";
import { apiGetDataAwait } from "../../api/ApiManager";
import { useLoading } from "../Main/LoadingContext";
import {
  formatDateDb, 
  decrypt_data,
  getDayNameFromString,
  reverseDateDb
} from "../../api/CommonFunctions";
import DigitShow from "./../../helpers/DigitShow"
import { COLORS } from "../../api/ImageSrc";
import MenuComponent from "./../Main/MenuCompoenent";
//import { PanGestureHandler, State } from 'react-native-gesture-handler';

const LotoMotiveSixd = ({ navigation, route }) => {
  const [data, setData] = useState({});
  const [secData, setSecData] = useState({});
  const { startLoading, stopLoading, setToast, cdate, setDate,setMsg } = useLoading();

  const getOther=(dt,index,max)=>{
    let values = [];
    for(let i=1;i<=max;i++){
      let ind = index+"_"+i;
      let single_value = getValueRes(dt,ind);
      if(single_value){
      values.push(single_value);   
      }   
    }
    return values.join(" ");
  }

 const setMessage=()=>{
  let msg = "Lotomatic 5D " + date_selection_display(getValue("cat_date")) +"\n";
    msg +="1st:"+getValue("prize_1")+"\n";
    msg +="2nd:"+getValue("prize_2")+"\n";
    msg +="3rd:"+getValue("prize_3")+"\n";
    msg +="4th:"+getValue("prize_4")+"\n";
    msg +="5th:"+getValue("prize_5")+"\n";
    msg +="6th:"+getValue("prize_6")+"\n\n\n";

    // message 
    let msg_sec = "Lotomatic 6D" + date_selection_display(getSecValue("cat_date")) + "\n";
    msg_sec += "1st:" + getSecValue("prize_1") + "\n";
    msg_sec += "2nd:" + getSecValue("special_1") +" or "+  getSecValue("special_2")  + "\n";
    msg_sec += "3rd:" + getSecValue("special_3") +" or "+  getSecValue("special_4")  + "\n";
    msg_sec += "4th:" + getSecValue("special_5") +" or "+  getSecValue("special_6")  + "\n";
    msg_sec += "5th:" + getSecValue("special_7") +" or "+  getSecValue("special_8")  + "\n";
    
    setMsg(msg + msg_sec);
   // msg +="Special:" + getOther(dt,"special",10)+"\n";
    //msg +="Consolation:" + getOther(dt,"special",10)+"\n";    
    setMsg(msg);
 }

 const getValueRes=(dt,index)=>{
  // console.log(" data ", data, " index = ", index);
   return dt && dt[index]!==undefined ? dt[index] : "***";
 }
  const onSwipeGestureEvent = (event) => {   
    if (event.nativeEvent.translationX > 50 && event.nativeEvent.state === State.ACTIVE) {
      // If swiped from left to right, navigate to AnotherScreen
      navigation.navigate('Locomotivethree');
    }
  };

  const getData = async () => {
    startLoading();
    let url = SCREEN_THREE_1_URL + formatDateDb(cdate);
    let _data = await apiGetDataAwait(url);
    if (_data) {
      let dec_output = decrypt_data(_data);
      setData(dec_output)
      //setMessage(dec_output);
    }
    await getSecData();
    setTimeout(() => {
      setMessage();
    }, 10 * 1000);
    stopLoading();
  };

  const getValue = (index) => {
    return data[index] !== undefined ? data[index] : "";
  };

  const getSecValue = (index) => {
    return secData[index] !== undefined ? secData[index] : "";
  };

  const getSecData = async () => {
    // startLoading();
    let url = SCREEN_THREE_2_URL + formatDateDb(cdate);
    let _data = await apiGetDataAwait(url);
    if (_data) {
      setSecData(decrypt_data(_data));
    }
    //stopLoading();
  };

  const date_selection_display = (input_date) => {
    let formatted_date = cdate;
    if (input_date && input_date.length > 6) {
      formatted_date = reverseDateDb(input_date);
    }
    return formatted_date + "(" + getDayNameFromString(formatted_date) + ")";
  };

  useEffect(() => {
    getData();
    
  }, [cdate]);
  return (
    <>
     <MenuComponent  navigation={navigation} refreshData={getData}/>
     {/*  <PanGestureHandler
        onGestureEvent={onSwipeGestureEvent}
        minDeltaX={10} // Minimum horizontal distance for the gesture to be considered a swipe
  > */}
    
      <View style={styles.MainContainer}>
     
        <View style={styles.container_2}>
          <Text style={styles.text}>Lotomatic 5D</Text>
          <Text style={styles.subText}>{date_selection_display(getValue("cat_date"))}</Text>
        </View>
        <View style={styles.container_3}>
          <View style={styles.subContainer}>
            <View>
              <Text style={styles.heading}>1St</Text>
              <Text style={styles.heading}>2nd</Text>
              <Text style={styles.heading}>3rd</Text>
            </View>
            <View style={styles.MainValue}>
              <DigitShow digits={5} value={getValue("prize_1")} type="end" />
              <DigitShow digits={5} value={getValue("prize_2")} type="end" />
              <DigitShow digits={5} value={getValue("prize_3")} type="end" />
            </View>
          </View>
          <View style={styles.subContainer}>
            <View>
              <Text style={styles.heading}>4th</Text>
              <Text style={styles.heading}>5th</Text>
              <Text style={styles.heading}>6th</Text>
            </View>
            <View style={styles.MainValue}>
              <DigitShow digits={5} value={getValue("prize_4")} type="start" />
              <DigitShow digits={5} value={getValue("prize_5")} type="start" />
              <DigitShow digits={5} value={getValue("prize_6")} type="start" />
            </View>
          </View>
        </View>

        <View style={styles.container_2}>
          <Text style={styles.text}>Lotomatic 6D</Text>
          <Text style={styles.subText}>{date_selection_display(getValue("cat_date"))}</Text>
        </View>
        <View style={styles.container_3}>
          <View style={styles.subContainer_2}>
            <View>
              <Text style={styles.heading}>1St</Text>
              <Text style={styles.heading}>2nd</Text>
              <Text style={styles.heading}>3rd</Text>
              <Text style={styles.heading}>4th</Text>
              <Text style={styles.heading}>5th</Text>
            </View>
            <View style={styles.MainValue}>
              <View style={[styles.mainValue, { justifyContent: "center" }]}>
                <DigitShow digits={6} value={getSecValue("prize_1")} type="end" />
              </View>
              <View style={styles.mainValue}>
                <DigitShow
                  digits={6}
                  value={getSecValue("special_1")}
                  type="end"
                />
                <View style={styles.or}>
                  <Text>or</Text>
                </View>
                <DigitShow
                  digits={6}
                  value={getSecValue("special_2")}
                  type="start"
                />
              </View>
              <View style={styles.mainValue}>
                <DigitShow
                  digits={6}
                  value={getSecValue("special_3")}
                  type="end"
                />
                <View style={styles.or}>
                  <Text>or</Text>
                </View>
                <DigitShow
                  digits={6}
                  value={getSecValue("special_4")}
                  type="start"
                />
              </View>
              <View style={styles.mainValue}>
                <DigitShow
                  digits={6}
                  value={getSecValue("special_5")}
                  type="end"
                />
                <View style={styles.or}>
                  <Text>or</Text>
                </View>
                <DigitShow
                  digits={6}
                  value={getSecValue("special_6")}
                  type="start"
                />
              </View>
              <View style={styles.mainValue}>
                <DigitShow
                  digits={6}
                  value={getSecValue("special_7")}
                  type="end"
                />
                <View style={styles.or}>
                  <Text>or</Text>
                </View>
                <DigitShow
                  digits={6}
                  value={getSecValue("special_8")}
                  type="start"
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      {/*  </PanGestureHandler> */}
    </>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
  container_2: {
    height: 50,
    backgroundColor: "#62bd7c",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    right: 0,
    justifyContent: "flex-end",
    borderBottomWidth: 1,
    borderColor: "black",
  },
  text: {
    position: "absolute",
    right: 0,
    top: 3,
    fontSize: 20,
    fontWeight: "bold",
  },
  subText: {
    position: "absolute",
    right: 0,
    color: "blue",
    fontWeight: "bold",
  },
  container_3: {
    display: "flex",
    flexDirection: "row",
  },
  subContainer: {
    width: "50%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  subContainer_2: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },

  heading: {
    color: COLORS.TEXT,
    fontSize: 20,
    marginVertical: 15,
    fontWeight: "700",
  },
  subValue: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: 10,
  },
  cat_text_1: {
    fontWeight: "600",
    fontSize: 30,
    color: "black",
    backgroundColor: "#ddd",
    height: 35,
    marginHorizontal: 2,
    width: 20,
  },
  mainValue: {
    display: "flex",
    flexDirection: "row",
  },
  or: {
    fontSize: 25,
    marginHorizontal: 10,
    marginTop: 20,
  },
});

export default LotoMotiveSixd;
