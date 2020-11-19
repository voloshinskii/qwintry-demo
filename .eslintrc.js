module.exports = {
	root: true,
	extends: [
		'airbnb',
		'prettier',
		'@react-native-community',
		'plugin:prettier/recommended',
	],
	plugins: ['prettier'],
	rules: {
		'prettier/prettier': ['error'],
		'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx']}],
		'react/jsx-indent': [1, 'tab', {checkAttributes: true}],
		'react/jsx-indent-props': [1, 'tab'],
		'react/prop-types': [0],
		'import/prefer-default-export': [0],
		'react-hooks/exhaustive-deps': [0],
		'react/jsx-props-no-spreading': [0],
		'object-curly-spacing': ['error', 'always'],
	},
};
