import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllPlaces from './screens/AllPlaces';
import AddPlace from './screens/AddPlace';
import IconButton from './componets/ui/IconButton';
import { Colors } from './constants/colors';
import { Ionicons } from "@expo/vector-icons";
import Map from './screens/Map';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: 'tomato' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: Colors.gray700 },
          }}
        >
          <Stack.Screen
            name="AllPlaces"
            component={AllPlaces}
            options={({ navigation }) => ({
              title: 'Your Favourite Places',
              headerRight: ({ tintColor }) => {
                console.log("Header right rendered with tintColor:", tintColor); 
                return (
                  <IconButton
                    icon="add"
                    size={24}
                    color={tintColor ?? 'blue'}
                    onPress={() => navigation.navigate('AddPlace')}
                  />
                );
              },
            })}
          />


          <Stack.Screen name='AddPlace' component={AddPlace} options={{
            title: 'Add a new Place'
          }} />

          <Stack.Screen name='Map' component={Map} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}