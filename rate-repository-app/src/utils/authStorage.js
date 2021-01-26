import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    // Get the access token for the storage
    try {
      const accessToken = await AsyncStorage.getItem(
        `${this.namespace}:accessToken`
      );

      return accessToken ? JSON.parse(accessToken) : null;
    } catch (error) {
      console.log(error);
    }
  }

  async setAccessToken(accessToken) {
    // Add the access token to the storage
    try {
      await AsyncStorage.setItem(
        `${this.namespace}:accessToken`,
        JSON.stringify(accessToken)
      );
    } catch (error) {
      console.log(error);
    }
  }

  async removeAccessToken() {
    // Remove the access token from the storage
    try {
      await AsyncStorage.removeItem(`${this.namespace}:accessToken`);
    } catch (error) {
      console.log(error);
    }
  }
}

export default AuthStorage;
