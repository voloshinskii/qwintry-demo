import React, { useState } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { TitleWithCounter } from '../../components/Title';
import Checkbox from '../../components/Checkbox';
import { getTodos, getUrgentTodos } from '../../redux/todos/selectors';

function TodoList({ todos }) {
	return todos.map((todo) => (
		<Checkbox checked={todo.checked} text={todo.text} key={todo.id} />
	));
}

function TodosLists() {
	const todos = useSelector(getTodos);
	const urgentTodos = useSelector(getUrgentTodos);

	return (
		<>
			<View style={{ marginBottom: 30 }}>
				<TitleWithCounter>Срочные задачи</TitleWithCounter>
				<TodoList todos={todos} />
			</View>
			<View>
				<TitleWithCounter>Задачи</TitleWithCounter>
				<TodoList todos={urgentTodos} />
			</View>
		</>
	);
}

export default TodosLists;
