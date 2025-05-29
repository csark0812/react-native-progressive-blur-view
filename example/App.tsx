/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// biome-ignore lint/style/useImportType: <explanation>
import * as React from "react";
import type { PropsWithChildren } from "react";
import {
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	useColorScheme,
	View,
	Dimensions,
	Image,
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
							<Image
								source={require("./assets/beautiful-mountain-landscape-with-snow-capped-peaks-lake-reflection-vibrant-sunset-colors-high-re.jpg")}
								style={styles.backgroundImage}
								resizeMode="cover"
							/>
							<ProgressiveBlurView
								style={styles.blurOverlay}
								blurType="light"
								blurAmount={15}
							/>
						</View>
					</ExampleCard>

					<Section title="Horizontal Blur">
						Horizontal progressive blur using end coordinates
					</Section>
					<ExampleCard>
						<View style={styles.imageContainer}>
							<Image
								source={require("./assets/dense-forest-with-tall-trees-misty-atmosphere-sunbeams-through-leaves-natural-green-tones-serene.jpg")}
								style={styles.backgroundImage}
								resizeMode="cover"
							/>
							<ProgressiveBlurView
								style={styles.blurOverlay}
								blurType="light"
								blurAmount={18}
								end={{ x: 1, y: 0 }}
							/>
						</View>
					</ExampleCard>

					<Section title="Dark Blur Type">
						Using dark blur type with higher blur amount
					</Section>
					<ExampleCard>
						<View style={styles.imageContainer}>
							<Image
								source={require("./assets/modern-city-skyline-at-night-with-illuminated-skyscrapers-neon-lights-urban-architecture-cinemati.jpg")}
								style={styles.backgroundImage}
								resizeMode="cover"
							/>
							<ProgressiveBlurView
								style={styles.blurOverlay}
								blurType="dark"
								blurAmount={20}
							/>
						</View>
					</ExampleCard>

					<Section title="Extra Light Blur">
						Using xlight blur type with subtle effect
					</Section>
					<ExampleCard>
						<View style={styles.imageContainer}>
							<Image
								source={require("./assets/tropical-beach-with-crystal-clear-turquoise-water-white-sand-palm-trees-golden-hour-lighting-par.jpg")}
								style={styles.backgroundImage}
								resizeMode="cover"
							/>
							<ProgressiveBlurView
								style={styles.blurOverlay}
								blurType="xlight"
								blurAmount={12}
							/>
						</View>
					</ExampleCard>

					<Section title="With Text Overlay">
						Progressive blur with text content overlay
					</Section>
					<ExampleCard>
						<View style={styles.imageContainer}>
							<Image
								source={require("./assets/beautiful-mountain-landscape-with-snow-capped-peaks-lake-reflection-vibrant-sunset-colors-high-re.jpg")}
								style={styles.backgroundImage}
								resizeMode="cover"
							/>
							<ProgressiveBlurView
								style={styles.blurOverlay}
								blurType="light"
								blurAmount={16}
							/>
							<View style={styles.textOverlay}>
								<Text style={styles.overlayTitle}>Overlay Content</Text>
								<Text style={styles.overlayDescription}>
									This text appears over the progressive blur effect
								</Text>
							</View>
						</View>
					</ExampleCard>

					<Section title="Custom Linear Gradient">
						Using a custom LinearGradient component as mask element
					</Section>
					<ExampleCard>
						<View style={styles.imageContainer}>
							<Image
								source={require("./assets/dense-forest-with-tall-trees-misty-atmosphere-sunbeams-through-leaves-natural-green-tones-serene.jpg")}
								style={styles.backgroundImage}
								resizeMode="cover"
							/>
							<ProgressiveBlurView
								style={styles.blurOverlay}
								blurType="prominent"
								blurAmount={25}
								maskElement={<View style={styles.customLinearGradient} />}
							/>
						</View>
					</ExampleCard>

					<Section title="Custom Gradient with Opacities">
						Using custom opacity values for gradual fade effect
					</Section>
					<ExampleCard>
						<View style={styles.imageContainer}>
							<Image
								source={require("./assets/modern-city-skyline-at-night-with-illuminated-skyscrapers-neon-lights-urban-architecture-cinemati.jpg")}
								style={styles.backgroundImage}
								resizeMode="cover"
							/>
							<ProgressiveBlurView
								style={styles.blurOverlay}
								blurType="light"
								blurAmount={20}
								opacities={[0, 0.2, 0.5, 0.8, 1]}
								locations={[0, 0.3, 0.5, 0.7, 1]}
							/>
						</View>
					</ExampleCard>

					<Section title="Custom Start/End Points">
						Diagonal gradient with custom start and end coordinates
					</Section>
					<ExampleCard>
						<View style={styles.imageContainer}>
							<Image
								source={require("./assets/tropical-beach-with-crystal-clear-turquoise-water-white-sand-palm-trees-golden-hour-lighting-par.jpg")}
								style={styles.backgroundImage}
								resizeMode="cover"
							/>
							<ProgressiveBlurView
								style={styles.blurOverlay}
								blurType="dark"
								blurAmount={18}
								start={{ x: 0, y: 0 }}
								end={{ x: 1, y: 1 }}
								opacities={[0, 0.6, 1]}
							/>
						</View>
					</ExampleCard>

					<Section title="Fine-tuned Opacity Control">
						Horizontal gradient with multiple opacity stops
					</Section>
					<ExampleCard>
						<View style={styles.imageContainer}>
							<Image
								source={require("./assets/beautiful-mountain-landscape-with-snow-capped-peaks-lake-reflection-vibrant-sunset-colors-high-re.jpg")}
								style={styles.backgroundImage}
								resizeMode="cover"
							/>
							<ProgressiveBlurView
								style={styles.blurOverlay}
								blurType="prominent"
								blurAmount={22}
								end={{ x: 1, y: 0 }}
								opacities={[0, 0.1, 0.3, 0.7, 0.9, 1]}
								locations={[0, 0.2, 0.4, 0.6, 0.8, 1]}
							/>
						</View>
					</ExampleCard>

					<Section title="Custom Mask Element">
						Using a custom radial gradient mask element
					</Section>
					<ExampleCard>
						<View style={styles.imageContainer}>
							<Image
								source={require("./assets/dense-forest-with-tall-trees-misty-atmosphere-sunbeams-through-leaves-natural-green-tones-serene.jpg")}
								style={styles.backgroundImage}
								resizeMode="cover"
							/>
							<ProgressiveBlurView
								style={styles.blurOverlay}
								blurType="light"
								blurAmount={28}
								maskElement={
									<View style={styles.radialMask}>
										<View style={styles.radialGradient} />
									</View>
								}
							/>
						</View>
					</ExampleCard>

					<Section title="Custom SVG Mask">
						Using custom SVG patterns for complex mask shapes
					</Section>
					<ExampleCard>
						<View style={styles.imageContainer}>
							<Image
								source={require("./assets/modern-city-skyline-at-night-with-illuminated-skyscrapers-neon-lights-urban-architecture-cinemati.jpg")}
								style={styles.backgroundImage}
								resizeMode="cover"
							/>
							<ProgressiveBlurView
								style={styles.blurOverlay}
								blurType="dark"
								blurAmount={30}
								maskElement={
									<View style={styles.customMask}>
										<View style={styles.circularMask} />
									</View>
								}
							/>
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
	backgroundImage: {
		width: "100%",
		height: "100%",
		position: "absolute",
	},
	placeholderImage: {
		flex: 1,
		backgroundColor: "red",
		width: "100%",
		height: "100%",
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
	radialMask: {
		flex: 1,
		width: "100%",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	radialGradient: {
		width: 150,
		height: 150,
		borderRadius: 75,
		backgroundColor: "rgba(255, 255, 255, 0.8)",
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.3,
		shadowRadius: 20,
	},
	customMask: {
		flex: 1,
		width: "100%",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	circularMask: {
		width: 120,
		height: 120,
		borderRadius: 60,
		backgroundColor: "transparent",
		borderWidth: 30,
		borderColor: "rgba(255, 255, 255, 0.9)",
	},
	customLinearGradient: {
		flex: 1,
		width: "100%",
		height: "100%",
		backgroundColor: "rgba(255, 255, 255, 0.5)",
		opacity: 0.8,
	},
});

export default App;
