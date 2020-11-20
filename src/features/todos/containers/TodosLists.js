import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { TitleWithCounter } from '../../../components/Title';
import {
	getNotUrgentTodos,
	getUrgentTodos,
} from '../../../redux/todos/selectors';
import AddTodo from './AddTodo';
import TodoList from '../components/TodoList';
import useOrientation from '../../../hooks/useOrientation';

function TodosLists() {
	const todos = useSelector(getNotUrgentTodos);
	const urgentTodos = useSelector(getUrgentTodos);
	const windowWidth = Dimensions.get('window').width;
	const orientation = useOrientation();
	const shouldUsePortraitMode = orientation === 'PORTRAIT' && windowWidth < 850;

	const styles = shouldUsePortraitMode ? stylesPortrait : stylesLandscape;

	return (
		<View style={styles.container}>
			<View style={styles.urgentTasksList}>
				<TitleWithCounter
					countColor={urgentTodos.length >= 3 ? 'red' : 'black'}
					count={urgentTodos.length}
				>
					Срочные задачи
				</TitleWithCounter>
				<TodoList todos={urgentTodos} />
			</View>
			<View style={styles.tasksList}>
				<View style={{ marginBottom: 30 }}>
					<TitleWithCounter count={todos.length}>Задачи</TitleWithCounter>
					<TodoList todos={todos} />
				</View>
				<AddTodo />
			</View>
		</View>
	);
}

const stylesLandscape = StyleSheet.create({
	container: {
		flexDirection: 'row-reverse',
	},
	urgentTasksList: {
		marginRight: 40,
		flex: 1,
	},
	tasksList: {
		marginLeft: 40,
		marginRight: 40,
		flex: 1,
	},
});

const stylesPortrait = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		flex: 1,
	},
	urgentTasksList: {
		marginBottom: 30,
	},
	tasksList: {},
});

export default TodosLists;
