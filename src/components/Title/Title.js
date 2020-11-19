import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Title = ({ text, children, style = {} }) => (
	<Text style={[styles.title, style]}>{text || children}</Text>
);

const styles = StyleSheet.create({
	title: {
		fontSize: 26,
		color: 'black',
		fontWeight: 'bold',
		marginBottom: 18,
	},
});

export default Title;
