import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import FloatingButton from 'src/Components/FloatingButton';
import ContentInputModal from 'src/Components/Modals/ContentInputModal';

import Styles from './Messages.style';
import parseContentData from 'src/utils/parseContentData';
import MessageCard from 'src/Components/MessageCard';
import {showMessage} from 'react-native-flash-message';

const Messages = () => {
  const [inputModalVisible, setInputModalVisible] = useState(false);
  const [contentList, setContentList] = useState([]);

  useEffect(() => {
    database()
      .ref('messages/')
      .on('value', snapshot => {
        const contentData = snapshot.val();
        const parsedData = parseContentData(contentData || {});
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
      dislike: 0,
    };

    if (!contentObject.text) {
      return showMessage({
        message: 'Empty content!',
        type: 'danger',
      });
    }
    database().ref('messages/').push(contentObject);
  }

  const handleDislike = item => {
    database()
      .ref(`messages/${item.id}`)
      .update({dislike: item.dislike + 1});
  };

  const renderContent = ({item}) => (
    <MessageCard message={item} onDislike={() => handleDislike(item)} />
  );

  return (
    <SafeAreaView style={Styles.container}>
      <FlatList data={contentList} renderItem={renderContent} />
      <FloatingButton iconName="plus" onPress={handleInputToggle} />
      <ContentInputModal
        visible={inputModalVisible}
        onClose={handleInputToggle}
        onSend={handleSendContent}
      />
    </SafeAreaView>
  );
};

export default Messages;
