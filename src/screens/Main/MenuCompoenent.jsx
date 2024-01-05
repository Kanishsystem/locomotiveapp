import React, { useState } from "react";
import { View, StyleSheet,TouchableOpacity,Image,Share,Text} from "react-native";
import {
  Appbar,  
  List,
  Modal,
  Portal  
} from "react-native-paper";
import { COLORS } from "../../api/SiteColors";
import Icon from "react-native-vector-icons/FontAwesome";
import { useLoading } from "./LoadingContext";
import {IMAGES} from "./../../api/ImageSrc";

const MenuComponent = ({ navigation,refreshData }) => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const { setDate,msg } = useLoading();

  const handleShareNew = async () => {
    try {
      let url = "https://thebooksparadise.com/";
      // let msg = 'Lotomatic ( \n next line message'
      let msg_share = msg;
      msg_share += "\n";
      msg_share += "\n";
      msg_share +="*Live 3D Results "+ url ;
      //console.log("msg = ", msg);
      const result = await Share.share({
        message: msg_share,
      });
      if (result.action === Share.sharedAction) {
        console.log("text shared");
      }
    } catch (error) {
      console.error("Error while sharing:", error.message);
    }
  };

  const navigateLink = (navIndex) => {
   // setMenuVisible(false);
    navigation.navigate(navIndex);
  };




  const setMenuDate=(singleDate)=>{
    setDate(singleDate);
  }

 

  const showSingleItem=(item,index)=>{ 
    let title =  item.date +' ( ' + item.dayName + ')';
      return (
        <List.Item
        title={title}
        key={index}      
        onPress={() => setMenuDate(item.date)}
      />
      )
     
  }

  const getLast7Days = () => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const today = new Date();
    const last7Days = [];

    for (let i = 6; i >= 0; i--) {
      const currentDate = new Date(today);
      currentDate.setDate(today.getDate() - i);

      const day = currentDate.getDate().toString().padStart(2, "0");
      const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
      const year = currentDate.getFullYear();

      const formattedDate = `${day}-${month}-${year}`;
      const dayName = days[currentDate.getDay()];

      last7Days.push({ date: formattedDate, dayName: dayName });
    }
    return last7Days.reverse();
  };

  const menuItemsDisplay=()=>{
    return (
      <View style={{padding:0}} >
      {getLast7Days().map((item, index) => (
        showSingleItem(item,index)
      ))}     
    </View>
    )
  }

 

  const showMenu = () => {
    return (
      <Portal>
      <Modal
        visible={isMenuVisible}
        onDismiss={()=>setMenuVisible(false)}
        contentContainerStyle={styles.menuContainerStyle}
        style={{justifyContent:"flex-start",padding:2}}
      >
        {menuItemsDisplay()}
      </Modal>
      </Portal>
    );
  };

  const showMenuIconTitle=()=>{
    return (
      <View style={{flexDirection:"row"}}>
        <Image source={IMAGES.MAINBG} style={styles.logoimage} />
        <Text style={{color:"white",marginLeft:4,fontSize:20}}>Lotomatic</Text> 
      </View>
    )
  }

  return (
    <>
      <View style={styles.container}>
        <Appbar.Header style={styles.appbar}>
          <Appbar.Content
            color="white"
            style={{ color: "white" }}
            icon={() => <Icon name={"calendar"} size={18} color="white" />}
            title={showMenuIconTitle()}
          />
            
            <Appbar.Action
              color="white"
              key="menu1"
              icon={() => <Icon name={"calendar"} size={18} color="white" />}
              onPress={() => setMenuVisible(!isMenuVisible)}
            />
             <Appbar.Action
              color="white"
              key="menu2"
              icon={() => <Icon name={"share"} size={18} color="white" />}
              onPress={() => handleShareNew()}
            />
            <Appbar.Action
              color="white"
              key="menu3"
              icon={() => <Icon name={"refresh"} size={18} color="white" />}
              onPress={() => refreshData()}
            />
        
        </Appbar.Header>
      </View>
      <View style={styles.TopView}>
        <TouchableOpacity onPress={() =>navigateLink("HomeNew")} style={[styles.iconcont]}>
          <Image source={IMAGES.MAIN} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateLink("Locomotivethree")} style={[styles.iconcont]} >
          <Image source={IMAGES.MAIN} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateLink("Locomotivesix")} style={[styles.iconcont]} >
          <Image source={IMAGES.MAIN} style={styles.image} />
        </TouchableOpacity>
    </View>
      {showMenu()}     
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
  TopView: {
    display: "flex",
    flexDirection: "row",
    //justifyContent: "space-between",
  },
  logoimage: {
    width:30,
    height:30,
    resizeMode: 'contain'
  }, 
  image: {
    width:50,
    height:50,
    resizeMode: 'contain'
  }, 
  active:{
    borderWidth:1,
    borderColor:"#ddd"  
  },
  iconcont:{
    padding:5
  },
  menu_container: {
    position: "absolute",
    minHeight: 150,
    backgroundColor: "white",
    right: 0,
    top: 0,   
    borderRadius: 5,    
  },
  appbar: {
    backgroundColor: COLORS.PRIMARY,
    color: "white",
  },
  containerStyle: {
    backgroundColor: "white",
    padding: 20,
    width: "80%",
    marginLeft: "10%",
  },
  menuContainerStyle: {
    backgroundColor: "white",
    padding: 5,
    width: "60%",
    marginLeft: "40%",
    marginTop:"2%",    
    top:0
  },
});

export default MenuComponent;
/*
<Menu
visible={isMenuVisible}
onDismiss={closeMenu}       
  anchor={<Appbar.Action color="white" icon="dots-vertical" onPress={openMenu} />}
  position="right"
// style={{position:"absolute",right:0,width:"30%",height:200,backgroundColor:"white"}}     
>
<Menu.Item onPress={() => {}} title="Item 1" />
<Menu.Item onPress={() => {}} title="Item 2" />
<Menu.Item onPress={() => {}} title="Item 3" />
</Menu>
{logOutConformation()}

*/
