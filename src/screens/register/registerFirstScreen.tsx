import React, { useCallback } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CustomForm } from '../../components';
import images from '../../assets'
import styles from './style'

export const RegisterFirstScreen = () => {
  const {navigate, goBack} = useNavigation();
  const navigateToSecondRegisrerStep = useCallback(() => navigate('RegisterSecondStep'), []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack}>
          <Image  source={images.BACKBUTTON} />
      </TouchableOpacity>
      <Text style={styles.header}>Register</Text>
      <CustomForm navigate={navigateToSecondRegisrerStep} buttonText='next'/>
    </View>
  );
};
