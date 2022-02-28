import React,{useState} from 'react';
import { View,Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
  // let flag = 0;
  const [flag, setFlag] = useState(0);
  return(
    <View>
      <Button title='add' onPress={() => {
        //flag++;
        setFlag(flag + 1);
        console.log(flag);
        }}
      />
      <Button title='subtract' onPress={() => {
        //flag--;
        setFlag(flag - 1);
        console.log(flag);
        }}
      />
      <Text>
        Current Count : {flag} 
      </Text>
    </View>
  );
};

const style = StyleSheet.create({});

export default CounterScreen;