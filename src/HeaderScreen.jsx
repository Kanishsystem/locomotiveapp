import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Modal, Portal } from "react-native-paper";

const HeaderScreen = ({ navigation,setDate }) => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const topMenu = () => {
    return (
      <View style={styles.TopView}>
        <Text style={styles.TopHeading}>Lotomatic</Text>
        <View style={styles.iconBox}>
          <TouchableOpacity onPress={() => setMenuVisible(true)} style={{marginRight:10}}>
            <Icon name="calendar" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => shareScreen()}>
            <Icon name="share" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const getLast7Days=()=> {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const today = new Date();
    const last7Days = [];
  
    for (let i = 6; i >= 0; i--) {
      const currentDate = new Date(today);
      currentDate.setDate(today.getDate() - i);
  
      const day = currentDate.getDate().toString().padStart(2, '0');
      const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
      const year = currentDate.getFullYear();
  
      const formattedDate = `${day}-${month}-${year}`;
      const dayName = days[currentDate.getDay()];
  
      last7Days.push({ date: formattedDate, dayName: dayName });
    }  
    return last7Days.reverse();
  }

  const shareScreen = () => {};

  const calenderDays = () => {
    let last_7_days = getLast7Days();
   // console.log("last 7 days " , last_7_days);
    let days = [
      "21/12/2023",
     "22/12/2023", 
     "23/12/2023", 
     "24/12/2023"
    ];
    return last_7_days ;
  };

  const setCalenderDate=(dateSelection)=>{
    //console.log("date selected " , dateSelection);
    setDate(dateSelection);
    setMenuVisible(false)
  }
  const calenderModal = () => {
    return calenderDays().map((item,key) => {
      return (
           <TouchableOpacity
            key={key} onPress={() => setCalenderDate(item.date)}
            style={styles.calanderDate}
            >
             <Text>{item.date} ({item.dayName})</Text> </TouchableOpacity>        
      );
    });
  };

  const showMenu = () => {
    return (
      <Portal>
        <Modal
          visible={isMenuVisible}
          onDismiss={() => setMenuVisible(false)}
          contentContainerStyle={styles.menuContainerStyle}
          style={{ justifyContent: "flex-start", padding: 2 }}
        >
          <View>
          <Text style={{fontWeight:"bold"}}>Select Past Result:</Text>
          {calenderModal()}
          </View>
        </Modal>
      </Portal>
    );
  };

  return (
    <View style={styles.mainContainer}>
      {topMenu()}
      {showMenu()}
    </View>
  );
};

const styles = StyleSheet.create({
  TopView: {
    backgroundColor: "#5c0819",
    height: 45,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  TopHeading: {
    fontSize: 20,
    color: "white",
    fontWeight: "700",
    marginLeft: 10,
  },
  menuContainerStyle: {
    backgroundColor: "white",
    padding: 5,
    width: "80%",
    marginLeft: "10%",
    marginTop: "2%",
    top: 0,
    padding:15
  },
  "calanderDate":{
    padding:10
  }
});

export default HeaderScreen;
