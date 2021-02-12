import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './style'
import images from '../../assets'

export const HomeScreen = () => { 
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Discover</Text>
      <Text style={styles.subtitle}>What’s new today</Text>
      <Image style={styles.imagePreview} source={images.GALLERY} />
      <View style={styles.descriptionContainer}>
            <Image source={images.LOGGEDPHOTO}/>
            <View style={styles.description}>
              <Text style={styles.descriptionTitle}>Pawel Czerwinski</Text>
              <Text style={styles.descriptionSubTitle}>@pawel_czerwinski</Text>
            </View>
          </View>
    </View>
  );
};