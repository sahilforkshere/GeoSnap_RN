import { StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import PlacesList from "../componets/Places/PlacesList"
import { Colors } from "../constants/colors"
import { View } from "react-native"
import { useEffect, useState } from "react"
import { useIsFocused } from "@react-navigation/native"

function AllPlaces({ route }) {
  const [loadedPlaces, setLoadedPlaces] = useState([]);
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused && route.params) {
      setLoadedPlaces(curPlaces => [...curPlaces, route.params.place])
    }
  }, [isFocused, route])
  return <SafeAreaView
    style={styles.root}>
    <PlacesList  places={loadedPlaces}/>
  </SafeAreaView>

}

export default AllPlaces
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.gray700,
    paddingTop: 10,
  },
});
