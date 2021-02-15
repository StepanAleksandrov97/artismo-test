import React, { useState } from 'react';
import { FlatList, Image, Text, TextInput, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '../../assets';
import { CustomerButton } from '../../components';
import styles from './style'

export const Search = () => {
    const [searchText, setSearchText] = useState('');

    const DATA = [
        { id: '1' }, 
        { id: '2' }, 
        { id: '3' }, 
        { id: '4' }, 
        { id: '5' },
        { id: '6' },
        { id: '7' },
        { id: '7' },
        { id: '8' },
        { id: '9' },
        { id: '1' },
        { id: '1' },
    ];

    const renderItem = () => (
        <View>
            <Image style={styles.image} source={images.PHOTO1} />
        </View>
    );

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Search</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setSearchText(text)}
                defaultValue={searchText}
                placeholder="search all photos"
            />
            <Text style={styles.subtitle}>all results</Text>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={3}
                columnWrapperStyle={{justifyContent: 'space-between'}}
                style={styles.flatList}
            />

            <CustomerButton buttonText="see more"/>
        </SafeAreaView>
    )
}