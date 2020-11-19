import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import { persistor, store } from './redux';
import AppWithNavigation from './navigation';

const App = () => {
	return (
		<>
			<Provider store={store}>
				<StatusBar barStyle="dark-content" />
				<PersistGate persistor={persistor}>
					<AppWithNavigation />
				</PersistGate>
			</Provider>
		</>
	);
};

export default App;
