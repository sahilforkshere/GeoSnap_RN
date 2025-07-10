import PlaceForm from "../componets/Places/PlaceForm"


const AddPlace = ({ navigation }) => {
  function createPlaceHandler(place) {
    navigation.push('AllPlaces', {
      place: place
    })

  }


  return <PlaceForm onCreatePlace={createPlaceHandler} />


}

export default AddPlace
