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
        title='Go to Counter'
        onPress={() => navigation.navigate('Counter')}
      />
      <Text></Text>
    </View>
  );
};

const style = StyleSheet.create({});

export default HomeScreen;