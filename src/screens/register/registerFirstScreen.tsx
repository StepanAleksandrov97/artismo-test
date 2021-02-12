import React from 'react';
import {Image, Text, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Form} from '../../components';
import images from '../../assets'
import styles from './style'

export const RegisterFirstScreen = ({navigation}: any) => {
  const naviLink = "RegisterSecondStep" 

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image  source={images.BACKBUTTON} />
      </TouchableOpacity>
      <Text style={styles.header}>Register</Text>
      <Form navigateUrl={naviLink} navigation={navigation} buttonText='Next'/>
    </View>
  );
};
