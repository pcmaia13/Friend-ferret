import React, { useEffect, useState } from 'react';
import Routes from './src/routes/Routes';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 

const URL = "htpps://jsonplaceholder.typicode.com/users";
const requestData = () => fetch(URL).then(res => res.json());

const Stack = createNativeStackNavigator();


export default function App() {
	return (

		<NavigationContainer>
			<StatusBar style='light' />
			<Routes />
		</NavigationContainer>
	);

}