import React, {useState,useContext} from "react";
import {View, Text, StyleSheet, Button} from "react-native";


const ContextHookScreen = () => {



  return(
    <View style={styles.container}>
      <Text style={styles.text}>Context Hook</Text>
        <Button 
        title='Update context'
        
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

export default ContextHookScreen;

