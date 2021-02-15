import React, { useState } from 'react';
import { Image, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CustomerButton } from '../../components';
import images from '../../assets'
import styles from './style'


export const RegisterSecondScreen = ({navigation}: any) => {

const [text, setText] = useState(''); 
const naviLink = "Login" 

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image  source={images.BACKBUTTON} />
      </TouchableOpacity>
      <Text style={styles.header}>Register</Text>
      <View>
        <TextInput
          placeholder="the jane"
          onChangeText={(text) => setText(text)}
          defaultValue={text}
          style={styles.input}
          textContentType='name'
        />
      <CustomerButton navigateUrl={naviLink} navigation={navigation} buttonText='sign up'/>
      <Text style={styles.textPolicy}>
        By signing up, you agree to Photo’s <Text style={styles.underline}>Terms of Service</Text> and <Text style={styles.underline}>Privacy Policy</Text>.
      </Text>
    </View>
    </SafeAreaView>
  );
};
