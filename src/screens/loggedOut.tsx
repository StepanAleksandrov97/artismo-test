import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {CustomerButton} from '../components/customerButton';

export const LoggedOut = () => {
  return (
    <View>
      {/* <ImageBackground source={require('../../assets/bacground.png')}> */}
      <View style={styles.container}>
        <View></View>
        <View style={styles.description}>
          <Text style={styles.title}>Pawel Czerwinski</Text>
          <Text style={styles.subTitle}>@pawel_czerwinski</Text>
        </View>
      </View>

      {/* </ImageBackground> */}
      <CustomerButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 375,
    height: 707,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  description: {
    flexDirection: 'column',
    marginBottom: 20,
    marginLeft: 16,
  },
  title: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 13,
    lineHeight: 15,
  },
  subTitle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 11,
    lineHeight: 13,
  },
});
