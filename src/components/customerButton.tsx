import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const CustomerButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.button}>
        <Text style={styles.text}>Register</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  button: {
    width: 343,
    height: 52,
    backgroundColor: '#000000',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  text: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '900',
    textTransform: 'uppercase',
    fontSize: 13,
    lineHeight: 15,
    color: '#FFFFFF',
  },
});
