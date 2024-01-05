import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from "../api/SiteColors";

const SmartButton = ({ mode, label, leftIcon, rightIcon,iconColor, onPress, type = "PRIMARY", style,
fullWidth,isDisabled=false,styleText,
    ...rest
}) => {

    const styleProps = [styles.container];
    if(type){
        styleProps.push(styles[type])
    }
    if(fullWidth){
        styleProps.push(styles.FULLWIDTH)
    } 
    if(style){
        styleProps.push(style)
    }
    if(isDisabled){
        styleProps.push({backgroundColor:"#f2f2f2",borderColor:"#ddd"})
    }

    const textStyles =[];
    if(type){
        textStyles.push(styles[type+"_TEXT"])
    } 
    if(styleText){
        textStyles.push(styleText)
    }
    if(isDisabled){
        textStyles.push({color:"#ddd"})
    }
    const getLeftIcon=()=>{
        return <Icon name={leftIcon} size={18} color={iconColor} />
    }
    const getRightIcon=()=>{
        return <Icon name={rightIcon} size={18} color={iconColor} />
    }

    return (
        <>
            <TouchableOpacity
                style={styleProps}
                onPress={onPress}
                disabled={isDisabled}
                {...rest}
            >
            {leftIcon && getLeftIcon()}
                <Text 
                  style={textStyles}
                >{label}</Text>
            {rightIcon && getRightIcon()}
            </TouchableOpacity>
        </>
    )

}


const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        padding:10,
        borderRadius:5,
        marginTop:3,
        marginBottom:5,
        justifyContent:"center"
    },
    textStyles:{
        fontWeight:"700"
    },
    PRIMARY:{
        backgroundColor: COLORS.PRIMARY,      
    },
    PRIMARY_TEXT:{
        color: COLORS.WHITE,      
    },
    SECONDARY:{
        backgroundColor: COLORS.WHITE,
        borderWidth:1,
        borderColor:COLORS.PRIMARY      
    },
    SECONDARY_TEXT:{
        color: COLORS.PRIMARY,
    },
    FULLWIDTH:{
        width:"100%",
        justifyContent:"center"
    }     
  });
  

export default SmartButton;