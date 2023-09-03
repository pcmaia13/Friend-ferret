import React from 'react';
import {} from 'react-native';
import {createAppContainer} from "react-navigation" 
import {createStackNavigator} from "react-navigation-stack"
import Login from '../pages/Login';
import CreateUser from '../pages/CreateUser';
import HomeScreen from '../pages/Home';

const Stack = createStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>

            <Stack.Screen name='login' component={Login}
            options={{
                headerShown: false
            }} />

            <Stack.Screen name='home' component={HomeScreen}
            options={{
                headerShown: false
            }} />

            <Stack.Screen name='createuser' component={CreateUser}
            options={{
                
                title: '',
                headerTintColor: '#FFF',
                headerTransparent: true
            }} />
        </Stack.Navigator>
    );
}