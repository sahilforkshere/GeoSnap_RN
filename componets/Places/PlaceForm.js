import { use, useCallback, useState } from "react";
import { ScrollView, Text, TextInput, View, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";
import ImagePicker from "./ImagePicker";
import ImagePickerComponent from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import OutlinedButton from "../ui/OutlinedButton";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../ui/Button";

function PlaceForm({onPressMap}) {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [selectImage,setSelectedImage]=useState();
    const [pickedLocation,setPickedLocation]=useState()

    function changeTitleHandler(enteredText) {
        setEnteredTitle(enteredText);
    }

    function takeImageHandler(imageUri){
  setSelectedImage(imageUri)
    }

   const  pickLocationHandler=useCallback((location   )=>{
        setPickedLocation(location)

    },[]);

    function savePlaceHandler(){
     console.log(enteredTitle);
     console.log(selectImage);
     console.log(pickedLocation);
     
     
     
    }

    return  <SafeAreaView  contentContainerStyle={styles.form}>
    
    <ScrollView >

        <View>
            <Text style={styles.label}>
                Title
            </Text>

            <TextInput style={styles.input} onChangeText={changeTitleHandler} value={enteredTitle} />
        </View>
        <ImagePickerComponent onImageTaken={takeImageHandler}/>
        <LocationPicker onLocationPick={pickLocationHandler}/>
        <Button onPress={savePlaceHandler}>Add Place</Button>
    </ScrollView>
    </SafeAreaView>

}

export default PlaceForm;


const styles = StyleSheet.create({
    form: {
        flex: 1,
        padding: 24
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 4,
        color: Colors.primary500
    },
    input: {
        marginVertical: 8,
        paddingHorizontal: 8,
        paddingVertical: 8,
        fontSize: 16,
        borderBottomColor: Colors.primary500,
        backgroundColor: Colors.primary100
    }
})