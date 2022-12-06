import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MatchDay from "./MatchDay";
import Groups from "./Groups";
import { Ionicons } from '@expo/vector-icons';

export default function Tab({navigation})
{
    const Tab = createMaterialBottomTabNavigator();
    return(
        <Tab.Navigator
            activeColor="#FFC800"
            barStyle={{ backgroundColor: '#4D8B31'}}
            inactiveColor="#ecebf3"
            initialRouteName='Partidas'
        >
            <Tab.Screen
                name="Partidas"
                component={MatchDay}
                options={{
                    tabBarIcon: ({ color , focused}) => (

                        <Ionicons name="football" size={24} color={focused? color: "#325223"} />
                    ),
                }}
            />
            <Tab.Screen
                name="Grupos"
                component={Groups}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name="people" size={24} color={focused? color: "#325223"} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}