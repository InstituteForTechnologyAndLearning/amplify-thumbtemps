import { Auth } from 'aws-amplify';
import store from '@/store';

class AuthService {
  async signIn({ username, password }) {
    try {
      const user = await Auth.signIn(username, password);
      if (user.challengeName === 'SMS_MFA' || user.challengeName === 'SOFTWARE_TOKEN_MFA') {
        return {
          status: 204,
          message: 'Needs MFA',
          user
        };
      }
      else if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
        const { requiredAttributes } = user.challengeParam;
        return {
          status: 401,
          message: 'New Password Required',
          params: requiredAttributes,
          user
        };
      }
      else if (user.challengeName === 'MFA_SETUP') {
        await Auth.setupTOTP(user);
        return user;
      }
      else {
        // we're logged in
        store.commit('user/set', user);
        return user;
      }
    } catch (err) {
      if (err.code === 'UserNotConfirmedException') {
        // The error happens if the user didn't finish the confirmation step when signing up
        // In this case you need to resend the code and confirm the user
        // About how to resend the code and confirm the user, please check the signUp part
      }
      else if (err.code === 'PasswordResetRequiredException') {
        // The error happens when the password is reset in the Cognito console
        // In this case you need to call forgotPassword to reset the password
        // Please check the Forgot Password part.
      }
      else if (err.code === 'NotAuthorizedException') {
        // The error happens when the incorrect password is provided
      }
      else if (err.code === 'UserNotFoundException') {
        // The error happens when the supplied username/email does not exist in the Cognito user pool
      }
      else {
        console.log(err);
      }
      throw err;
    }
  }

  async confirmSignIn(user, code, challengeName) {
    const loggedUser = await Auth.confirmSignIn(user, code, challengeName);
  }

  async signUp({ username, password, email }) {
    try {
      const user = await Auth.signUp({
        username,
        password,
        attributes: {
          email
        },
        validationData: []
      });

      return user;
    } catch (err) {
      console.log({ err });
      throw err;
    }
  }

  async confirmSignUp({ username, password, code }) {
    try {
      const confirmed = await Auth.confirmSignUp(username, code, { forceAliasCreation: true });
      return await this.signIn({ username, password });
    } catch (err) {
      throw err;
    }
  }

  async signOut() {
    try {
      await Auth.signOut();
      store.dispatch('user/logout');
    } catch (err) {
      throw err;
    }
  }
}

export default new AuthService();
