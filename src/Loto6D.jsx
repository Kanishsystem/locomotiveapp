import React,{useState,useEffect} from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import HeaderScreen from "./HeaderScreen";
import TopIconBar from "./TopIconBar";
import { SCREEN_ONE_URL } from "./api/ApiUrls";
import { apiGetDataAwait } from "./api/ApiManager";
import { useLoading } from "./Helpers/LoadingContext"

const Loto6D = ({ navigation }) => {
  const [data, setData] = useState({});
  const [cdate, setDate] = useState("");
  const { startLoading, stopLoading, setToast } = useLoading();

  const getData = async () => {    
    startLoading();
    let url = SCREEN_ONE_URL + cdate;
    let _data = await apiGetDataAwait(url);
    // console.log("profile ", data_user);
    if (_data) {     
      setData(_data)
    }
    stopLoading();
  };

  const getValue=(index)=>{
    return data[index]!==undefined ? data[index] : "";
  }

  useEffect(() => {
    getData()
  }, [cdate]);
  return (
    <>
    <HeaderScreen setDate={setDate} />
      <TopIconBar navigation={navigation} setDate={setDate}/>
      <View style={styles.MainContainer}>
        <View style={styles.container_2}>
          <Text style={styles.text}>Lotomatic 5D</Text>
          <Text style={styles.subText}>20-12-2023 (sun)</Text>
        </View>
        <View style={styles.container_3}>
          <View style={styles.subContainer}>
            <View>
              <Text style={styles.heading}>1St</Text>
              <Text style={styles.heading}>2nd</Text>
              <Text style={styles.heading}>3rd</Text>
            </View>
            <View style={styles.MainValue}>
              <View style={styles.subValue}>
                <Text style={styles.cat_text_1}>1</Text>
                <Text style={styles.cat_text_1}>2</Text>
                <Text style={styles.cat_text_1}>3</Text>
                <Text style={styles.cat_text_1}>4</Text>
                <Text style={styles.cat_text_1}>5</Text>
              </View>

              <View style={styles.subValue}>
                <Text style={styles.cat_text_1}>1</Text>
                <Text style={styles.cat_text_1}>2</Text>
                <Text style={styles.cat_text_1}>3</Text>
                <Text style={styles.cat_text_1}>4</Text>
                <Text style={styles.cat_text_1}>5</Text>
              </View>
              <View style={styles.subValue}>
                <Text style={styles.cat_text_1}>1</Text>
                <Text style={styles.cat_text_1}>2</Text>
                <Text style={styles.cat_text_1}>3</Text>
                <Text style={styles.cat_text_1}>4</Text>
                <Text style={styles.cat_text_1}>5</Text>
              </View>
            </View>
          </View>
          <View style={styles.subContainer}>
            <View>
              <Text style={styles.heading}>4th</Text>
              <Text style={styles.heading}>5th</Text>
              <Text style={styles.heading}>6th</Text>
            </View>
            <View style={styles.MainValue}>
              <View style={styles.subValue}>
                <Text style={styles.cat_text_1}>.</Text>
                <Text style={styles.cat_text_1}>2</Text>
                <Text style={styles.cat_text_1}>3</Text>
                <Text style={styles.cat_text_1}>4</Text>
                <Text style={styles.cat_text_1}>5</Text>
              </View>

              <View style={styles.subValue}>
                <Text style={styles.cat_text_1}>
                  .<div className=""></div>
                </Text>
                <Text style={styles.cat_text_1}>.</Text>
                <Text style={styles.cat_text_1}>3</Text>
                <Text style={styles.cat_text_1}>4</Text>
                <Text style={styles.cat_text_1}>5</Text>
              </View>
              <View style={styles.subValue}>
                <Text style={styles.cat_text_1}>.</Text>
                <Text style={styles.cat_text_1}>.</Text>
                <Text style={styles.cat_text_1}>.</Text>
                <Text style={styles.cat_text_1}>4</Text>
                <Text style={styles.cat_text_1}>4</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.container_2}>
          <Text style={styles.text}>Lotomatic 6D</Text>
          <Text style={styles.subText}>20-12-2023 (sun)</Text>
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
              <View style={styles.subValue}>
                <Text style={styles.cat_text_1}>1</Text>
                <Text style={styles.cat_text_1}>2</Text>
                <Text style={styles.cat_text_1}>3</Text>
                <Text style={styles.cat_text_1}>4</Text>
                <Text style={styles.cat_text_1}>5</Text>
                <Text style={styles.cat_text_1}>6</Text>
              </View>
              <View style={styles.mainValue}>
                <View style={styles.subValue}>
                  <Text style={styles.cat_text_1}>1</Text>
                  <Text style={styles.cat_text_1}>2</Text>
                  <Text style={styles.cat_text_1}>3</Text>
                  <Text style={styles.cat_text_1}>4</Text>
                  <Text style={styles.cat_text_1}>5</Text>
                  <Text style={styles.cat_text_1}>.</Text>
                </View>
                <View style={styles.or}>
                  <Text>or</Text>
                </View>
                <View style={styles.subValue}>
                  <Text style={styles.cat_text_1}>.</Text>
                  <Text style={styles.cat_text_1}>2</Text>
                  <Text style={styles.cat_text_1}>3</Text>
                  <Text style={styles.cat_text_1}>4</Text>
                  <Text style={styles.cat_text_1}>5</Text>
                  <Text style={styles.cat_text_1}>6</Text>
                </View>
              </View>
              <View style={styles.mainValue}>
                <View style={styles.subValue}>
                  <Text style={styles.cat_text_1}>1</Text>
                  <Text style={styles.cat_text_1}>2</Text>
                  <Text style={styles.cat_text_1}>3</Text>
                  <Text style={styles.cat_text_1}>4</Text>
                  <Text style={styles.cat_text_1}>.</Text>
                  <Text style={styles.cat_text_1}>.</Text>
                </View>
                <View style={styles.or}>
                  <Text>or</Text>
                </View>
                <View style={styles.subValue}>
                  <Text style={styles.cat_text_1}>.</Text>
                  <Text style={styles.cat_text_1}>.</Text>
                  <Text style={styles.cat_text_1}>3</Text>
                  <Text style={styles.cat_text_1}>4</Text>
                  <Text style={styles.cat_text_1}>5</Text>
                  <Text style={styles.cat_text_1}>6</Text>
                </View>
              </View>
              <View style={styles.mainValue}>
                <View style={styles.subValue}>
                  <Text style={styles.cat_text_1}>1</Text>
                  <Text style={styles.cat_text_1}>2</Text>
                  <Text style={styles.cat_text_1}>3</Text>
                  <Text style={styles.cat_text_1}>.</Text>
                  <Text style={styles.cat_text_1}>.</Text>
                  <Text style={styles.cat_text_1}>.</Text>
                </View>
                <View style={styles.or}>
                  <Text>or</Text>
                </View>
                <View style={styles.subValue}>
                  <Text style={styles.cat_text_1}>.</Text>
                  <Text style={styles.cat_text_1}>.</Text>
                  <Text style={styles.cat_text_1}>.</Text>
                  <Text style={styles.cat_text_1}>4</Text>
                  <Text style={styles.cat_text_1}>5</Text>
                  <Text style={styles.cat_text_1}>6</Text>
                </View>
              </View>
              <View style={styles.mainValue}>
                <View style={styles.subValue}>
                  <Text style={styles.cat_text_1}>1</Text>
                  <Text style={styles.cat_text_1}>2</Text>
                  <Text style={styles.cat_text_1}>.</Text>
                  <Text style={styles.cat_text_1}>.</Text>
                  <Text style={styles.cat_text_1}>.</Text>
                  <Text style={styles.cat_text_1}>.</Text>
                </View>
                <View style={styles.or}>
                  <Text>or</Text>
                </View>
                <View style={styles.subValue}>
                  <Text style={styles.cat_text_1}>.</Text>
                  <Text style={styles.cat_text_1}>.</Text>
                  <Text style={styles.cat_text_1}>.</Text>
                  <Text style={styles.cat_text_1}>.</Text>
                  <Text style={styles.cat_text_1}>5</Text>
                  <Text style={styles.cat_text_1}>6</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
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
    color: "red",
    fontSize: 20,
    marginVertical: 15,
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

export default Loto6D;
