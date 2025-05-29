const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");
const path = require("node:path");

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
	watchFolders: [path.resolve(__dirname, "..")],
	resolver: {
		// Ensures only one version of react and react-native are used
		extraNodeModules: {
			react: path.resolve(__dirname, "node_modules/react"),
			"react-native": path.resolve(__dirname, "node_modules/react-native"),
			"@react-native-community/blur": path.resolve(
				__dirname,
				"node_modules/@react-native-community/blur",
			),
			"@react-native-masked-view/masked-view": path.resolve(
				__dirname,
				"node_modules/@react-native-masked-view/masked-view",
			),
			"react-native-linear-gradient": path.resolve(
				__dirname,
				"node_modules/react-native-linear-gradient",
			),
			"react-native-progressive-blur-view": path.resolve(__dirname, ".."),
		},
		// Only resolve from example's node_modules to avoid conflicts
		nodeModulesPaths: [path.resolve(__dirname, "node_modules")],
		// Block parent node_modules to prevent React conflicts
		blockList: [
			new RegExp(path.resolve(__dirname, "../node_modules/react/.*")),
			new RegExp(path.resolve(__dirname, "../node_modules/react-native/.*")),
		],
	},
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
