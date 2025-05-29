import React, { useMemo, forwardRef } from "react";
import type { ReactElement } from "react";
import { View, StyleSheet } from "react-native";
import type { ViewProps } from "react-native";
import { BlurView, type BlurViewProps } from "@react-native-community/blur";
import MaskedView from "@react-native-masked-view/masked-view";
import LinearGradient from "react-native-linear-gradient";
import type { LinearGradientProps } from "react-native-linear-gradient";

export interface ProgressiveBlurViewProps
	extends ViewProps,
		Omit<BlurViewProps, "style">,
		Omit<LinearGradientProps, "style" | "colors"> {
	opacities?: ReadonlyArray<number>;
	maskElement?: ReactElement;
}

export const ProgressiveBlurView = forwardRef<View, ProgressiveBlurViewProps>(
	(
		{
			children,
			style,
			opacities,
			maskElement,
			start,
			end,
			locations,
			...blurViewProps
		},
		ref,
	) => {
		const gradientStart = start || { x: 0, y: 0 };
		const gradientEnd = end || { x: 0, y: 1 };

		// Convert opacities array to rgba colors if provided
		const gradientColors = useMemo(() => {
			if (opacities) {
				return opacities.map((opacity) => `rgba(0, 0, 0, ${opacity})`);
			}
			return ["transparent", "black"];
		}, [opacities]);

		// Use custom maskElement if provided, otherwise default LinearGradient
		const defaultMaskElement = (
			<LinearGradient
				style={StyleSheet.absoluteFillObject}
				start={gradientStart}
				end={gradientEnd}
				colors={gradientColors}
				locations={locations}
			/>
		);

		return (
			<View ref={ref} style={[styles.container, style]}>
				<MaskedView
					style={StyleSheet.absoluteFillObject}
					maskElement={maskElement || defaultMaskElement}
				>
					<BlurView style={StyleSheet.absoluteFillObject} {...blurViewProps} />
				</MaskedView>
				{children}
			</View>
		);
	},
);

ProgressiveBlurView.displayName = "ProgressiveBlurView";

const styles = StyleSheet.create({
	container: {
		overflow: "hidden",
	},
});
