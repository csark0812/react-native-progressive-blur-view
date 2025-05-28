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
		alias: {
			"react-native-progressive-blur-view": path.resolve(__dirname, "../src"),
		},
	},
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
