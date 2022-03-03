import React, {useState,useEffect} from "react";
import {View, Text, StyleSheet, Button} from "react-native";

const EffectHookScreen = () => {

  const [count,setCount] = useState(1);
  const [data, setData] = useState('Initial Data');
  useEffect(()=>{
    console.log("test Effect hook",count);
    if(count===5)
    {
      setData("Updated data");
    }
  })


  return(
    <View style={styles.container}>
      <Text style={styles.text}>Effect Hook</Text>
      <Text style={styles.text,{fontSize:70}}> {count} </Text>
      <Text style={styles.text,{fontSize:30}}> {data} </Text>
        <Button 
        title='Update Effect'
        onPress={()=>{setCount(count+1)}} 
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

export default EffectHookScreen;


//The useEffect Hook allows you to perform side effects in your components.
//useEffect accepts two arguments. The second argument is optional.
//useEffect(<function>, <dependency>)
//useEffect runs on every render. That means that when the count changes,
//a render happens, which then triggers another effect.
