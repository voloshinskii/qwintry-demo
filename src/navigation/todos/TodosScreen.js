import React from 'react';
import { ScrollView, View, Text } from 'react-native';

function TodosScreen() {
	return (
		<ScrollView
			style={{
				flex: 1,
				backgroundColor: 'white',
			}}
			contentContainerStyle={{
				paddingTop: 60,
				paddingHorizontal: 20
			}}
		>
			<View>
				<Text style={{ color: 'black' }}>Home Screen</Text>
			</View>
		</ScrollView>
	);
}

export default TodosScreen;
