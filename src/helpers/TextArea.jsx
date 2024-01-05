import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

function TextArea() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Type something..."
        />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      width: 300,
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      paddingHorizontal: 10,
    },
  });