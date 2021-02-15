import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
    subtitle: {
        fontFamily: 'Roboto-Regular',
        fontStyle: 'normal',
        fontWeight: '900',
        fontSize: 13,
        lineHeight: 15,
        letterSpacing: 0.4,
        textTransform: 'uppercase',
        marginBottom: 24,
        marginTop: 16,
    },
    input: {
        height: 52,
        borderColor: '#000000',
        borderStyle: 'solid',
        borderWidth: 2,
        marginBottom: 16,
        padding: 17,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    image: {
        width: 120,
        height: 120,
        marginBottom: 11
    },
    flatList: {
        marginBottom: 32
    },
})