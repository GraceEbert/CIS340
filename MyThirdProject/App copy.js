import React from 'react';
import { Text, View } from 'react-native';

function Student(props) {
  return (
    <View>
      <Text>Hey, My name is {props.name}, I am a student in CIS340!</Text>
    </View>
  );
}

export default function MultiComp(){
  return(
    <View style={{
      flex: 1,
      justifyComponet: "center",
      alignment: "center"
    }}> 
      <Text> Welcome to CIS340</Text>
      <Student name = "Grace Ebert"/>
      <Student name = "Rob Laffan"/>
      <Student name = "Hayden Smith"/>
      <Student name = "Ben Ebert"/>
      <Student/>
      </View>


  );
}