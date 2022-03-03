import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import Logo from '../../../assets/images/Growexx_logo.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomInput/CustomButton';


const LoginScreen = () => {


  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');


  const {height} = useWindowDimensions();

  const onLoginPressed = () => {
    console.log("Login");
  }
  const onForgotPasswordPressed = () => {
    console.log("Forgot Password");
  }
  const onLoginYahoo = () => {
    console.log("Login with Yahoo");
  }
  const onLoginGmail = () => {
    console.log("Login with Gmail");
  }
  const onLoginOutlook = () => {
    console.log("Login with Outlook");
  }
  const onSignUpPressed = () => {
    console.log("SignUp HERE");
  }
  
  
  return(
    <ScrollView>
      <View style={styles.root}>
        <Text>LoginScreen</Text>
        <Image 
          source={Logo} 
          style={styles.logo, {height:height * 0.2}} 
          resizeMode="contain"/>
        <Text>after image</Text>
        <CustomInput 
          placeholder="Username" 
          value={username} 
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Password" 
          value={password} 
          setValue={setPassword}
          secureTextEntry={true}
        />
        
        
        <CustomButton 
          text="Login"
          onPress={onLoginPressed}  
        />
        <CustomButton 
          text="Forgot Password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />
        <CustomButton 
          text="Login with Yahoo!"
          onPress={onLoginYahoo} 
          bgColor="#ffffff" 
          fgColor="#720e9e"
        />
        <CustomButton 
          text="Login with Gmail"
          onPress={onLoginGmail}
          bgColor="#FAE9EA"
          fgColor="#DD4D44"
        />
        <CustomButton 
          text="Login With Outlook"
          onPress={onLoginOutlook} 
          bgColor="#00a2ed"
          fgColor="#ffffff" 
        />
        <CustomButton 
          text="Don't have accout? SignUp here"
          onPress={onSignUpPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>  
  );
}

const styles = StyleSheet.create({
  root:{
    alignItems: 'center',
    padding: 20,
  },
  logo:{
    width:'70%',
    maxWidth: 400,
    maxHeight: 200,
  },
});

export default LoginScreen;