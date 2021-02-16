import React from 'react';
import { Image, Text, View } from 'react-native';
import images from '../../assets';
import styles from './style';


export const Chat = () => {
    return (
        <View style={styles.container}>
            <View style={{borderBottomWidth: 1, borderColor: '#E5E5E5'}}>
              <Text style={styles.header}>Chats</Text>  
            </View>
            <View style={styles.messageInfo}>
                <Image source={images.USERPHOTO} />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        Really love your most recent photo. I’ve been trying to capture the same thing for a few 
                        months and would love some tips!
                    </Text>
                </View>
            </View>
        </View>
    )
}