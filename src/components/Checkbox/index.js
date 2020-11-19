import React, { useState, useEffect } from 'react';
import {
	Animated,
	Text,
	StyleSheet,
	View,
	TouchableOpacity,
} from 'react-native';

function Checkbox({
	text,
	children,
	checked,
	onPress = () => null,
	containerStyle = {},
	textStyle = {},
}) {
	const [animation] = useState(new Animated.Value(checked ? 1 : 0));
	const circleColor = animation.interpolate({
		inputRange: [0, 1],
		outputRange: ['rgb(255,255,255)', 'rgb(224,82,99)'],
	});
	const textOpacity = animation.interpolate({
		inputRange: [0, 1],
		outputRange: [1, 0.45],
	});

	useEffect(() => {
		Animated.timing(animation, {
			toValue: checked ? 1 : 0,
			duration: 300,
			useNativeDriver: false,
		}).start();
	}, [checked]);

	return (
		<View style={[styles.container, containerStyle]}>
			<TouchableOpacity activeOpacity={0.7} onPress={onPress}>
				<Animated.View
					style={[
						styles.circle,
						{
							borderColor: 'rgb(224,82,99)',
							backgroundColor: circleColor,
						},
					]}
				/>
			</TouchableOpacity>
			<Animated.View style={{ opacity: textOpacity }}>
				<Text style={[styles.text, textStyle]}>{text || children}</Text>
			</Animated.View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	circle: {
		width: 28,
		height: 28,
		borderRadius: 1000,
		borderWidth: 2,
		borderColor: 'black',
		marginRight: 12,
	},
	text: {
		fontSize: 18,
		color: 'black',
		fontWeight: '500',
		marginRight: 12,
	},
});

export default Checkbox;
