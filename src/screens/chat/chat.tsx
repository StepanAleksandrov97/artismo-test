import React from 'react';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '../../assets';
import styles from './style';


export const Chat = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{borderBottomWidth: 1, borderColor: '#E5E5E5'}}>
              <Text style={styles.header}>Chats</Text>  
            </View>
        </SafeAreaView>
    )
}