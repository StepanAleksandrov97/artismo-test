import { Platform, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      ...Platform.select({
        ios: {
          paddingBottom: 16
        }
      }),
      backgroundColor: '#ffffff'
    },
    previewWrap: {
      flex: 1,
    },
    button: {
      marginLeft: 16,
      marginRight: 16,
      marginTop: 16
    },
    backgroundImage: {
      flex: 1,
      paddingLeft: 16,
      paddingRight: 16,
    },
    descriptionContainer: {
      height: 28,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      marginLeft: 16,
      marginBottom: 20
    },
    logo: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    description: {
      height: 28,
      flexDirection: 'column',
      marginBottom: 20,
      justifyContent: 'space-between',
      marginLeft: 8
    },
    descriptionTitle: {
      fontFamily: 'Roboto-Bold',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 13,
      lineHeight: 15,
    },
    descriptionSubTitle: {
      fontFamily: 'Roboto-Regular',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 11,
      lineHeight: 13,
    },
  });