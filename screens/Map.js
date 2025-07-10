import React, { useCallback, useLayoutEffect, useState } from 'react'
import { Alert, StyleSheet } from 'react-native'
import MapView from 'react-native-maps'
import { Marker } from 'react-native-maps'
import IconButton from '../componets/ui/IconButton';

function Map({ navigation }) {
  const [selectedLocation, setSelectedLocation] = useState();


  const region = {
    latitude: 25.4599721,
    longitude: 78.5531273,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  }

  function selectLocationHandler(event) {
    const lat = event.nativeEvent.coordinate.latitude
    const lng = event.nativeEvent.coordinate.longitude

    setSelectedLocation({ lat: lat, lng: lng })
  }

  const savePickedLocation = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert(
        'No location picked',
        'You have to pick a location first '
      );
      return;
    }
    navigation.navigate('AddPlace', {
      pickedLat: selectLocationHandler.lat,
      pickedLng: selectedLocation.lng
    });
  }, [navigation, selectedLocation])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({ tintColor }) => <IconButton icon="save" size={24} color={tintColor} onPress={savePickedLocation} />
    })
  }, [navigation, savePickedLocation]);

  return (
    <MapView style={styles.map} initialRegion={region} onPress={selectLocationHandler}>
      {selectedLocation && (
        <Marker
          title="Picked Location"
          coordinate={{
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng
          }}
        />
      )}

    </MapView>
  )
}

export default Map;


const styles = StyleSheet.create({
  map: {
    flex: 1
  }
})
