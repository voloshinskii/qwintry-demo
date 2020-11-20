import React from 'react';
import { useDispatch } from 'react-redux';
import { SwipeListView } from 'react-native-swipe-list-view';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Checkbox from '../../../components/Checkbox';
import { updateTodo } from '../../../redux/todos/duck';

function TodoList({ todos }) {
	const dispatch = useDispatch();
	const todosWithKeys = todos.map((todo) => ({ key: todo.id, ...todo }));

	return (
		<SwipeListView
			data={todosWithKeys}
			renderItem={({ item: todo }, rowMap) => (
				<Checkbox
					onPress={() =>
						dispatch(updateTodo(todo.id, { checked: !todo.checked }))
					}
					checked={todo.checked}
					text={todo.text}
					key={todo.id}
				/>
			)}
			renderHiddenItem={({ item: todo }, rowMap) => (
				<View style={styles.rowBack}>
					<TouchableOpacity
						onPress={() =>
							dispatch(updateTodo(todo.id, { urgent: !todo.urgent }))
						}
						style={[styles.backRightBtn, styles.backRightBtnLeft]}
					>
						<Text style={styles.backTextWhite}>
							{todo.urgent ? 'Не важная' : 'Важная'}
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() =>
							dispatch(updateTodo(todo.id, { deleted: !todo.deleted }))
						}
						style={[styles.backRightBtn, styles.backRightBtnRight]}
					>
						<Text style={styles.backTextWhite}>Удалить</Text>
					</TouchableOpacity>
				</View>
			)}
			disableRightSwipe
			rightOpenValue={-150}
		/>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		flex: 1,
	},
	backTextWhite: {
		color: '#FFF',
	},
	rowBack: {
		alignItems: 'center',
		backgroundColor: 'white',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: 15,
	},
	backRightBtn: {
		alignItems: 'center',
		bottom: 0,
		justifyContent: 'center',
		position: 'absolute',
		top: 0,
		width: 75,
	},
	backRightBtnLeft: {
		backgroundColor: 'blue',
		right: 75,
	},
	backRightBtnRight: {
		backgroundColor: 'red',
		right: 0,
	},
});

export default TodoList;
