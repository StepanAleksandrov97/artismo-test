import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {CustomerButton} from '../components/customerButton';
import images from '../assets'


// const onPressButton = ({navigation}: any) => {
//   // return navigation.navigate('Register')
//   console.log(1011111111111);
  
// }
const naviLink = "Register"

export const StartScreen = ({navigation}: any) => {
  return (
    <View style={{flex:1}}>
      <ImageBackground source={images.BACKGROUND} style={{flex:1}}>
        <View style={styles.container}>
          <View style={styles.logo}>
            <Image source={images.LOGO}/>
          </View>
          <View style={styles.descriptionContainer}>
            <Image source={images.LOGGEDPHOTO}/>
            <View style={styles.description}>
              <Text style={styles.title}>Pawel Czerwinski</Text>
              <Text style={styles.subTitle}>@pawel_czerwinski</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
      <CustomerButton navigateUrl={naviLink} navigation={navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 16,
    marginRight: 16
  },
  descriptionContainer: {
    height: 28,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 16,
    marginBottom: 20
  },
  logo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  description: {
    height: 28,
    flexDirection: 'column',
    marginBottom: 20,
    justifyContent: 'space-between',
    marginLeft: 8
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
