import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {formatDistance, parseISO} from 'date-fns';

import Styles from './MessageCard.style';

const MessageCard = ({message, onDislike}) => {
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
      <View style={Styles.dislikeContainer}>
        <TouchableOpacity style={Styles.dislikeButton} onPress={onDislike}>
          {!!message.dislike && (
            <View style={Styles.dislikeCountContainer}>
              <Text style={Styles.dislikeCounter}>{message.dislike}</Text>
            </View>
          )}
          <Text>Big Deal!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MessageCard;
