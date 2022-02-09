import React, {useEffect, useState} from 'react';
import {View, TextInput} from 'react-native';
import Modal from 'react-native-modal';

import Button from '../Button';

import Styles from './ContentInputModal.style';

const ContentInputModal = ({visible, onClose, onSend}) => {
  const [text, setText] = useState(null);

  // bir sonraki tıklama da bir önceki içeriği tekrar gönderdiği için;
  useEffect(() => {
    setText(null);
  }, [onSend]);

  return (
    <Modal
      style={Styles.modal}
      isVisible={visible}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <View style={Styles.container}>
        <View style={Styles.inputContainer}>
          <TextInput
            placeholder="Write somethings..."
            onChangeText={setText}
            multiline
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
        <View style={Styles.buttonContainer}>
          <Button text="Send" onPress={() => onSend(text)} />
        </View>
      </View>
    </Modal>
  );
};

export default ContentInputModal;
