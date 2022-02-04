const AuthErrorMessageParser = errorCode => {
  switch (errorCode) {
    case 'auth/invalid-email':
      return 'Invalid email';

    case 'auth/wrong-password':
      return 'Invalid email';

    case 'auth/user-not-found':
      return "User didn't find ";

    default:
      return errorCode;
  }
};

export default AuthErrorMessageParser;