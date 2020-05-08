import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker'; //import image picker
import * as Sharing from 'expo-sharing'; //import image share

export default function App() {

  const[selectImage, setSelectImage ] = React.useState(null)

  let openImagePickerAsync = async () => {
    
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {

      alert('Permission is required');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync(); 

    if (pickerResult.cancelled === true) {
      return;
    }
    setSelectedImage  ({ localUri: pickerResult.uri});

  };

  //add the sharing image dialog

  let opernSharingDialogAsync = async () => {
      if ( !(await Sharing.isAvailableAsync ())){
        alert('Sharing is not avilable on my phone');
        return;
      }

      Sharing.shareAsync(selctedImage.localUri);
  };

  //display the selected image 

  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image source={{ uri: selectedImage.localUri}} style={styles.setImage}/>

        <TouchableOpacity onPress={opernSharingDialogAsync} style={styles.button}>
          <Text> Style={styles.buttonText}> Share My Photo </Text>
        </TouchableOpacity>
      </View>
    )
  }

   return (
    <View style={styles.container}>
      <Image source={{uri: 'https://raw.githubusercontent.com/AbdunabiRamadan/CIS340/master/images/logo.png'}}
          style={styles.logo} />
        
      <Text> styles={styles.insts}>
          Press on the button below to select an image on your phone!
          </Text>

      <TouchableOpacity style={styles.button} onPress={() => alert('Your have not selected an image yet')} >

        <Text style={styles.buttontext} > Pick Image </Text>

      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFE0',
  }, 

  button: {
    backgroundColor: "#778899",
    padding: 10,
    borderRadius: 5

  },

  insts: {
   fontSize: 18,
   color: "#87CEFA",
   marginHorizontal: 15,  
   marginBottom: 10 

  },
  
  logo: {
    width: 310, 
    height: 300, 
    marginBottom: 20

  }, 

  buttonText: {
    fontSize: 20, 
    color: "#fff"

  }
      
});
