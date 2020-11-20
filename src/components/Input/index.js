import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = ({
	placeholder,
	value,
	onChangeText = () => null,
	style = {},
	...restProps
}) => (
	<TextInput
		value={value}
		onChangeText={onChangeText}
		placeholder={placeholder}
		placeholderTextColor="grey"
		style={[styles.input, style]}
		{...restProps}
	/>
);

const styles = StyleSheet.create({
	input: {
		fontSize: 20,
		color: 'black',
	},
});

export default Input;
