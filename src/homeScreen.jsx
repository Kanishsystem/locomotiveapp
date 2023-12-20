import React from 'react';
import { View, Text, Button,StyleSheet,Image, } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (

    <>
    <View  style={styles.mainContainer}>
    <View style={styles.TopView}>
      {/* <View  style={styles.ImageBox}>
      <Image
        source={require('../assets/logo.png')} // Replace with the actual path to your image
        style={styles.image}
      />
      </View> */}
   
      <Text style={styles.TopHeading} >Results</Text>
    </View>
    {/* <View key="sub-cont-1">
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')} />

      </View> */}

      <View  style={styles.container_1}>
        <Text>test</Text>

      </View>
        {/* <View key="sub-cont-1">
        <Text>Home Screen</Text>
       <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')} /> 

      </View>  */}
      <View  style={styles.container_2}>
        <Text style={styles.text}>Lotomatic 4D</Text>
        <Text style={styles.subText}>20-12-2023 (sun)</Text>
      </View>

      <View  style={styles.container_3}>
        <View style={styles.subContainer} >
        <Text style={styles.cat_text}>1st</Text>
        <Text style={styles.cat_text}>2nd</Text>
        <Text style={styles.cat_text}>3rd</Text>
        </View>
        <View style={styles.subContainer}>
        <Text style={styles.cat_text_1}>9774</Text>
        <Text style={styles.cat_text_1}>5691</Text>
        <Text style={styles.cat_text_1}>7746</Text>
        </View>
       
      </View>
    
      <View  style={styles.container_4}>
      

        <View style={styles.subView}>
          <View style={styles.subTitle}><Text style={styles.subHeading} >Special</Text></View>
          <View style={styles.subViewBox}>
            <Text style={styles.subViewData} >5658</Text>
            <Text style={styles.subViewData}>4613</Text>
            </View>

            <View style={styles.subViewBox}>
            <Text style={styles.subViewData} >5658</Text>
            <Text style={styles.subViewData}>4613</Text>
            </View>
            <View style={styles.subViewBox}>
            <Text style={styles.subViewData} >5658</Text>
            <Text style={styles.subViewData}>4613</Text>
            </View>
            <View style={styles.subViewBox}>
            <Text style={styles.subViewData} >5658</Text>
            <Text style={styles.subViewData}>4613</Text>
            </View>
            <View style={styles.subViewBox}>
            <Text style={styles.subViewData} >5658</Text>
            <Text style={styles.subViewData}>4613</Text>
            </View>
            
          

        </View>
        <View style={styles.subView}>
        <View style={styles.subTitle}><Text style={styles.subHeading}>Consolation</Text></View>
        <View style={styles.subViewBox}>
            <Text style={styles.subViewData} >5658</Text>
            <Text style={styles.subViewData}>4613</Text>
            </View>
            <View style={styles.subViewBox}>
            <Text style={styles.subViewData} >5658</Text>
            <Text style={styles.subViewData}>4613</Text>
            </View>
            <View style={styles.subViewBox}>
            <Text style={styles.subViewData} >5658</Text>
            <Text style={styles.subViewData}>4613</Text>
            </View>
            <View style={styles.subViewBox}>
            <Text style={styles.subViewData} >5658</Text>
            <Text style={styles.subViewData}>4613</Text>
            </View>
            <View style={styles.subViewBox}>
            <Text style={styles.subViewData} >5658</Text>
            <Text style={styles.subViewData}>4613</Text>
            </View>

        </View>



        </View>
        
      
        <View  style={styles.container_2}>
        <Text style={styles.text}>Lotomatic Gold</Text>
        <Text style={styles.subText}>20-12-2023 (sun)</Text>
      </View>
      <View  style={styles.container_6}>
        <View style={styles.subContainer} >
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
        <View style={styles.subContainer} >
        <Text style={styles.cat_text}>Bonus</Text>
        <Text style={styles.cat_text}>Bonus</Text>
        <Text style={styles.cat_text}>Bonus</Text>
        </View>
       
      </View>

      </View>
      
      </>

  );
};

const styles = StyleSheet.create({
  mainContainer:{
    marginHorizontal:3
  },
  TopView:{
    backgroundColor:"#874f60",
    height:45,
    display:"flex"
    
  },
  ImageBox:{
    borderRadius:"50%",
    width:50,
    height:50,
    position:"relative",
    overflow:"hidden"
  },
  image:{
    width:50,
    height:50,
  },
  TopHeading:{
    fontSize:20,
    color:'white',
    fontWeight:'700',
    marginLeft:10,
  },
 container_1:{
  backgroundColor:"#73716b",
  height:45,
 },
  container_2:{
    height:50,
    backgroundColor:"#f7e2a8",
    display:"flex",
     flexDirection:"column",
     position:"relative",
      right:0,
    justifyContent:"flex-end",
    borderBottomWidth:1,
    borderColor:"black"
    

  },
  text:{
    position:"absolute",
    right:0,
    top:3,
    fontSize:20,
    fontWeight:"bold"

  },
  subText:{
    position:"absolute",
    right:0,
    color:"blue",
    fontWeight:'bold'

  },
  container_3:{
    display:"flex",
    justifyContent:"space-around",
    height:80,
   
  },
  container_6:{
    display:"flex",
    justifyContent:"space-around",
    height:150,

  },
  subContainer:{
    display:"flex",
    flexDirection:"row",
    justifyContent:'space-around'
  },
  subContainer_1:{
    display:"flex",
    flexDirection:"row",
    justifyContent:'space-around'
  },
  cat_text:{
    color:"red",
    fontSize:20,
  },
  cat_text_1:{
    fontWeight:"600",
    fontSize:30,
    color:"black"
  },
  cat_text_2:{
    fontWeight:"600",
    fontSize:25,
    color:"black"
  },
  subTitle:{
    backgroundColor:"#e6e4e1",
    textAlign:"center",
    display:"flex",
    justifyContent:"center",
    flexDirection:"row"
   
  },
  subView:{
    width:"50%",
    borderLeftWidth:1,
    borderColor:"#ddd"
  },
  container_4:{
    display:"flex",
    flexDirection:"row",
    height:170
  },
  subHeading:{
    fontWeight:"bold"


  },
  subViewBox:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-around"
  },
  subViewData:{
    fontSize:20,
  }
  
});

export default HomeScreen;

