import generateUniqueId from '../../utils/generateUniqueId';
import { addTodo } from './duck';

export function createTodo(value) {
	return async (dispatch, getState) => {
		const todo = {
			id: generateUniqueId(),
			text: value,
		};
		dispatch(addTodo(todo));
	};
}
