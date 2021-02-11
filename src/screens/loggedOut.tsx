import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {CustomerButton} from '../components/customerButton';
import images from '../assets'

export const LoggedOut = () => {
  return (
    <View style={{flex:1}}>
      <ImageBackground source={images.BACKGROUND} style={{flex:1}}>
      <Image source={images.LOGO}/>
      <View style={styles.container}>
        <Image source={images.LOGGEDPHOTO}/>
        <View style={styles.description}>
          <Text style={styles.title}>Pawel Czerwinski</Text>
          <Text style={styles.subTitle}>@pawel_czerwinski</Text>
        </View>
      </View>
      </ImageBackground>
      <CustomerButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 375,
    height: '90%',
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
    // fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 13,
    lineHeight: 15,
  },
  subTitle: {
    // fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 11,
    lineHeight: 13,
  },
});
