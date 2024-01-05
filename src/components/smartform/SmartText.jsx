import React, { useState,useEffect } from "react";
import { View,StyleSheet,Text } from "react-native";
import { TextInput,HelperText } from "react-native-paper";
import Icon from 'react-native-vector-icons/FontAwesome';
// mode = 'flat' | 'outlined'
const SmartText = ({
  mode,
  name,
  label,
  leftIcon,
  rightIcon,
  onChange,
  maxCount,
  enableCheck,
  style,
  validations,
  password,
  value="",
  ...rest
}) => {
  /**
   *  state variables
   *
   */
  const [text, setText] = useState(value);
  const [eye, setEye] = useState("eye");

  useEffect(() => {
     setText(value);
  }, [value]);

  //console.log("name = ",name , " value = ", value);

  const getIcon = (icon) => {
   // console.log("left icon ", icon);
    if (icon instanceof Function) {
     // console.log(" icon instance string");
      return <TextInput.Icon icon={icon} />;
    } else {
      return   <TextInput.Icon
      icon={() => <Icon name={icon} size={18} color="black" />}
    />
    }
  };

  const getCheckIcon=()=>{
   return <TextInput.Icon
      icon={() => <Icon name={"check-circle"} size={18} color="black" />}
    />
  }

  const handleRightIconPress = () => {
     if(eye=="eye"){
      setEye("eye-slash")
     }else{
      setEye("eye")
     }
  };

  const getEyeIcon=()=>{
    return <TextInput.Icon
      icon={() => <Icon name={eye} size={18} color="black" onPress={handleRightIconPress} />}
    />
  }

  
  /**
   *
   */
  const textProps = {
    mode: mode,
    label: label,
  };

  // get the left icon
  if (leftIcon) {
    textProps["left"] = getIcon(leftIcon);
  }
  // get the right icon
  if (rightIcon) {
    textProps["right"] = getIcon(rightIcon);
  }

  // check validations
  const getValid=()=>{
    if(text.length > 0){
      return true;
    }
    return false;
  }

  // display check box when valid true 
  if(enableCheck){
    textProps["right"] = getValid() ? getCheckIcon() : null;
  }
  
  if(password){
    textProps["secureTextEntry"] = eye=="eye" ? true : false;
    textProps["right"] = getEyeIcon();
  }
  
  textProps["style"] = {
    width:"100%"
  }
  if(style){
    textProps["style"] = style;
  }
  /**
   *
   * @param {*} icon
   * @returns
   */

  /**
   *
   * @param {*} inputValue
   */
  const handleTextChange = (inputValue) => {
    if (onChange) {
      if (name) {
        onChange(name, inputValue);
      } else {
        onChange(inputValue);
      }
    }
  };
   //console.log("test props ", textProps)
  const bottom_container = () => {
    return ( maxCount && 
      <View style={styles.bottomContainer}>
       {getValid()==false && <Text style={styles.required}>Required</Text>}
        <Text style={styles.characterCount}>
          {text.length} / {maxCount}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        onChangeText={(text) => {
          setText(text);
          handleTextChange(text);
        }}
        {...textProps}
        {...rest}
      />     
      {bottom_container()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    position: "relative",
    marginVertical: 5,
    backgroundColor:"white",
    width:"100%"
  },
  characterCount: {
    flex: 1, // Takes up as much space as possible
    textAlign: "right",
  },
  required: {
    color: "red",
    flex: 1, // Takes up as much space as possible
    textAlign: "left",
  },
  bottomContainer: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
});

export default SmartText;
