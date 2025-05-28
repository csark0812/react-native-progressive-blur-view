import { View, type ViewStyle, StyleSheet, type ViewProps } from "react-native";
import { BlurView } from "@react-native-community/blur";
import MaskedView from "@react-native-masked-view/masked-view";
import LinearGradient from "react-native-linear-gradient";

export interface ProgressiveBlurViewProps extends ViewProps {
	style?: ViewStyle;
	blurType?: "xlight" | "light" | "dark";
	blurAmount?: number;
	gradientDirection?: "vertical" | "horizontal";
}

export const ProgressiveBlurView: React.FC<ProgressiveBlurViewProps> = ({
	children,
	style,
	blurType = "light",
	blurAmount = 10,
	gradientDirection = "vertical",
}) => {
	const gradientStart =
		gradientDirection === "vertical" ? { x: 0, y: 0 } : { x: 0, y: 0 };
	const gradientEnd =
		gradientDirection === "vertical" ? { x: 0, y: 1 } : { x: 1, y: 0 };

	return (
		<View style={[styles.container, style]}>
			<MaskedView
				style={StyleSheet.absoluteFillObject}
				maskElement={
					<LinearGradient
						style={StyleSheet.absoluteFillObject}
						start={gradientStart}
						end={gradientEnd}
						colors={["transparent", "black"]}
					/>
				}
			>
				<BlurView
					style={StyleSheet.absoluteFillObject}
					blurType={blurType}
					blurAmount={blurAmount}
				/>
			</MaskedView>
			{children}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		overflow: "hidden",
	},
});
