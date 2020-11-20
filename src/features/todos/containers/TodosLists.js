import React from 'react';
import { View, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';
import { TitleWithCounter } from '../../../components/Title';
import {
	getNotUrgentTodos,
	getUrgentTodos,
} from '../../../redux/todos/selectors';
import AddTodo from './AddTodo';
import TodoList from '../components/TodoList';

function TodosLists() {
	const todos = useSelector(getNotUrgentTodos);
	const urgentTodos = useSelector(getUrgentTodos);
	const windowWidth = Dimensions.get('window').width;
	console.log(windowWidth);

	return (
		<>
			<View style={{ marginBottom: 30 }}>
				<TitleWithCounter
					countColor={urgentTodos.length >= 3 ? 'red' : 'black'}
					count={urgentTodos.length}
				>
					Срочные задачи
				</TitleWithCounter>
				<TodoList todos={urgentTodos} />
			</View>
			<View style={{ marginBottom: 30 }}>
				<TitleWithCounter count={todos.length}>Задачи</TitleWithCounter>
				<TodoList todos={todos} />
			</View>
			<AddTodo />
		</>
	);
}

export default TodosLists;
