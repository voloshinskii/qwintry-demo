import React, { useEffect, useState } from 'react';
import Orientation from 'react-native-orientation';

function useOrientation() {
	const [orientation, setOrientation] = useState('PORTRAIT');

	useEffect(() => {
		setOrientation(Orientation.getInitialOrientation());
		let orientationListener = Orientation.addOrientationListener((or) => {
			setOrientation(or);
		});
		return () => {
			if (orientationListener) {
				orientationListener.remove();
				orientationListener = null;
			}
		};
	}, []);

	return orientation;
}

export default useOrientation;
