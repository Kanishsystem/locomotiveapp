import React,{ useState,useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Dropdown } from 'react-native-element-dropdown';
import { COLORS } from '../api/SiteColors';
const ConfigurableSelectBox = ({selectOptions,placeholder,OnChange,valueInit,noBackground=false,style,leftIcon}) => {
  const [value, setValue] = useState( valueInit);
  const [isFocus, setIsFocus] = useState(false);

    const handleSelectChange=(itemValue)=>{
        setSelectedValue(itemValue);
        OnChange(itemValue);
    }

    useEffect(() => {
      setValue(valueInit);
   }, [valueInit]);
  
    const renderLabel = () => {
      if (value || isFocus) {
        return (
          <Text style={[styles.label, isFocus && { color: 'blue' }]}>
            {placeholder}
          </Text>
        );
      }
      return null;
    };

    const containerStyles = [styles.container];
    if(!noBackground){
      containerStyles.push( styles.containerWhite);
    }
    if(style){
      containerStyles.push(style);
    }
    if(leftIcon){
      containerStyles.push({paddingLeft:25,position:"relative"})
    }

    const getIcon = (icon) => {      
         return <View style={{position:"absolute",left:5,top:15}}><Icon name={icon} size={20} color="black" /></View>
    };
   

    return (
      <View style={containerStyles}>
        {renderLabel()}
        {leftIcon && getIcon(leftIcon)}
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={selectOptions}         
          maxHeight={300}
          labelField="label"
          valueField="value"
          searchPlaceholder="Search..."
          placeholder={placeholder}
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            OnChange(item.value);
            setIsFocus(false);
          }}        
        />
      </View>
    );

};
const styles = StyleSheet.create({
  container: {
   // backgroundColor: 'white',   
    width:"100%",
    marginBottom:4,
    flexDirection:"row",
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 4,
  },
  containerWhite:{
    backgroundColor: 'white', 
  },
  dropdown: {
    height: 50,
   // borderColor: 'gray',
    //borderWidth: 0.5,
   // borderRadius: 4,
    paddingHorizontal: 8,
    width:"98%"
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top:-10,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 12,
  },
  placeholderStyle: {
    fontSize: 14,
    color:COLORS.PRIMARY
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default ConfigurableSelectBox;

// <Picker.Item key={index} label={item.label} value={item.value} />