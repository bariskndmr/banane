import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import Styles from './TextButton.style';

const TextButton = ({text, onPress, buttonText}) => {
  return (
    <View style={Styles.textButtonContainer}>
      <Text>{text}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={Styles.textButton}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TextButton;
