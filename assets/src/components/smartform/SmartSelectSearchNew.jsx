import React, { useState,useEffect } from "react";
import { View,StyleSheet,Text,TouchableOpacity,ScrollView } from "react-native";
import { TextInput,HelperText } from "react-native-paper";
import Icon from 'react-native-vector-icons/FontAwesome';
import { apiGetData } from "../../api/ApiManager";
import { COLORS } from "../../api/SiteColors";

// mode = 'flat' | 'outlined'
const SmartSelectSearchNew = ({
  mode,
  name,
  label,
  url="",
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
  const [items,setItems] =  useState([]);

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
    mode: "outlined",
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
    width:"100%",
   
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
  const handleChange = (inputValue) => {
    if (onChange) {
      if (name) {
        onChange(name, inputValue);
      } else {
        onChange(inputValue);
      }
    }
  }; 

  const onPress=(id)=>{
    handleChange(id);
    setText(id);
    setItems([])
  }

  const handleTextChange=(inputText)=>{
    if(inputText.length >= 3){
        let url_search = url + inputText;
        console.log("search url" +  url_search );
        apiGetData(url_search,(response)=>{
         updateOptions(response)
         // console.log("search response" + response);
        })
       }
  }

  const updateOptions=(_data)=>{
    let options = [];
    if (_data && _data.data) {
      for (let i = 0; i < _data.data.length; i++) {
        options.push({
          id: _data.data[i].deviceUin,
          name: _data.data[i].deviceUin,
        });
      }
      setItems(options)
    }
  }

  return (
    <View style={styles.container}>
      <TextInput       
        value={text}
        onChangeText={(text) => {
          setText(text); 
          handleTextChange(text)       
        }}
        {...textProps}
        {...rest}
        activeOutlineColor={COLORS.PRIMARY}
      /> 
      {items.length > 0 &&
      <View style={styles.optionsContainer}>   
      
        {items.map((item, index) => (
        <TouchableOpacity key={index} onPress={()=>onPress(item.id)}>
             <Text style={styles.text}>{item.name}</Text>
           </TouchableOpacity>          
        ))}  
       
      </View>
      }
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative', // Ensure relative positioning for zIndex to work
        padding: 5,
       // flexDirection: 'row',
        alignItems: 'center',
       // borderWidth: 1.5,
        //borderColor: 'black',
        //backgroundColor: '#fff',
        //borderRadius: 5,
        zIndex: 2, // Container's zIndex
      },
      optionsContainer: {
        position: 'absolute', // Position the options absolutely
        zIndex: 3, // Options view's zIndex (higher than container's zIndex)
        backgroundColor: '#fff',
        width: '100%',
        top: 60,
        borderWidth: 1,
        borderColor: '#ddd',
        padding:2,
        maxHeight:220,
        overflow:"scroll"
      },
      text:{
        padding:10
      }
});

export default SmartSelectSearchNew;
