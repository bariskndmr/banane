import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';

import Button from 'components/Button';
import Input from 'components/Input';

import Styles from './Login.style';

const TextButton = ({onPress}) => {
  return (
    <View style={Styles.textButtonContainer}>
      <Text>Don't you have account? </Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={Styles.textButton}>Sign up!</Text>
      </TouchableOpacity>
    </View>
  );
};

const Login = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSigin = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => navigation.navigate('SignupPage'))
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
        <TextButton onPress={sumbitSignup} />
        <Button onPress={handleSigin} text="Sign in" />
      </View>
    </View>
  );
};

export default Login;
