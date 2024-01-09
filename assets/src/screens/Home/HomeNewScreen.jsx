import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { SCREEN_ONE_1_URL, SCREEN_ONE_2_URL } from "../../api/ApiUrls";
import { apiGetDataAwait } from "../../api/ApiManager";
import { useLoading } from "../Main/LoadingContext";
import {
  formatDateDb,
  getDayNameFromString,
  decrypt_data,
} from "../../api/CommonFunctions";
import { COLORS } from "../../api/ImageSrc";
import MenuComponent from "./../Main/MenuCompoenent";
//import { PanGestureHandler, State } from "react-native-gesture-handler";
import { Swipeable } from "react-native-gesture-handler";
import LocoMotiveThreed from "./LocoMotiveThreed";

const HomeNewScreen = ({ navigation, route }) => {
  const [data, setData] = useState(null);
  const [raw, setRaw] = useState(null);
  const [secData, setSecData] = useState({});
  // const [cdate, setDate] = useState(getCurrentDate());
  const { startLoading, stopLoading, setToast, cdate, setDate, setMsg } =
    useLoading();

  const onSwipeGestureEvent = (event) => {
    if (
      event.nativeEvent.translationX < -50 &&
      event.nativeEvent.state === State.ACTIVE
    ) {
      // If swiped from right to left, navigate to AnotherScreen
      navigation.navigate("Locomotivethree");
      // console.log("testing swipe")
    }
  };

  const rightSwipeHandler = () => {
    // Handle right swipe action
    console.log("Swiped right!");
    navigation.navigate("Locomotivethree");
    //  setToast("swipe right = ");
  };

  const renderRightActions = (progress, dragX) => {
    // You can return the UI components for the right swipe actions here
    // For simplicity, let's return a TouchableOpacity
    return (
      <View style={styles.rightActionsContainer}>
        <Text>Swipe Right Action</Text>
      </View>
    );
  };

  const getOther = (dt, index, max) => {
    let values = [];
    for (let i = 1; i <= max; i++) {
      let ind = index + "_" + i;
      let single_value = getValueRes(dt, ind);
      if (single_value) {
        values.push(single_value);
      }
    }
    return values.join(" ");
  };

  const setMessage = (dt) => {
    let msg = "Locomatic " + getDayNameFromString(cdate) + "(" + cdate + ")\n";
    msg += "1st:" + getValueRes(dt, "prize_1") + "\n";
    msg += "2nd:" + getValueRes(dt, "prize_2") + "\n";
    msg += "3rd:" + getValueRes(dt, "prize_3") + "\n";
    msg += "Special:" + getOther(dt, "special", 10) + "\n";
    msg += "Consolation:" + getOther(dt, "special", 10) + "\n";
    setMsg(msg);
  };

  const getData = async () => {
    //console.log("date  " , cdate);
    startLoading();
    let url = SCREEN_ONE_1_URL + formatDateDb(cdate);
    // console.log("url ", url);
    try {
      // setToast("started data = ");
      let _data = await apiGetDataAwait(url);
      setToast("testing data = " + _data);
      // console.log("called out test" , _data)
      if (_data) {
        // setRaw(_data);
        let dec_output = await decrypt_data(_data);
        // setToast(" description  data");
        // console.log("dout testttttuiinngggg  = ", dec_output);
        setData(dec_output);
        setMessage(dec_output);
      }
      await getSecData();
    } catch (ex) {
      console.log("ex ", ex);
    }
    // setToast("stop  data");
    stopLoading();
  };

  const getSecData = async () => {
    // startLoading();
    let url = SCREEN_ONE_2_URL + formatDateDb(cdate);
    let _data = await apiGetDataAwait(url);
    if (_data) {
      //  setToast(" sec data ");
      setSecData(decrypt_data(_data));
    }
    //stopLoading();
  };

  const getValue = (index) => {
    // console.log(" data ", data, " index = ", index);
    return data && data[index] !== undefined ? data[index] : "";
  };

  const getValueRes = (dt, index) => {
    // console.log(" data ", data, " index = ", index);
    return dt && dt[index] !== undefined ? dt[index] : "";
  };

  const getSecValue = (index) => {
    return secData[index] !== undefined ? secData[index] : "";
  };

  useEffect(() => {
    // console.log("testing control");
    getData();
    //
    // console.log(" date = ", cdate);
    //let dayname = getDayNameFromString(getCurrentDate());
    // console.log("dayaname " , dayname);
  }, [cdate, navigation]);

  return (
    <>
      <MenuComponent navigation={navigation} refreshData={getData} />
      {/*   <PanGestureHandler
        onGestureEvent={onSwipeGestureEvent}
        minDeltaX={10} // Minimum horizontal distance for the gesture to be considered a swipe
  > */}
      <View style={styles.mainContainer}>
      <TouchableOpacity onPress={rightSwipeHandler}>
        <Swipeable renderRightActions={renderRightActions}>
          <View style={styles.container_2}>
            <Text style={styles.text}>Lotomatic 4D</Text>
            <Text style={styles.subText}>
              {cdate} ({getDayNameFromString(cdate)})
            </Text>
          </View>

          <View style={styles.container_3}>
            <View style={styles.subContainer}>
              <Text style={styles.cat_text}>1st</Text>
              <Text style={styles.cat_text}>2nd</Text>
              <Text style={styles.cat_text}>3rd</Text>
            </View>
            <View style={styles.subContainer}>
              <Text style={styles.cat_text_1}>{getValue("prize_1")}</Text>
              <Text style={styles.cat_text_1}>{getValue("prize_2")}</Text>
              <Text style={styles.cat_text_1}>{getValue("prize_3")}</Text>
            </View>
          </View>

          <View style={styles.container_4}>
            <View style={styles.subView}>
              <View style={styles.subTitle}>
                <Text style={styles.subHeading}>Special</Text>
              </View>
              <View style={styles.subViewBox}>
                <Text style={styles.subViewData}>{getValue("special_1")}</Text>
                <Text style={styles.subViewData}>{getValue("special_2")}</Text>
              </View>

              <View style={styles.subViewBox}>
                <Text style={styles.subViewData}>{getValue("special_3")}</Text>
                <Text style={styles.subViewData}>{getValue("special_4")}</Text>
              </View>
              <View style={styles.subViewBox}>
                <Text style={styles.subViewData}>{getValue("special_5")}</Text>
                <Text style={styles.subViewData}>{getValue("special_6")}</Text>
              </View>
              <View style={styles.subViewBox}>
                <Text style={styles.subViewData}>{getValue("special_7")}</Text>
                <Text style={styles.subViewData}>{getValue("special_8")}</Text>
              </View>
              <View style={styles.subViewBox}>
                <Text style={styles.subViewData}>{getValue("special_9")}</Text>
                <Text style={styles.subViewData}>{getValue("special_10")}</Text>
              </View>
            </View>
            <View style={styles.subView}>
              <View style={styles.subTitle}>
                <Text style={styles.subHeading}>Consolation</Text>
              </View>
              <View style={styles.subViewBox}>
                <Text style={styles.subViewData}>{getValue("cons_1")}</Text>
                <Text style={styles.subViewData}>{getValue("cons_2")}</Text>
              </View>
              <View style={styles.subViewBox}>
                <Text style={styles.subViewData}>{getValue("cons_3")}</Text>
                <Text style={styles.subViewData}>{getValue("cons_4")}</Text>
              </View>
              <View style={styles.subViewBox}>
                <Text style={styles.subViewData}>{getValue("cons_5")}</Text>
                <Text style={styles.subViewData}>{getValue("cons_6")}</Text>
              </View>
              <View style={styles.subViewBox}>
                <Text style={styles.subViewData}>{getValue("cons_7")}</Text>
                <Text style={styles.subViewData}>{getValue("cons_8")}</Text>
              </View>
              <View style={styles.subViewBox}>
                <Text style={styles.subViewData}>{getValue("cons_9")}</Text>
                <Text style={styles.subViewData}>{getValue("cons_10")}</Text>
              </View>
            </View>
          </View>

          <View style={styles.container_2}>
            <Text style={styles.text}>Lotomatic Gold</Text>
            <Text style={styles.subText}>
              {cdate} ({getDayNameFromString(cdate)})
            </Text>
          </View>
          <View style={styles.container_6}>
            <View style={styles.subContainer}>
              <Text style={styles.cat_text}>1st</Text>
            </View>
            <View style={styles.subContainer_1}>
              <View>
                <Text style={styles.cat_text_2}>{getSecValue("prize_1")}</Text>
              </View>
            </View>
          </View>
        </Swipeable>
        </TouchableOpacity>
      </View>
      {/* </PanGestureHandler> */}
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 3,
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
    justifyContent: "space-around",
    height: 80,
  },
  container_6: {
    display: "flex",
    justifyContent: "space-around",
    height: 150,
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  subContainer_1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  cat_text: {
    color: COLORS.TEXT,
    fontSize: 20,
    fontWeight: "700",
  },
  cat_text_1: {
    fontWeight: "600",
    fontSize: 30,
    color: "black",
  },
  cat_text_2: {
    fontWeight: "600",
    fontSize: 25,
    color: "black",
  },
  subTitle: {
    backgroundColor: "#e6e4e1",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  },
  subView: {
    width: "50%",
    borderLeftWidth: 1,
    borderColor: "#ddd",
  },
  container_4: {
    display: "flex",
    flexDirection: "row",
    //height: 170,
  },
  subHeading: {
    fontWeight: "bold",
  },
  subViewBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 6,
    marginBottom: 4,
  },
  subViewData: {
    fontSize: 20,
  },
  rightActionsContainer: {
    alignItems: "center",
    justifyContent: "center",
   // backgroundColor: "green",
    width: 80,
  },
});

export default HomeNewScreen;
