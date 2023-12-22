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
          <TouchableOpacity onPress={() => setMenuVisible(true)}>
            <Icon name="calendar" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => shareScreen()}>
            <Icon name="share" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const shareScreen = () => {};

  const calenderDays = () => {
    let days = ["21/12/2023", "22/12/2023", "23/12/2023", "24/12/2023"];
    return days;
  };

  const setCalenderDate=(dateSelection)=>{
    console.log("date selected " , dateSelection);
    setDate(dateSelection);
  }
  const calenderModal = () => {
    return calenderDays().map((item,key) => {
      return (
           <TouchableOpacity key={key} onPress={() => setCalenderDate(item)}> <Text>{item}</Text> </TouchableOpacity>        
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
          <View>{calenderModal()}</View>
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
    width: "30%",
    marginLeft: "70%",
    marginTop: "2%",
    top: 0,
  },
});

export default HeaderScreen;
