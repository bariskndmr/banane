import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import Styles from './Button.style';

const Button = ({text, onPress, loading}) => {
  return (
    <TouchableOpacity onPress={onPress} style={Styles.container}>
      {loading ? (
        <ActivityIndicator size="small" />
      ) : (
        <Text style={Styles.text}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
