import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Styles from './Button.style';

const Button = () => {
  return (
    <TouchableOpacity style={Styles.container}>
      <Text>Button</Text>
    </TouchableOpacity>
  );
};

export default Button;
