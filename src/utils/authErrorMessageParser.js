const AuthErrorMessageParser = errorCode => {
  switch (errorCode) {
    case 'auth/invalid-email':
      return 'Invalid email';

    case 'auth/wrong-password':
      return 'Wrong password';

    case 'auth/user-not-found':
      return "User didn't find ";

    case 'auth/email-already-in-use':
      return 'The email already in use ';

    default:
      return errorCode;
  }
};

export default AuthErrorMessageParser;
