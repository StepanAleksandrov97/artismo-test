import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    subtitle: {
        fontFamily: 'Roboto-Regular',
        fontStyle: 'normal',
        fontWeight: '900',
        fontSize: 13,
        lineHeight: 15,
        letterSpacing: 0.4,
        textTransform: 'uppercase',
        marginBottom: 24
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingLeft: 16,
        paddingRight: 16,
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
      imagePreview: {
          width: '100%',
          marginBottom: 16
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
      descriptionContainer: {
        height: 28,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 20
      },
})