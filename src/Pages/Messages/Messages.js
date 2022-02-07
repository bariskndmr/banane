import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import FloatingButton from 'src/Components/FloatingButton';
import ContentInputModal from 'src/Components/Modals/ContentInputModal';

import Styles from './Messages.style';
import parseContentData from 'src/utils/parseContentData';

const Messages = () => {
  const [inputModalVisible, setInputModalVisible] = useState(false);
  const [contentList, setContentList] = useState([]);

  useEffect(() => {
    database()
      .ref('messages/')
      .on('value', snapshot => {
        const contentData = snapshot.val();
        const parsedData = parseContentData(contentData);
        setContentList(parsedData);
      });
  }, []);

  const handleInputToggle = () => {
    setInputModalVisible(!inputModalVisible);
  };

  const handleSendContent = content => {
    handleInputToggle();
    sendContent(content);
  };

  function sendContent(content) {
    const userEmail = auth().currentUser.email;

    const contentObject = {
      text: content,
      username: userEmail.split('@')[0],
      date: new Date().toISOString(),
    };

    database().ref('messages/').push(contentObject);
  }

  return (
    <SafeAreaView style={Styles.container}>
      <FloatingButton iconName="plus" onPress={handleInputToggle} />
      <View>
        <FlatList
          data={contentList}
          renderItem={({item}) => <Text>{item.text}</Text>}
        />
      </View>
      <ContentInputModal
        visible={inputModalVisible}
        onClose={handleInputToggle}
        onSend={handleSendContent}
      />
    </SafeAreaView>
  );
};

export default Messages;
