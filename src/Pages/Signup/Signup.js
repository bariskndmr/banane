import Input from 'components/Input';
import React from 'react';
import {View, Text, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import {Formik} from 'formik';

import LoginStyles from 'Pages/Login/Login.style';
import Button from 'components/Button';
import TextButton from 'components/TextButton';

const initialFormValues = {
  email: '',
  password: '',
};

const Signup = ({navigation}) => {
  const handleSignup = formValues => {
    auth()
      .createUserWithEmailAndPassword(formValues.email, formValues.password)
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
      <Formik initialValues={initialFormValues} onSubmit={handleSignup}>
        {({values, handleChange, handleSubmit}) => (
          <View style={LoginStyles.inputContainer}>
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
              text="Already do you have a account?"
              buttonText="Sign in!"
              onPress={handleSignin}
            />
            <Button text="Sign Up" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Signup;
