import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SCREEN_TWO_1_URL } from "../../api/ApiUrls";
import { apiGetDataAwait } from "../../api/ApiManager";
import { useLoading } from "../Main/LoadingContext";
import {
  formatDateDb,
  decrypt_data,
  getDayNameFromString,
} from "../../api/CommonFunctions";
import { COLORS } from "../../api/ImageSrc";
import MenuComponent from "./../Main/MenuCompoenent";

//import { PanGestureHandler, State } from "react-native-gesture-handler";

const LocoMotiveThreed = ({ navigation, route }) => {
  const [data, setData] = useState({});
  const { startLoading, stopLoading, cdate, setMsg } = useLoading();

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
    msg += "Special:" + getOther(dt, "special", 15) + "\n";
    msg += "Consolation:" + getOther(dt, "special", 15) + "\n";
    setMsg(msg);
  };
  const getValueRes = (dt, index) => {
    // console.log(" data ", data, " index = ", index);
    return dt && dt[index] !== undefined ? dt[index] : "***";
  };

  const onSwipeGestureEvent = (event) => {
    if (
      event.nativeEvent.translationX < -50 &&
      event.nativeEvent.state === State.ACTIVE
    ) {
      // If swiped from right to left, navigate to AnotherScreen
      navigation.navigate("Locomotivesix");
      //console.log("testing swipe")
    }
    if (
      event.nativeEvent.translationX > 50 &&
      event.nativeEvent.state === State.ACTIVE
    ) {
      // If swiped from left to right, navigate to AnotherScreen
      navigation.navigate("HomeNew");
    }
  };

  const getData = async () => {
    startLoading();
    let url = SCREEN_TWO_1_URL + formatDateDb(cdate);
    // console.log(SCREEN_TWO_1_URL, " test ", url);
    let _data = await apiGetDataAwait(url);
    // console.log("profile ", data_user);
    if (_data) {
      let dec_output = decrypt_data(_data);
      setData(dec_output);
      setMessage(dec_output);
    }
    stopLoading();
  };

  const getValue = (index) => {
    return data[index] !== undefined ? data[index] : "***";
  };

  useEffect(() => {
    getData();
  }, [cdate]);
  return (
    <>
      <MenuComponent navigation={navigation} refreshData={getData} />
    {/*   <PanGestureHandler
        onGestureEvent={onSwipeGestureEvent}
        minDeltaX={10} // Minimum horizontal distance for the gesture to be considered a swipe
      > */}
        <View style={styles.mainContainer}>
          <View style={styles.container_2}>
            <Text style={styles.text}>Lotomatic 3D</Text>
            <Text style={styles.subText}>
              {cdate}( {getDayNameFromString(cdate)})
            </Text>
          </View>
          <View style={styles.container_3}>
            <View style={styles.subContainer}>
              <View>
                <Text style={styles.cat_text}>1st</Text>
              </View>
              <View>
                <Text style={styles.cat_text}>2nd</Text>
              </View>
              <View>
                <Text style={styles.cat_text}>3rd</Text>
              </View>
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
              <View style={styles.subViewBox}>
                <Text style={styles.subViewData}>{getValue("special_11")}</Text>
                <Text style={styles.subViewData}>{getValue("special_12")}</Text>
              </View>
              <View style={styles.subViewBox}>
                <Text style={styles.subViewData}>{getValue("special_13")}</Text>
                <Text style={styles.subViewData}>{getValue("special_14")}</Text>
              </View>
              <View style={styles.subViewBox_1}>
                <Text style={styles.subViewData}>{getValue("special_15")}</Text>               
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
              <View style={styles.subViewBox}>
                <Text style={styles.subViewData}>{getValue("cons_11")}</Text>
                <Text style={styles.subViewData}>{getValue("cons_12")}</Text>
              </View>
              <View style={styles.subViewBox}>
                <Text style={styles.subViewData}>{getValue("cons_13")}</Text>
                <Text style={styles.subViewData}>{getValue("cons_14")}</Text>
              </View>
              <View style={styles.subViewBox_1}>
                <Text style={styles.subViewData}>{getValue("cons_15")}</Text>               
              </View>
            </View>
          </View>
        </View>
    {/*   </PanGestureHandler> */}
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 3,
  },
  TopView: {
    backgroundColor: "#5c0819",
    height: 45,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  ImageBox: {
    borderRadius: "50%",
    width: 50,
    height: 50,
    position: "relative",
    overflow: "hidden",
  },
  iconBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: 50,
    height: 50,
  },
  TopHeading: {
    fontSize: 20,
    color: "white",
    fontWeight: "700",
    marginLeft: 10,
  },
  container_1: {
    backgroundColor: "#73716b",
    height: 45,
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
    height: 110,
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
  },
  subHeading: {
    fontWeight: "bold",
  },
  subViewBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom:5
  },
  subViewBox_1: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 33,
   // justifyContent:"center"
  },
  subViewData: {
    fontSize: 20,
  },
});

export default LocoMotiveThreed;
