import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type TPops = {
  navigateUrl?: string,
  navigation?: object | any
  buttonText: string
}
//TODO index files
export const CustomerButton = ({navigateUrl, navigation, buttonText} : TPops ) => {

const pressHandler = () => {
  return navigation.navigate(navigateUrl)
}

  return (
    <TouchableOpacity style={styles.container} onPress={pressHandler}>
      <View style={styles.button}>
        <Text style={styles.text}>{buttonText}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 16
  },
  button: {
    width: '100%',
    height: 52,
    backgroundColor: '#000000',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Roboto-Regular',
    fontStyle: 'normal',
    fontWeight: '900',
    textTransform: 'uppercase',
    fontSize: 13,
    lineHeight: 15,
    color: '#FFFFFF',
  },
});
