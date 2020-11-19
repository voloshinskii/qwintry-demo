import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import { persistor, store } from './redux';

const App = () => {
	return (
		<>
			<Provider store={store}>
				<StatusBar barStyle="dark-content" />
				<SafeAreaView>
					<PersistGate persistor={persistor}></PersistGate>
				</SafeAreaView>
			</Provider>
		</>
	);
};

export default App;
