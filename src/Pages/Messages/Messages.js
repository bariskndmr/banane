import React, {useState} from 'react';
import {Text, SafeAreaView} from 'react-native';

import FloatingButton from 'src/Components/FloatingButton';
import ContentInputModal from 'src/Components/Modals/ContentInputModal';

import Styles from './Messages.style';

const Messages = () => {
  const [inputModalVisible, setInputModalVisible] = useState(false);

  const handleInputToggle = () => {
    setInputModalVisible(!inputModalVisible);
  };

  const handleSendContent = content => {
    console.log(content);
  };

  return (
    <SafeAreaView style={Styles.container}>
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
