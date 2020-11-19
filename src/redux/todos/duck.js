import Immutable from 'seamless-immutable';

export const ADD_TODO = 'todos/ADD_TODO';
export const UPDATE_TODO = 'todos/UPDATE_TODO';

export function addTodo({ id, ...todo }) {
	return { type: ADD_TODO, id, todo };
}

const initialState = Immutable({});

export function todosReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_TODO:
			return Immutable.setIn(state, [action.id], action.todo);
		case UPDATE_TODO:
			return Immutable.setIn(state, [action.id], action.todo);
		default:
			return state;
	}
}
