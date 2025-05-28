/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import type React from "react";
import type { PropsWithChildren } from "react";
import {
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	useColorScheme,
	View,
	Dimensions,
} from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";

import { ProgressiveBlurView } from "react-native-progressive-blur-view";

type SectionProps = PropsWithChildren<{
	title: string;
}>;

function Section({ children, title }: SectionProps): React.JSX.Element {
	const isDarkMode = useColorScheme() === "dark";
	return (
		<View style={styles.sectionContainer}>
			<Text
				style={[
					styles.sectionTitle,
					{
						color: isDarkMode ? Colors.white : Colors.black,
					},
				]}
			>
				{title}
			</Text>
			<Text
				style={[
					styles.sectionDescription,
					{
						color: isDarkMode ? Colors.light : Colors.dark,
					},
				]}
			>
				{children}
			</Text>
		</View>
	);
}

function ExampleCard({
	children,
}: { children: React.ReactNode }): React.JSX.Element {
	const isDarkMode = useColorScheme() === "dark";
	return (
		<View
			style={[
				styles.exampleCard,
				{
					backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
				},
			]}
		>
			{children}
		</View>
	);
}

function App(): React.JSX.Element {
	const isDarkMode = useColorScheme() === "dark";
	const { width } = Dimensions.get("window");

	const backgroundStyle = {
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	};

	return (
		<View style={[styles.container, backgroundStyle]}>
			<StatusBar
				barStyle={isDarkMode ? "light-content" : "dark-content"}
				backgroundColor={backgroundStyle.backgroundColor}
			/>
			<ScrollView
				style={backgroundStyle}
				contentInsetAdjustmentBehavior="automatic"
			>
				<View style={styles.header}>
					<Text
						style={[
							styles.headerTitle,
							{ color: isDarkMode ? Colors.white : Colors.black },
						]}
					>
						ProgressiveBlurView
					</Text>
					<Text
						style={[
							styles.headerSubtitle,
							{ color: isDarkMode ? Colors.light : Colors.dark },
						]}
					>
						Examples & Usage
					</Text>
				</View>

				<View style={styles.content}>
					<Section title="Basic Vertical Blur">
						Vertical progressive blur with default settings
					</Section>
					<ExampleCard>
						<View style={styles.imageContainer}>
							<View
								style={[
									styles.placeholderImage,
									{ backgroundColor: "#4A90E2" },
								]}
							>
								<Text style={styles.placeholderText}>Sample Content</Text>
							</View>
							<ProgressiveBlurView
								style={styles.blurOverlay}
								blurType="light"
								blurAmount={10}
								gradientDirection="vertical"
							/>
						</View>
					</ExampleCard>

					<Section title="Horizontal Blur">
						Horizontal progressive blur from left to right
					</Section>
					<ExampleCard>
						<View style={styles.imageContainer}>
							<View
								style={[
									styles.placeholderImage,
									{ backgroundColor: "#50C878" },
								]}
							>
								<Text style={styles.placeholderText}>Horizontal Blur</Text>
							</View>
							<ProgressiveBlurView
								style={styles.blurOverlay}
								blurType="light"
								blurAmount={15}
								gradientDirection="horizontal"
							/>
						</View>
					</ExampleCard>

					<Section title="Dark Blur Type">
						Using dark blur type with higher blur amount
					</Section>
					<ExampleCard>
						<View style={styles.imageContainer}>
							<View
								style={[
									styles.placeholderImage,
									{ backgroundColor: "#FFB347" },
								]}
							>
								<Text style={styles.placeholderText}>Dark Blur</Text>
							</View>
							<ProgressiveBlurView
								style={styles.blurOverlay}
								blurType="dark"
								blurAmount={20}
								gradientDirection="vertical"
							/>
						</View>
					</ExampleCard>

					<Section title="Extra Light Blur">
						Using xlight blur type with subtle effect
					</Section>
					<ExampleCard>
						<View style={styles.imageContainer}>
							<View
								style={[
									styles.placeholderImage,
									{ backgroundColor: "#FF6B9D" },
								]}
							>
								<Text style={styles.placeholderText}>Extra Light</Text>
							</View>
							<ProgressiveBlurView
								style={styles.blurOverlay}
								blurType="xlight"
								blurAmount={8}
								gradientDirection="vertical"
							/>
						</View>
					</ExampleCard>

					<Section title="With Text Overlay">
						Progressive blur with text content overlay
					</Section>
					<ExampleCard>
						<View style={styles.imageContainer}>
							<View
								style={[
									styles.placeholderImage,
									{ backgroundColor: "#9B59B6" },
								]}
							>
								<Text style={styles.placeholderText}>Background Image</Text>
							</View>
							<ProgressiveBlurView
								style={styles.blurOverlay}
								blurType="light"
								blurAmount={12}
								gradientDirection="vertical"
							>
								<View style={styles.textOverlay}>
									<Text style={styles.overlayTitle}>Overlay Content</Text>
									<Text style={styles.overlayDescription}>
										This text appears over the progressive blur effect
									</Text>
								</View>
							</ProgressiveBlurView>
						</View>
					</ExampleCard>
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	header: {
		paddingTop: 60,
		paddingBottom: 20,
		paddingHorizontal: 20,
		alignItems: "center",
	},
	headerTitle: {
		fontSize: 28,
		fontWeight: "700",
		marginBottom: 8,
	},
	headerSubtitle: {
		fontSize: 16,
		fontWeight: "400",
		opacity: 0.7,
	},
	content: {
		paddingHorizontal: 20,
		paddingBottom: 40,
	},
	sectionContainer: {
		marginTop: 32,
		marginBottom: 16,
	},
	sectionTitle: {
		fontSize: 20,
		fontWeight: "600",
		marginBottom: 8,
	},
	sectionDescription: {
		fontSize: 14,
		fontWeight: "400",
		opacity: 0.8,
	},
	exampleCard: {
		borderRadius: 12,
		marginBottom: 24,
		overflow: "hidden",
	},
	imageContainer: {
		height: 200,
		position: "relative",
	},
	placeholderImage: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	placeholderText: {
		color: "white",
		fontSize: 18,
		fontWeight: "600",
		textShadowColor: "rgba(0, 0, 0, 0.3)",
		textShadowOffset: { width: 1, height: 1 },
		textShadowRadius: 2,
	},
	blurOverlay: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
	},
	textOverlay: {
		position: "absolute",
		bottom: 20,
		left: 20,
		right: 20,
	},
	overlayTitle: {
		color: "white",
		fontSize: 20,
		fontWeight: "700",
		marginBottom: 4,
		textShadowColor: "rgba(0, 0, 0, 0.5)",
		textShadowOffset: { width: 1, height: 1 },
		textShadowRadius: 3,
	},
	overlayDescription: {
		color: "white",
		fontSize: 14,
		fontWeight: "400",
		opacity: 0.9,
		textShadowColor: "rgba(0, 0, 0, 0.5)",
		textShadowOffset: { width: 1, height: 1 },
		textShadowRadius: 3,
	},
	highlight: {
		fontWeight: "700",
	},
});

export default App;
