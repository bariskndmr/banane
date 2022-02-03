import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Styles from './Button.style';

const Button = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={Styles.container}>
      <Text style={Styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
