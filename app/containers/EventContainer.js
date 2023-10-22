import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EventInList from '../components/EventInList';
import Details from '../pages/Details';
import List from '../pages/List';

const Stack = createNativeStackNavigator();

const EventContainer = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Active" component={List} />
        <Stack.Screen name="Details" component={Details} options={{headerShown: true}} />
    </Stack.Navigator>
  )
}

export default EventContainer
