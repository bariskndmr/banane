import React, {useState} from 'react';
import {View, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import {Formik} from 'formik';
import {showMessage} from 'react-native-flash-message';

import AuthErrorMessageParser from 'src/utils/authErrorMessageParser';
import Button from 'components/Button';
import Input from 'components/Input';
import TextButton from 'components/TextButton';

import Styles from './Login.style';

const initialFormValues = {
  email: '',
  password: '',
};

const Login = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  const handleSignin = async ({email, password}) => {
    if (!email && !password) {
      showMessage({
        message: "Input's can't be empty!",
        type: 'danger',
      });
    } else {
      try {
        setLoading(true);
        await auth().signInWithEmailAndPassword(email, password);
        showMessage({
          message: 'Login Success!',
          type: 'success',
          duration: 1000,
        });
        navigation.navigate('MessagesPage');
        setLoading(false);
      } catch (error) {
        showMessage({
          message: AuthErrorMessageParser(error.code),
          type: 'warning',
        });
        setLoading(false);
      }
    }
  };

  const sumbitSignup = () => {
    return navigation.navigate('SignupPage');
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.titleContainer}>
        <Text style={Styles.title}>Login</Text>
      </View>
      <Formik initialValues={initialFormValues} onSubmit={handleSignin}>
        {({values, handleChange, handleSubmit}) => (
          <View style={Styles.inputContainer}>
            <Input
              onChange={handleChange('email')}
              value={values.email}
              placeholder="E-Mail..."
              label="E-Mail"
            />
            <Input
              onChange={handleChange('password')}
              value={values.password}
              placeholder="Password..."
              label="Password"
              isSecure
            />
            <TextButton
              text="Don't you have account?"
              buttonText="Sign up"
              onPress={sumbitSignup}
            />
            <Button onPress={handleSubmit} text="Sign in" loading={loading} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Login;
