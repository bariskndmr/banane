import React, {useState} from 'react';
import {View, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import {Formik} from 'formik';
import {showMessage} from 'react-native-flash-message';

import AuthErrorMessageParser from 'src/utils/authErrorMessageParser';
import Button from 'components/Button';
import Input from 'components/Input';
import TextButton from 'components/TextButton';

import LoginStyles from 'Pages/Login/Login.style';

const initialFormValues = {
  email: '',
  password: '',
  repassword: '',
};

const Signup = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const handleSignup = async ({email, password, repassword}) => {
    if (password !== repassword) {
      showMessage({
        message: 'Passwords do not match!',
        type: 'danger',
      });
      return;
    }
    try {
      setLoading(true);
      await auth().createUserWithEmailAndPassword(email, repassword);
      navigation.navigate('LoginPage');
      showMessage({
        message: 'User created!',
        type: 'success',
      });
    } catch (error) {
      showMessage({
        message: AuthErrorMessageParser(error.code),
        type: 'warning',
      });
      setLoading(false);
    }
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
              isSecure
            />
            <Input
              onChange={handleChange('repassword')}
              value={values.repassword}
              placeholder="Re-Password..."
              label="Re-Password"
              isSecure
            />
            <TextButton
              text="Already do you have a account?"
              buttonText="Sign in!"
              onPress={handleSignin}
            />
            <Button text="Sign Up" onPress={handleSubmit} loading={loading} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Signup;
