import React,{ useState } from 'react';
import { View, TextInput, Image,StyleSheet, Text  } from 'react-native';

const IconTextInput = ({ leftIcon, rightIcon, placeholder,OnChange,maxCount, ...rest }) => {
  const [text, setText] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  }

  const handleBlur = () => {
    if (text === '') {
      setIsFocused(false);
    }
  }


  const handleChangeText = (value) => {
    setText(value);
    OnChange(value);
  };

  return (
    <View style={styles.container}>      
    <View style={styles.inputContainer}>
       <Text style={[styles.label, { top: isFocused || text !== '' ? -8 : 6 }]}>{placeholder}</Text>    
      {leftIcon && <Image source={leftIcon} style={styles.icon} />}
      <TextInput
        style={styles.input}       
        onChangeText={handleChangeText}
        value={text}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...rest}
      />
      {rightIcon && <Image source={rightIcon} style={styles.icon} />}    
    </View> 
    <View style={styles.bottomContainer}>
    <Text style={styles.required}> Required </Text>
    <Text style={styles.characterCount}>{text.length} / {maxCount}</Text>
    </View>   
    
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    position:'relative',
    marginVertical:5    
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,   
    marginVertical:5,
    width:"100%" 
  },
  label: {
    position: 'absolute',
    left: 38,
    fontSize: 12,
    color: '#555',   
    backgroundColor:"white",
    top:6
  },
  label_top:{
    left:12,
    top:-8
  },
  icon: {
    marginLeft: 10,
    width: 20,
    height: 20,
  },
  input: {
    flex: 1,
    padding: 10,
  },
  characterCount: {
   
    flex: 1, // Takes up as much space as possible
    textAlign: 'right',
  },
  required: {
   
    color:'red',
    flex: 1, // Takes up as much space as possible
    textAlign: 'left',
  },
  bottomContainer: {
    width:'100%',    
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default IconTextInput;  