import React from 'react'
import { Text, View, Image, ScrollView } from 'react-native'
// @ts-ignore
import MasonryList from 'react-native-masonry-list'
import styles from './style'
import images from '../../assets'

export const HomeScreen = () => { 
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Discover</Text>
      <ScrollView>
        <Text style={styles.subtitle}>What’s new today</Text>
        <Image style={styles.imagePreview} source={images.GALLERY} />
        <View style={styles.descriptionContainer}>
            <Image source={images.LOGGEDPHOTO}/>
            <View style={styles.description}>
              <Text style={styles.descriptionTitle}>Pawel Czerwinski</Text>
              <Text style={styles.descriptionSubTitle}>@pawel_czerwinski</Text>
            </View>
        </View>
        <Text style={styles.subtitle}>Browse all</Text>
        <MasonryList
          images={[
            { URL: "https://luehangs.site/pic-chat-app-images/attractive-balance-beautiful-186263.jpg" },
            { uri: "https://luehangs.site/pic-chat-app-images/beautiful-blond-blonde-hair-478544.jpg" },
            { uri: "https://luehangs.site/pic-chat-app-images/beautiful-blond-blonde-hair-478544.jpg" },
            { uri: "https://luehangs.site/pic-chat-app-images/beautiful-blond-blonde-hair-478544.jpg" },
            { uri: "https://luehangs.site/pic-chat-app-images/beautiful-blond-blonde-hair-478544.jpg" },
            { uri: "https://luehangs.site/pic-chat-app-images/beautiful-blond-blonde-hair-478544.jpg" },
            { uri: "https://luehangs.site/pic-chat-app-images/beautiful-blond-blonde-hair-478544.jpg" },
            { uri: "https://luehangs.site/pic-chat-app-images/beautiful-blond-blonde-hair-478544.jpg" },
            { uri: "https://luehangs.site/pic-chat-app-images/beautiful-blond-blonde-hair-478544.jpg" },
            { URL: "https://luehangs.site/pic-chat-app-images/attractive-balance-beautiful-186263.jpg" },
            ]}
          initialColToRender={2}
          initialNumInColsToRender={5}
          spacing={2}
        />
      </ScrollView>
      
    </View>
  );
};