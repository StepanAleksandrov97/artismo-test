import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Form } from '../../components';
import images from '../../assets'
import styles from '../register/style'

export const Login = ({navigation}: any) => {
  const naviLink = "Home" 

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image  source={images.BACKBUTTON} />
      </TouchableOpacity>
      <Text style={styles.header}>Log in</Text>
      <Form navigateUrl={naviLink} navigation={navigation} buttonText='log in'/>
    </SafeAreaView>
  );
};