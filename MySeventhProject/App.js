import React, {component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class TouchableButton extends Component {
  
  _onPressButton() {
    alert('You tapped a button')
  }

  render() {
  return (
    <View style={styles.container}>

      <View style={styles.contanierButton}>
      <Button
        onPress={this._onPressButton} 
        title='Press Button 1'
      />
      </View>

      <View style={styles.contanierLayoutButton}>

      <Button
        onPress={this._onPressButton}
        title='Press Button 2'
      />

      <Button
       onPress={this._onPressButton}
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
