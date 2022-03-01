import React from 'react';
import {View, Text, StyleSheet,Pressable, useWindowDimensions, TextInput} from 'react-native';



const CustomButton = ({onPress,text,type = "PRIMARY", bgColor, fgColor}) => {
  return(
    <Pressable 
      onPress={onPress} 
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? {backgroundColor:bgColor}:{},
      ]}
    >
      <Text 
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? {color: fgColor}:{},
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    
    width: 250,
    padding:5,
    marginVertical: 7,
    alignItems: 'center',
    borderRadius:20,
  },
  container_PRIMARY:{
    backgroundColor:'blue',
  },
  container_TERTIARY:{

  },

  text:{
    fontWeight:'bold',
    color: 'white',
  },
  text_TERTIARY:{
    color:'grey',
  },

});

export default CustomButton;