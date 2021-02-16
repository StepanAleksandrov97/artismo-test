import React, { useCallback } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CustomerButton, TextInputField } from '../../components';
import images from '../../assets'
import styles from './style'
import { Field, Form } from 'react-final-form';
import { validateRegisterForm } from './util';


export const RegisterSecondScreen = () => {
  const {navigate, goBack} = useNavigation();
  const navigateToLogin = useCallback(() => navigate('Login'), []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack}>
          <Image  source={images.BACKBUTTON} />
      </TouchableOpacity>
      <Text style={styles.header}>Register</Text>
      <Form
        // validateOnBlur={true}
        onSubmit={navigateToLogin}
        validate={validateRegisterForm}
        subscription={{submitting: true, valid: true}}>
        {({handleSubmit, valid,values}) => {
          return (
            <>
              <Field name="email">
                {({input, meta}) => (
                  <TextInputField
                    placeholder="jane@example.com"
                    {...input}
                    {...meta}
                  />
                )}
              </Field>
              <CustomerButton disabled={!valid} onPress={handleSubmit} buttonText={'sign up'} />
              <Text style={styles.textPolicy}>
                By signing up, you agree to Photo’s <Text style={styles.underline}>Terms of Service</Text> and <Text style={styles.underline}>Privacy Policy</Text>.
              </Text>
            </>
          );
        }}
      </Form>
    </View>
  );
};
