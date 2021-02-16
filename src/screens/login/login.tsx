import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import images from '../../assets';
import styles from './style'
//TODO import from components
import { CustomForm } from '../../components';

export const Login = () => {
  const {navigate, goBack} = useNavigation();
  const navigateToHome = useCallback(() => navigate('Home'), []);

  return (
	  <View style={styles.container}>
      <TouchableOpacity onPress={goBack}>
        <Image source={images.BACKBUTTON} />
      </TouchableOpacity>
      <Text style={styles.header}>Log in</Text>
      <CustomForm navigate={navigateToHome} buttonText='log in'/>
	  </View>
  );
};
