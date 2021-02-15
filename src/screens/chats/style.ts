import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
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
    image: {
        width: 64,
        height: 64,
        marginRight: 16
    },
    title: {
        fontFamily: 'Roboto-Bold',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 13,
        lineHeight: 18,
        color: '#000000'
    },
    subTitle: {
        fontFamily: 'Roboto-Regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 13,
        lineHeight: 18,
    },
    descriptionContainer: {
        height: 100,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingRight: 16,
        paddingLeft: 16,
        paddingTop: 20,
        paddingBottom: 20,
        borderColor: '#E5E5E5',
        borderBottomWidth: 1,
    },
})