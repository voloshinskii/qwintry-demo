export const getTodos = (state) =>
	Object.values(state.todos).filter((task) => !task.deleted);

export const getNotUrgentTodos = (state) =>
	getTodos(state).filter((task) => !task.urgent);

export const getUrgentTodos = (state) =>
	getTodos(state).filter((task) => task.urgent);
