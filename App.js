import Tab from "./src/pages/Tab";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
              name="Copa do Mundo 2022"
              component={Tab}
              options={{
                title: 'Copa do Mundo 2022',
                headerTitleAlign: 'center',
                headerStyle: {backgroundColor: '#FFC800'},
                headerTintColor: '#4D8B31',
                headerTitleStyle: {fontWeight: 'bold', alignSelf:'center', fontSize: 18},
          }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
