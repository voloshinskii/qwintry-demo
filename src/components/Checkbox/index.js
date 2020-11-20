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
			<Animated.View
				style={{
					flex: 1,
					paddingVertical: 3,
					borderBottomWidth: 0.5,
					borderBottomColor: 'grey',
					opacity: textOpacity,
				}}
			>
				<Text style={[styles.text, textStyle]}>{children || text}</Text>
			</Animated.View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		zIndex: 50,
		backgroundColor: 'white',
		width: '100%',
	},
	circle: {
		width: 24,
		height: 24,
		borderRadius: 1000,
		borderWidth: 2,
		borderColor: 'black',
		marginRight: 12,
	},
	text: {
		paddingVertical: 12,
		fontSize: 18,
		color: 'black',
		fontWeight: '500',
		marginRight: 12,
	},
});

export default Checkbox;
