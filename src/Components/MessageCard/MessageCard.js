import React from 'react';
import {View, Text} from 'react-native';

import Styles from './MessageCard.style';

const MessageCard = ({message}) => {
  return (
    <View style={Styles.container}>
      <View style={Styles.headerContainer}>
        <Text style={Styles.text}>{message.username}</Text>
        <Text style={Styles.text}>{message.date}</Text>
      </View>
      <View style={Styles.contentContainer}>
        <Text style={Styles.text}>{message.text}</Text>
      </View>
    </View>
  );
};

export default MessageCard;
