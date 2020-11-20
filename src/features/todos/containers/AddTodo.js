import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import Input from '../../../components/Input';
import { createTodo } from '../../../redux/todos/thunks';

function AddTodo() {
	const [value, setValue] = useState();
	const dispatch = useDispatch();

	function onSend() {
		if (!value) return;
		setValue();
		dispatch(createTodo(value));
	}

	return (
		<View>
			<Input
				onSubmitEditing={onSend}
				returnKeyType="done"
				value={value}
				onChangeText={setValue}
				placeholder="Добавить задачу..."
			/>
		</View>
	);
}

export default AddTodo;
