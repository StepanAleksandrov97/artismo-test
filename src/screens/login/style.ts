import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingLeft: 16,
    paddingRight: 16,
    ...Platform.select({
        ios: {
          paddingTop: 60
        },
        default: {
          paddingTop: 28,
        }
      }),
    backgroundColor: '#ffffff',
  },
  header: {
    fontFamily: 'Comfortaa',
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: 36,
    lineHeight: 40.14,
    marginTop: 33,
    marginBottom: 32,
  }
});