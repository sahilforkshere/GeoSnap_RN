import { StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import PlacesList from "../componets/Places/PlacesList"
import { Colors } from "../constants/colors"
import { View } from "react-native"

function AllPlaces() {
    return  <View
     style={styles.root}>
    <PlacesList/>
  </View>

}

export default AllPlaces
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.gray700,
    paddingTop: 10, // temp to check header visibility
  },
});
