import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Title from './Title';

const TitleWithCounter = ({
	text,
	children,
	countColor = 'black',
	count = 0,
	titleStyle = {},
}) => (
	<View style={[styles.container]}>
		<Title style={[titleStyle, { marginBottom: 0, marginRight: 6 }]}>{text || children}</Title>
		<Text style={[styles.counter, { color: countColor }]}>({count})</Text>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 18,
	},
	counter: {
		fontSize: 16,
	}
});

export default TitleWithCounter;
