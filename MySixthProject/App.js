import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {

  const csuLogo = {
    uri: 'https://raw.githubusercontent.com/AbdunabiRamadam/CIS340/master/images/rams.png',
  };

  return (
    <View style={styles.container}>

    <ImageBackground source={CSULogo} style={styles.image}>

      <Text style={styles.text}> CSU Logo</Text>

    </ImageBackground>
    
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: "column", 
  },

  limage: {
   flex: 1, 
   reSizeMode: "cover", 
   justifyContent: "center"
  },

  text: {
    color: 'red', 
    fontSize: 40, 
    frontWeight: 'bold',
  }

}
);


