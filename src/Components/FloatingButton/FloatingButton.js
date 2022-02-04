import React from 'react';
import {TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Styles from './FloatingButton.style';

const FloatingButton = ({iconName, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={Styles.container}>
      <Icon name={iconName} size={30} color="#fff" />
    </TouchableOpacity>
  );
};

export default FloatingButton;
