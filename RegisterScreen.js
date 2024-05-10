import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Button , Image} from 'react-native';

const RegisterScreen = ({ navigation }) => {
  return (
    <View style = {{flex: 1, background: '#CCFFFF'}}>
      <Image source={require('./Image/anh.jpg')}
      style={style.anhnen}></Image>
      
      <Text>Register Screen</Text>
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default RegisterScreen;

const style = StyleSheet.create({
  anhnen:{
   
    width:200,
    height:200,
    marginBottom:30,
    marginLeft:30,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10


    
  
  }
})