import { FlatList } from "react-native"

function PlacesList({places}) {
  return <FlatList data={places} keyExtractor={(i)=>i.id}  />
}

export default PlacesList
