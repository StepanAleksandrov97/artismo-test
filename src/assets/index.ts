import { ImageSourcePropType } from 'react-native'

const Images: IHashMap<ImageSourcePropType> = {
    BACKGROUND:require('./images/background.png'),
    LOGGEDPHOTO: require('./images/loggedPhoto.png'),
    GALLERY: require('./images/gallery.png'),
    LOGO: require('./images/logo.png'),
    USERPHOTO: require('./images/userPhoto.png'),
    BACKBUTTON: require('./images/buttonBack.png'),
    HOME: require('./images/homeIcon.svg'),
    CHATS: require('./images/chatsIcon.svg'),
    PROFILE: require('./images/profileIcon.svg'),
    SEARCH: require('./images/searchIcon.svg'),
    PHOTO1: require('./Rectangle1.png'),
}


type IHashMap<ImageSourcePropType> = {
	[key: string]: ImageSourcePropType
}

export default Images