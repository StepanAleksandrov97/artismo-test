import React from 'react';
import { StyleSheet } from 'react-native';
import { Field, Form } from 'react-final-form';
import { CustomerButton, TextInputField } from '../../components';
import { validateLogInForm } from './utils';


type TProps = {
  buttonText: string,
  navigate: () => void
}
export const CustomForm= ({navigate, buttonText}: TProps) => {
  return (
    <Form
        // validateOnBlur={true}
        onSubmit={navigate}
        validate={validateLogInForm}
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
              <Field name="password">
                {({input, meta}) => (
                  <TextInputField
                    placeholder="Type here to translate!"
                    textContentType="password"
                    secureTextEntry={true}
                    {...input}
                    {...meta}
                  />
                )}
              </Field>
              <CustomerButton disabled={!valid} onPress={handleSubmit} buttonText={buttonText} />
            </>
          );
        }}
      </Form>
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
