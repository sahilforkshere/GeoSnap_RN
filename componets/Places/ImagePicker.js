import React, { useState, useEffect } from 'react';
import {
  View,
  Button,
  Alert,
  StyleSheet,
  Image,
  Text,
  Platform,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import OutlinedButton from '../ui/OutlinedButton';

function ImagePickerComponent({onImageTaken}) {
  const [pickedImage, setPickedImage] = useState(null);


  useEffect(() => {
    (async () => {
      const cameraPermission = await ImagePicker.requestCameraPermissionsAsync();
      const mediaLibraryPermission = await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (
        cameraPermission.status !== 'granted' ||
        mediaLibraryPermission.status !== 'granted'
      ) {
        Alert.alert(
          'Permissions Required',
          'Camera and media library access are needed to pick images.'
        );
      }
    })();
  }, []);


  async function pickFromCamera() {
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });

    if (!result.canceled) {
      setPickedImage(result.assets[0].uri);
      onImageTaken(result.assets[0].uri)
    }
    
  }


  async function pickFromGallery() {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });

    if (!result.canceled) {
      setPickedImage(result.assets[0].uri);
      onImageTaken(result.assets[0].uri)
    }
  }

  
  function handleImageSelection() {
    Alert.alert(
      'Select Image Source',
      'Choose where to pick the image from',
      [
        { text: 'Camera', onPress: pickFromCamera },
        { text: 'Gallery', onPress: pickFromGallery },
        { text: 'Cancel', style: 'cancel' },
      ]
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.imagePreview}>
        {pickedImage ? (
          <Image source={{ uri: pickedImage }} style={styles.image} />
        ) : (
          <Text>No image picked yet.</Text>
        )}
      </View>
      <OutlinedButton icon="camera" onPress={handleImageSelection} >Take  Iamge</OutlinedButton>
    </View>
  );
}

export default ImagePickerComponent;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 50,
  },
  imagePreview: {
    width: 300,
    height: 200,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
