import React, { useState,useEffect } from 'react';
import { View, Button, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import SmartButton from '../SmartButton';
import moment from 'moment';

const SmartDatePicker = ({placeHolder,onChange,mode="date",style,initValue}) => {
  const [label, setLabel] = useState(placeHolder);
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios'); // Hide the date picker on iOS immediately after selection
    let formatted_date = moment(currentDate).format('YYYY-MM-DD');
    if(mode=="time"){
      formatted_date = moment(currentDate).format('HH:mm');
    }
    setDate(currentDate );
    onChange(formatted_date );
    setLabel(formatted_date );
  };

 const setInitDate=()=>{
  if(initValue?.length > 2){
    const dateObject = new Date(initValue);
    onDateChange(null,dateObject);
  }
 }

  useEffect(() => {
    setInitDate(initValue);
 }, [initValue]);


  return (
    <View style={style}>
     <SmartButton onPress={showDatepicker} label={label} type="SECONDARY" 
     style={{borderWidth:1,borderColor:"#ddd",width:"100%",height:40}} fullWidth={true} />
      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onDateChange}
        />
      )}
    </View>
  );
};

export default SmartDatePicker;