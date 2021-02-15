import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style'
import images from '../../assets'

export const HomeScreen = () => { 
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Discover</Text>
      <ScrollView>
        <Text style={styles.subtitle}>What’s new today</Text>
        <Image style={styles.imagePreview} source={images.GALLERY} />
        <View style={styles.descriptionContainer}>
            <Image source={images.LOGGEDPHOTO}/>
            <View style={styles.description}>
              <Text style={styles.descriptionTitle}>Pawel Czerwinski</Text>
              <Text style={styles.descriptionSubTitle}>@pawel_czerwinski</Text>
            </View>
        </View>
      </ScrollView>
      
    </SafeAreaView>
  );
};