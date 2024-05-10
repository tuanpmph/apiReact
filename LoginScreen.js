import React, { useState } from 'react';
import { View, Text, TextInput, Button,Image, StyleSheet } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import { BackgroundImage } from 'react-native-elements/dist/config';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Thực hiện xác thực đăng nhập ở đây
    navigation.navigate('Register')
  };

  return (
    <View style = {styles.view} >
    <BackgroundImage 
    source={require('./Image/hinhnenmeo.jpg')} 
    style={{ flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center' }}
    >
      <Text h1 style={{ marginBottom: 50, fontSize: 40, color: 'blue' }}>Tài khoản </Text>
      <Image source={require ('./Image/anh.jpg')} style={styles.logo} />
           
      <Input
        placeholder="Email"
        leftIcon={<Icon name='email' />}
        value={email}
        onChangeText={setEmail}
      />
      <Input
        placeholder="Mật khẩu"
        leftIcon={<Icon name='lock' />}
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Đăng Nhập" onPress={handleLogin} />

    </BackgroundImage>
    </View>
   
  );
};

export default LoginScreen;

const styles = StyleSheet .create ({
  logo:{
    width: 150,
    height: 150,
    marginBottom: 20,
     borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  view:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: "center"
  },



});
