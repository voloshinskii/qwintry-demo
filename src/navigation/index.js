import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import TodosScreen from './todos/TodosScreen';

const Stack = createNativeStackNavigator();

function AppNavigation() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Todos">
				<Stack.Screen name="Todos" component={TodosScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default AppNavigation;
