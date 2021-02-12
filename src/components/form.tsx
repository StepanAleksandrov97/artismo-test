import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {CustomerButton} from '../components';


type TProps = {
  navigateUrl?: string,
  navigation?: object | any,
  buttonText: string
}
export const Form= ({navigation, navigateUrl: naviLink, buttonText}: TProps) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
        <TextInput
          placeholder="jane@example.com"
          onChangeText={(text) => setEmail(text)}
          defaultValue={email}
          style={styles.input}
          textContentType="emailAddress"
        />
        <TextInput
          placeholder="Type here to translate!"
          onChangeText={(text) => setPassword(text)}
          defaultValue={password}
          style={styles.input}
          textContentType="password"
          secureTextEntry={true}
        />
      <CustomerButton navigateUrl={naviLink} navigation={navigation} buttonText={buttonText}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    height: 52,
    borderColor: '#000000',
    borderStyle: 'solid',
    borderWidth: 2,
    marginBottom: 16,
    padding: 17,
  },
});
