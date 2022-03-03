import React,{useState} from 'react';
import { View,Text, StyleSheet, Button } from 'react-native';
import ColorScreen from './ColorScreen';
import {NavigationContainer} from '@react-navigation/native';



const HomeScreen = ({navigation}) => {
  return(
    <View>
      <Button 
        title='Go to Color'
        onPress={() => navigation.navigate('Color')}
      />
      <Button 
        title='Go to Square'
        onPress={() => navigation.navigate('Square')}
      />
      <Button 
        title='Go to SquareBkup'
        onPress={() => navigation.navigate('SquareBkup')}
      />
      <Button 
        title='Go to Counter'
        onPress={() => navigation.navigate('Counter')}
      />
      <Button 
        title='Go to Login'
        onPress={() => navigation.navigate('Login')}
      />
      <Button 
        title='Go to State Hook'
        onPress={() => navigation.navigate('StateHook')}
      />
      <Button 
        title='Go to Effect Hook'
        onPress={() => navigation.navigate('EffectHook')}
      />
      <Button 
        title='Go to Context Hook'
        onPress={() => navigation.navigate('ContextHook')}
      />
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
});

export default HomeScreen;


