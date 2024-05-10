import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  databaseURL: 'YOUR_DATABASE_URL',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleLogin = () => {
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => console.log('Logged in successfully', user))
      .catch(error => console.error('Login failed', error));
  }

  render() {
    return (
      <View>
        <Text>Login</Text>
        <TextInput
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          onChangeText={password => this.setState({ password })}
        />
        <Button title="Login" onPress={this.handleLogin} />
      </View>
    );
  }
}

class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleRegister = () => {
    const { email, password } = this.state;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => console.log('Registered successfully', user))
      .catch(error => console.error('Registration failed', error));
  }

  render() {
    return (
      <View>
        <Text>Register</Text>
        <TextInput
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          onChangeText={password => this.setState({ password })}
        />
        <Button title="Register" onPress={this.handleRegister} />
      </View>
    );
  }
}

export { LoginScreen, RegisterScreen };
