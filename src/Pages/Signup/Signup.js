import Input from 'components/Input';
import React, {useState} from 'react';
import {View, Text, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';

import LoginStyles from 'Pages/Login/Login.style';
import Button from 'components/Button';
import TextButton from 'components/TextButton';

const Signup = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        if (response) {
          return Alert.alert('Success', 'Kayıt Başarılı!', [
            {text: 'OK!', onPress: () => navigation.navigate('LoginPage')},
          ]);
        }
      })
      .catch(error => Alert.alert('Error', error.message));
  };

  const handleSignin = () => {
    return navigation.navigate('LoginPage');
  };

  return (
    <View style={LoginStyles.container}>
      <View style={LoginStyles.titleContainer}>
        <Text style={LoginStyles.title}>Signup</Text>
      </View>
      <View style={LoginStyles.inputContainer}>
        <Input
          onChange={text => setEmail(text)}
          value={email}
          placeholder="E-Mail..."
          label="E-Mail"
        />
        <Input
          onChange={text => setPassword(text)}
          value={password}
          placeholder="Password..."
          label="Password"
        />
        <TextButton
          text="Already do you have a account?"
          buttonText="Sign in!"
          onPress={handleSignin}
        />
        <Button text="Sign Up" onPress={handleSignup} />
      </View>
    </View>
  );
};

export default Signup;
