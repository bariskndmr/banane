import React, {useState} from 'react';
import {View, Text, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';

import Button from 'components/Button';
import Input from 'components/Input';

import Styles from './Login.style';
import TextButton from 'components/TextButton';
const Login = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSigin = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => navigation.navigate('HomePage'))
      .catch(error => Alert.alert('Error', error.message));
  };

  const sumbitSignup = () => {
    return navigation.navigate('SignupPage');
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.titleContainer}>
        <Text style={Styles.title}>Login</Text>
      </View>
      <View style={Styles.inputContainer}>
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
          text="Don't you have account?"
          buttonText="Sign up"
          onPress={sumbitSignup}
        />
        <Button onPress={handleSigin} text="Sign in" />
      </View>
    </View>
  );
};

export default Login;
