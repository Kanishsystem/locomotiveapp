import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const CustomHeader = ({ title, onPress }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, 
    height: 60, backgroundColor: '#008000' }}>
      <TouchableOpacity onPress={onPress}>
        <Text style={{ color: '#fff', fontSize: 18 }}>Back</Text>
      </TouchableOpacity>
      <Text style={{ color: '#fff', fontSize: 20 }}>{title}</Text>
      <View style={{ width: 50 }}></View>
    </View>
  );
}

export default CustomHeader;