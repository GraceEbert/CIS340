import React from 'react';
import { Text, Image, View } from 'react-native';

export default function MyDogApp() {
      
  let pic = {
    uri: "https://raw.githubusercontent.com/AbdunabiRamadan/CIS340/master/images/dog2.png"};
  return (
    <View style={{
      flex: 1,
      justifyComponet: "center",
      alignment: "center"
    }}> 
      <Image source={pic}

        style={{wideth: 200, height: 200}}
        />
       <Text> Hello, this is my dog</Text> 
    </View>
  );
}
