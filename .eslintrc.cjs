module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'airbnb/hooks',
		'airbnb-typescript',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:prettier/recommended',
		'plugin:import/recommended',
		'eslint-config-prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
		tsconfigRootDir: '.',
		project: ['./tsconfig.json'],
	},
	plugins: ['react', '@typescript-eslint'],
	settings: {
		'import/resolver': {
			node: {
				paths: ['src'],
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
			typescript: {
				project: './tsconfig.json',
			},
		},
		react: {
			version: '18.x',
		},
	},
	rules: {
		'linebreak-style': 'off',
		'no-unused-vars': [
			'error',
			{
				vars: 'all',
				args: 'after-used',
				ignoreRestSiblings: true,
				argsIgnorePattern: '^_',
			},
		],
		'react/react-in-jsx-scope': 'off',
		'react/require-default-props': 'off',
		'react/function-component-definition': [
			2,
			{
				namedComponents: 'arrow-function',
				unnamedComponents: ['function-expression', 'arrow-function'],
			},
		],
		// Configure prettier
		'prettier/prettier': [
			'error',
			{
				printWidth: 120,
				endOfLine: 'lf',
				singleQuote: true,
				tabWidth: 2,
				indentStyle: 'space',
				useTabs: true,
				trailingComma: 'all',
				bracketSpacing: true,
			},
		],
		// Disallow the `any` type.
		'@typescript-eslint/no-explicit-any': 'warn',
		'@typescript-eslint/ban-types': [
			'error',
			{
				extendDefaults: true,
				types: {
					'{}': false,
				},
			},
		],
		'react-hooks/exhaustive-deps': 'off',
		// Enforce the use of the shorthand syntax.
		'object-shorthand': 'error',
		'no-console': 'warn',
	},
};
