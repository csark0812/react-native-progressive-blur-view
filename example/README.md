# ProgressiveBlurView Example

This example app demonstrates the usage of `react-native-progressive-blur-view` with various configurations and use cases.

## Examples Included

### 1. Basic Vertical Blur
- Default vertical progressive blur
- Light blur type with moderate blur amount

### 2. Horizontal Blur
- Progressive blur from left to right
- Useful for side-fade effects

### 3. Dark Blur Type
- Uses dark blur type for better contrast on light backgrounds
- Higher blur amount for stronger effect

### 4. Extra Light Blur
- Subtle blur effect using xlight blur type
- Lower blur amount for gentle transitions

### 5. Text Overlay Example
- Shows how to place content over the blur effect
- Demonstrates text readability with proper shadows

## Props Demonstrated

- `blurType`: `"xlight" | "light" | "dark"`
- `blurAmount`: Number (0-25 recommended)
- `gradientDirection`: `"vertical" | "horizontal"`
- `style`: ViewStyle for positioning and sizing

## Running the Example

```bash
# Install dependencies
npm install

# Install iOS pods
cd ios && pod install && cd ..

# Run on iOS
npm run ios

# Run on Android
npm run android
```

## Dependencies

The example uses these additional packages:
- `@react-native-community/blur`: For the blur effect
- `@react-native-masked-view/masked-view`: For gradient masking
- `react-native-linear-gradient`: For gradient creation
