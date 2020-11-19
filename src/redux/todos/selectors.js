export const getTodos = (state) =>
	Object.values(state.todos).filter((task) => !task.deleted);
export const getUrgentTodos = (state) =>
	getTodos(state).filter((task) => task.urgent);
