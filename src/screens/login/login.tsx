import React from 'react';
import {Image, Text, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Form} from '../../components';
import images from '../../assets'
import styles from '../register/style'

export const Login = ({navigation}: any) => {
  const naviLink = "Home" 

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image  source={images.BACKBUTTON} />
      </TouchableOpacity>
      <Text style={styles.header}>Log in</Text>
      <Form navigateUrl={naviLink} navigation={navigation} buttonText='log in'/>
    </View>
  );
};