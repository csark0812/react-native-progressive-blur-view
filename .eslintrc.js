module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint"],
	extends: ["eslint:recommended", "@typescript-eslint/recommended"],
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
	},
	env: {
		"react-native/react-native": true,
	},
	rules: {
		"@typescript-eslint/no-unused-vars": "error",
		"@typescript-eslint/explicit-function-return-type": "off",
	},
	ignorePatterns: ["lib/", "node_modules/", "example/"],
};
