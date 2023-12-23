import React,{useState,useEffect} from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import HeaderScreen from "./HeaderScreen";
import TopIconBar from "./TopIconBar";
import { SCREEN_TWO_1_URL,SCREEN_TWO_2_URL  } from "./api/ApiUrls";
import { apiGetDataAwait } from "./api/ApiManager";
import { useLoading } from "./Helpers/LoadingContext"
import { formatDateDb,getCurrentDate } from "./api/CommonFunctions";

const LocoMotive3d = ({ navigation,route }) => {
  const [data, setData] = useState({});
  const [secData, setSecData] = useState({});
  //const [cdate, setDate] = useState(getCurrentDate());
  const { startLoading, stopLoading, setToast,cdate,setDate } = useLoading();

  const getData = async () => {    
    startLoading();
    let url = SCREEN_TWO_1_URL + formatDateDb(cdate);
    console.log(SCREEN_TWO_1_URL , " test " , url);
    let _data = await apiGetDataAwait(url);
    // console.log("profile ", data_user);
    if (_data) {     
      setData(_data)
    }
    stopLoading();
  };

  const getSecData = async () => {    
    // startLoading();
     let url = SCREEN_TWO_2_URL + formatDateDb(cdate);
     let _data = await apiGetDataAwait(url); 
     if (_data) {     
       setSecData(decrypt_data(_data))
     }
     //stopLoading();
   };

   
  const getValue=(index)=>{
    return data[index]!==undefined ? data[index] : "***";
  }

  const getSecValue=(index)=>{
    return secData[index]!==undefined ? secData[index] : "***";
  }
  useEffect(() => {
    getData();
    getSecData();
  }, [cdate]);
  return (
    <>
    
      <TopIconBar navigation={navigation} route={route} />
      <View style={styles.mainContainer}>       
        <View style={styles.container_2}>
          <Text style={styles.text}>Lotomatic 3D</Text>
          <Text style={styles.subText}>2-12-2023 (sun)</Text>
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
              <Text style={styles.subViewData}>565</Text>
              <Text style={styles.subViewData}>461</Text>
            </View>

            <View style={styles.subViewBox}>
              <Text style={styles.subViewData}>565</Text>
              <Text style={styles.subViewData}>461</Text>
            </View>
            <View style={styles.subViewBox}>
              <Text style={styles.subViewData}>565</Text>
              <Text style={styles.subViewData}>461</Text>
            </View>
            <View style={styles.subViewBox}>
              <Text style={styles.subViewData}>565</Text>
              <Text style={styles.subViewData}>461</Text>
            </View>
            <View style={styles.subViewBox}>
              <Text style={styles.subViewData}>565</Text>
              <Text style={styles.subViewData}>461</Text>
            </View>
            <View style={styles.subViewBox}>
              <Text style={styles.subViewData}>565</Text>
              <Text style={styles.subViewData}>461</Text>
            </View>
            <View style={styles.subViewBox}>
              <Text style={styles.subViewData}>565</Text>
              <Text style={styles.subViewData}>461</Text>
            </View>
            <View style={styles.subViewBox_1}>
              <Text style={styles.subViewData}>565</Text>
              
            </View>
          </View>
          <View style={styles.subView}>
            <View style={styles.subTitle}>
              <Text style={styles.subHeading}>Consolation</Text>
            </View>
            <View style={styles.subViewBox}>
              <Text style={styles.subViewData}>565</Text>
              <Text style={styles.subViewData}>461</Text>
            </View>
            <View style={styles.subViewBox}>
              <Text style={styles.subViewData}>565</Text>
              <Text style={styles.subViewData}>461</Text>
            </View>
            <View style={styles.subViewBox}>
              <Text style={styles.subViewData}>565</Text>
              <Text style={styles.subViewData}>461</Text>
            </View>
            <View style={styles.subViewBox}>
              <Text style={styles.subViewData}>565</Text>
              <Text style={styles.subViewData}>461</Text>
            </View>
            <View style={styles.subViewBox}>
              <Text style={styles.subViewData}>565</Text>
              <Text style={styles.subViewData}>461</Text>
            </View>
            <View style={styles.subViewBox}>
              <Text style={styles.subViewData}>565</Text>
              <Text style={styles.subViewData}>461</Text>
            </View>
            <View style={styles.subViewBox}>
              <Text style={styles.subViewData}>565</Text>
              <Text style={styles.subViewData}>461</Text>
            </View>
            <View style={styles.subViewBox_1}>
              <Text style={styles.subViewData}>565</Text>
              
            </View>
          </View>
        </View>

        {/* <View style={styles.container_2}>
          <Text style={styles.text}>Lotomatic Gold</Text>
          <Text style={styles.subText}>20-12-2023 (sun)</Text>
        </View> */}
        {/* <View style={styles.container_6}>
          <View style={styles.subContainer}>
            <Text style={styles.cat_text}>1st</Text>
            <Text style={styles.cat_text}>2nd</Text>
            <Text style={styles.cat_text}>3rd</Text>
          </View>
          <View style={styles.subContainer_1}>
            <View>
              <Text style={styles.cat_text_2}>977</Text>
              <Text style={styles.cat_text_2}>977</Text>
            </View>
            <View>
              <Text style={styles.cat_text_2}>977</Text>
              <Text style={styles.cat_text_2}>977</Text>
            </View>
            <View>
              <Text style={styles.cat_text_2}>977</Text>
              <Text style={styles.cat_text_2}>977</Text>
            </View>

            <View>
              <Text style={styles.cat_text_2}>977</Text>
              <Text style={styles.cat_text_2}>977</Text>
            </View>
            <View>
              <Text style={styles.cat_text_2}>977</Text>
              <Text style={styles.cat_text_2}>977</Text>
            </View>
            <View>
              <Text style={styles.cat_text_2}>977</Text>
              <Text style={styles.cat_text_2}>977</Text>
            </View>
          </View>
          <View style={styles.subContainer}>
            <Text style={styles.cat_text}>Bonus</Text>
            <Text style={styles.cat_text}>Bonus</Text>
            <Text style={styles.cat_text}>Bonus</Text>
          </View>
        </View> */}
      </View>
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
    backgroundColor: "#f7e2a8",
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
    color: "red",
    fontSize: 20,
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
  },
  subViewBox_1: {
    display: "flex",
    flexDirection: "row",
    marginLeft:20
   
  },
  subViewData: {
    fontSize: 20,
  },
});

export default LocoMotive3d;
