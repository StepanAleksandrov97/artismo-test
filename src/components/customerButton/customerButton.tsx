import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './style'
//TODO in folder

type TPops = {
  buttonText: string;
  onPress: () => void;
  disabled?: boolean;
};
//TODO index files
export const CustomerButton = ({onPress, buttonText, disabled}: TPops) => {

  const buttonStyle = [styles.button, disabled && {backgroundColor: 'grey'}];

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={buttonStyle}>
        <Text style={styles.text}>{buttonText}</Text>
      </View>
    </TouchableOpacity>
  );
};
