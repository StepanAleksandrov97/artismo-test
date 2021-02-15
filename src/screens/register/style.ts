import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 28,
      backgroundColor: '#ffffff'
    },
    header: {
      fontFamily: 'Comfortaa',
      fontWeight: '400',
      fontStyle: 'normal',
      fontSize: 36,
      lineHeight: 40.14,
      marginTop: 33,
      marginBottom: 32
    },
    input: {
      height: 52,
      borderColor: '#000000',
      borderStyle: 'solid',
      borderWidth: 2,
      marginBottom: 16,
      padding: 17,
    },
    textPolicy: {
      marginTop: 16,
      fontFamily: 'Roboto-Regular',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 13,
      lineHeight: 18,
      color: '#000000'
    },
    underline: {
      textDecorationLine: 'underline'
    }
  })