import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Form} from '../../components/form';
import images from '../../assets'

export const Register = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image  source={images.BACKBUTTON} />
      </TouchableOpacity>
      <Text style={styles.header}>Register</Text>
      <Form />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    marginLeft: 16,
    marginRight: 16,
    marginTop: 60.35
  },
  header: {
    // fontFamily: 'Comfortaa',
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: 36,
    lineHeight: 40.14,
    marginTop: 33,
    marginBottom: 32
  }
})
