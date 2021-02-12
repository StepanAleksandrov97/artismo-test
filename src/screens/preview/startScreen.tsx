import React from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import {CustomerButton} from '../../components';
import images from '../../assets'
import styles from './style'

const naviLink = "RegisterFirstStep"

export const StartScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={images.BACKGROUND} style={styles.backgroundImage}>
        <View style={styles.previewWrap}>
          <View style={styles.logo}>
            <Image source={images.LOGO}/>
          </View>
          <View style={styles.descriptionContainer}>
            <Image source={images.LOGGEDPHOTO}/>
            <View style={styles.description}>
              <Text style={styles.descriptionTitle}>Pawel Czerwinski</Text>
              <Text style={styles.descriptionSubTitle}>@pawel_czerwinski</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.button}>
         <CustomerButton navigateUrl={naviLink} navigation={navigation} buttonText='register'/>
      </View>
    </View>
  );
};
