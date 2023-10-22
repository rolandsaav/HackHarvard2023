import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import Create from '../pages/Create';
import Profile from '../pages/Profile'
import List from '../pages/List'
import { FontAwesome } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

const MainContainer = () => {
    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <FontAwesome
                            name="home"
                            size={25}
                            color="black"
                        />
                    )
                }}
            />
            <Tab.Screen
                name="New"
                component={Create}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <FontAwesome
                            name="plus-circle"
                            size={25}
                            color="black"
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Events"
                component={List}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <FontAwesome
                            name="list-alt"
                            size={25}
                            color="black"
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <FontAwesome
                            name="user"
                            size={25}
                            color="black"
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default MainContainer