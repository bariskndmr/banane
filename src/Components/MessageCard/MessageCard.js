import React from 'react';
import {View, Text} from 'react-native';
import {formatDistance, parseISO} from 'date-fns';

import Styles from './MessageCard.style';

const MessageCard = ({message}) => {
  const formattedDate = formatDistance(parseISO(message.date), new Date(), {
    addSuffix: true,
  });

  return (
    <View style={Styles.container}>
      <View style={Styles.headerContainer}>
        <Text style={Styles.text}>{message.username}</Text>
        <Text style={Styles.text}>{formattedDate}</Text>
      </View>
      <View style={Styles.contentContainer}>
        <Text style={Styles.text}>{message.text}</Text>
      </View>
    </View>
  );
};

export default MessageCard;
