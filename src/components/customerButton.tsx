import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type TPops = {
  navigateUrl?: string,
  navigation?: object | any
}
//TODO index files
export const CustomerButton = ({navigateUrl, navigation}: TPops ) => {
// return navigation.navigate('Register')

const pressHandler = () => {
  return navigation.navigate(navigateUrl)
}

  return (
    <TouchableOpacity style={styles.container} onPress={pressHandler}>
      <View style={styles.button}>
        <Text style={styles.text}>Register</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 16
  },
  button: {
    width: 343,
    height: 52,
    backgroundColor: '#000000',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    // fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '900',
    textTransform: 'uppercase',
    fontSize: 13,
    lineHeight: 15,
    color: '#FFFFFF',
  },
});
