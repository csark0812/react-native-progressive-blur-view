// Mock React Native components
jest.mock("react-native", () => ({
	View: "View",
	Text: "Text",
	StyleSheet: {
		create: (styles) => styles,
		absoluteFillObject: {},
	},
}));

// Mock the blur libraries
jest.mock("@react-native-community/blur", () => ({
	BlurView: "BlurView",
}));

jest.mock("@react-native-masked-view/masked-view", () => ({
	default: "MaskedView",
}));

jest.mock("react-native-linear-gradient", () => ({
	default: "LinearGradient",
}));
