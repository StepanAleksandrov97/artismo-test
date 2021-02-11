import { ImageSourcePropType } from 'react-native'

const Images: IHashMap<ImageSourcePropType> = {
    //TODO add all images
    BACKGROUND:require('./background.png'),
    LOGGEDPHOTO: require('./loggedPhoto.png'),
    GALLERY: require('./gallery.png'),
    LOGO: require('./logo.png'),
    USERPHOTO: require('./userPhoto.png')
}


type IHashMap<T> = {
	[key: string]: T
}

export default Images