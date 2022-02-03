import React from 'react';
import {View, Text, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import {Formik} from 'formik';

import Button from 'components/Button';
import Input from 'components/Input';
import TextButton from 'components/TextButton';

import Styles from './Login.style';

const initialFormValues = {
  email: '',
  password: '',
};

const Login = ({navigation}) => {
  const handleSignin = formValues => {
    auth()
      .signInWithEmailAndPassword(formValues.email, formValues.password)
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
            />
            <TextButton
              text="Don't you have account?"
              buttonText="Sign up"
              onPress={sumbitSignup}
            />
            <Button onPress={handleSubmit} text="Sign in" />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Login;
