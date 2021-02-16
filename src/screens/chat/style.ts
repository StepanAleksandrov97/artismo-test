import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    header: {
        fontFamily: 'Comfortaa',
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 17,
        lineHeight: 22,
        textAlign: 'center',
        marginTop: 26,
        marginBottom: 11
    },
    messageInfo: {
        flexDirection: 'row',
        paddingLeft: 16,
        paddingRight: 16,
        marginTop: 24,
        marginBottom: 24
    },
    textContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.03)',
        padding: 16
    },
    text: {
        fontFamily: 'Roboto-Regular',
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 13,
        lineHeight: 18
    }
})