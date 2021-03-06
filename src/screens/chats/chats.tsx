import React from 'react';
import { Image, Text, View } from 'react-native';
import images from '../../assets';
import styles from './style';


export const Chats = () => {
    return (
        <View style={styles.container}>
            <View style={{borderBottomWidth: 1, borderColor: '#E5E5E5'}}>
              <Text style={styles.header}>Chats</Text>  
            </View>
            
            <View style={styles.descriptionContainer}>
                <Image style={styles.image} source={images.LOGGEDPHOTO}/>
                <View>
                    <Text style={styles.title}>James</Text>
                    <Text style={styles.subTitle}>Thank you! That was very helpful!</Text>
                </View>
            </View>
            <View style={styles.descriptionContainer}>
                <Image style={styles.image} source={images.LOGGEDPHOTO}/>
                <View>
                    <Text style={styles.title}>Will Kenny</Text>
                    <Text style={styles.subTitle}>I know... I’m trying to get the funds.</Text>
                </View>
            </View>
            <View style={styles.descriptionContainer}>
                <Image style={styles.image} source={images.LOGGEDPHOTO}/>
                <View>
                    <Text style={styles.title}>Beth Williams</Text>
                    <Text style={styles.subTitle}>I’m looking for tips around capturing the milky way...</Text>
                </View>
            </View>
            <View style={styles.descriptionContainer}>
                <Image style={styles.image} source={images.LOGGEDPHOTO}/>
                <View>
                    <Text style={styles.title}>Rev Shawn</Text>
                    <Text style={styles.subTitle}>Wanted to ask if you’re available for a portrait.</Text>
                </View>
            </View>
        </View>
    )
}