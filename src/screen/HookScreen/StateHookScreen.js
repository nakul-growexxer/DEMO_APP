import React, {useState} from "react";
import {View, Text, StyleSheet, Button} from "react-native";

const StateHookScreen = () => {

  const [name,setName] = useState('');

  const clickHandler = ()=>{
    setName('Growexxer');
  }

  return(
    <View style={styles.container}>
      <Text style={styles.text}>State Hook</Text>
      <Text style={styles.text}>Hi there {name} </Text>
        <Button 
        title='Update State' 
        onPress={clickHandler}
      />
  </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#A3a3a3',
    alignItems: 'center',
    justifyContent: "center",
  },
  text:{
    color:'#0000FF',
  },
});

export default StateHookScreen;

// useState accepts an initial state and returns two values:
//     The current state.
//     A function that updates the state.
// The useState Hook can be used to keep track of strings, numbers, booleans, 
// arrays, objects, and any combination of these!