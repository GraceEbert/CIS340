import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.contanierButton}>
      <Button
        onPress={() => {
          alert('You tapped a button 1');
        }}
        title='Press Button 1'
      />
      </View>

      <View style={styles.contanierLayoutButton}>

      <Button
        onPress={() => {
          alert('You tapped a button 2');
        }}
        title='Press Button 2'
      />

      <Button
        onPress={() => {
          alert('You tapped button Great!');
        }}
        title='Great!'
        color='green'
      />  

      </View>

      <View style={styles.containerButton}>

      <Button
        onPress={() => {
          alert('You tapped button Tap Me!');
        }}
        title='Great!'
      />  

      </View>

    </View>
  );
      }
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    jistifyContent: 'center',
  },

containerButton: {
  margin: 20,
},

contanierLayoutButton: {
  margin: 20, 
  felxDirection: 'row', 
  justifyContent: 'space-between',
}

});
