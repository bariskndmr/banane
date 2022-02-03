import React from 'react';
import {View, TextInput, Text} from 'react-native';

import Styles from './Input.style';

const Input = ({label, placeholder, value, onChange}) => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.label}>{label}</Text>
      <TextInput
        style={Styles.input}
        value={value}
        placeholder={placeholder}
        onChangeText={onChange}
      />
    </View>
  );
};

export default Input;
