import { createMigrate, persistReducer, persistStore } from 'redux-persist';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import { todosReducer } from './todos/duck';

const migrations = {};

const persistConfig = {
	key: 'appstorage',
	storage: AsyncStorage,
	timeout: 10000,
	version: 1,
	migrate: createMigrate(migrations, { debug: false }),
};

const appReducer = combineReducers({
	todos: todosReducer,
});

const rootReducer = (state, action) => {
	const nextState =
		action.type === 'REPLACE_STATE' ? { ...state, ...action.fakeState } : state;
	return appReducer(nextState, action);
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
	persistedReducer,
	applyMiddleware(thunkMiddleware),
);

export const persistor = persistStore(store);
