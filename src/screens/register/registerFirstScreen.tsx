import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { Form} from '../../components';
import images from '../../assets'
import styles from './style'
import { SafeAreaView } from 'react-native-safe-area-context';

export const RegisterFirstScreen = ({navigation}: any) => {
  const naviLink = "RegisterSecondStep" 

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image  source={images.BACKBUTTON} />
      </TouchableOpacity>
      <Text style={styles.header}>Register</Text>
      <Form navigateUrl={naviLink} navigation={navigation} buttonText='Next'/>
    </SafeAreaView>
  );
};
