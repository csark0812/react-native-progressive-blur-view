# react-native-progressive-blur-view

[![npm version](https://badge.fury.io/js/react-native-progressive-blur-view.svg)](https://badge.fury.io/js/react-native-progressive-blur-view)
[![npm downloads](https://img.shields.io/npm/dm/react-native-progressive-blur-view.svg)](https://www.npmjs.com/package/react-native-progressive-blur-view)
[![license](https://img.shields.io/npm/l/react-native-progressive-blur-view.svg)](https://github.com/csark0812/react-native-progressive-blur-view/blob/main/LICENSE)

A progressive blur view component for React Native that combines blur effects with gradient masks for smooth transitions.

## Installation

```sh
npm install react-native-progressive-blur-view
```

## Dependencies

This library depends on the following packages that need to be installed separately:

```sh
npm install @react-native-masked-view/masked-view @react-native-community/blur react-native-linear-gradient
```

### iOS Setup

For iOS, you need to run:

```sh
cd ios && pod install
```

### Android Setup

For Android, make sure to follow the setup instructions for:
- [@react-native-community/blur](https://github.com/Kureev/react-native-blur#android)
- [react-native-linear-gradient](https://github.com/react-native-linear-gradient/react-native-linear-gradient#android)

## Usage

```js
import { ProgressiveBlurView } from 'react-native-progressive-blur-view';

// ...

<ProgressiveBlurView
  style={{ flex: 1 }}
  blurType="light"
  blurAmount={10}
>
  <Text>Your content here</Text>
</ProgressiveBlurView>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `blurType` | `'dark' \| 'light' \| 'xlight' \| 'prominent' \| 'regular' \| 'extraDark' \| ...` | `'light'` | The blur effect type. Extended iOS types available. |
| `blurAmount` | `number` | `10` | The intensity of the blur effect |
| `opacities` | `ReadonlyArray<number>` | `undefined` | Array of opacity values (0-1) that get converted to rgba colors for the gradient |
| `maskElement` | `React.ReactElement` | `undefined` | Custom mask element to replace the default LinearGradient |
| `start` | `{ x: number; y: number }` | `{ x: 0, y: 0 }` | Start coordinates for the gradient (0-1 range) |
| `end` | `{ x: number; y: number }` | `{ x: 0, y: 1 }` | End coordinates for the gradient (0-1 range) |
| `locations` | `ReadonlyArray<number>` | `undefined` | Array defining gradient color stop positions (0-1 range) |
| `reducedTransparencyFallbackColor` | `string` | `undefined` | Fallback color when reduced transparency is enabled (iOS) |
| `blurRadius` | `number` | `undefined` | Radius of the blur effect (Android) |
| `downsampleFactor` | `number` | `undefined` | Factor to downsample the image before blurring (Android) |
| `overlayColor` | `string` | `undefined` | Color overlay on top of the blur (Android) |
| `enabled` | `boolean` | `undefined` | Whether the blur effect is enabled (Android) |
| `autoUpdate` | `boolean` | `undefined` | Whether to automatically update the blur (Android) |
| `style` | `ViewStyle` | `undefined` | Style for the container |
| `children` | `ReactNode` | `undefined` | Content to be rendered inside the blur view |

All props from `BlurView` (except `style`) and `LinearGradient` (except `style` and `colors`) are supported and passed through to their respective components.

### Advanced Usage Examples

#### Custom Gradient with Opacity Array
```jsx
<ProgressiveBlurView
  style={{ flex: 1 }}
  blurType="light"
  blurAmount={15}
  opacities={[0, 0.2, 0.5, 0.8, 1]}
  locations={[0, 0.3, 0.5, 0.7, 1]}
>
  <Text>Content with custom gradient opacity stops</Text>
</ProgressiveBlurView>
```

#### Diagonal Gradient
```jsx
<ProgressiveBlurView
  style={{ flex: 1 }}
  blurType="dark"
  blurAmount={12}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 1 }}
  opacities={[0, 0.6, 1]}
>
  <Text>Diagonal blur gradient</Text>
</ProgressiveBlurView>
```

#### Horizontal Gradient
```jsx
<ProgressiveBlurView
  style={{ flex: 1 }}
  blurType="prominent"
  blurAmount={18}
  end={{ x: 1, y: 0 }}
  opacities={[0, 0.1, 0.3, 0.7, 0.9, 1]}
  locations={[0, 0.2, 0.4, 0.6, 0.8, 1]}
>
  <Text>Horizontal multi-stop gradient</Text>
</ProgressiveBlurView>
```

#### Custom Mask Element
```jsx
import LinearGradient from 'react-native-linear-gradient';

<ProgressiveBlurView
  style={{ flex: 1 }}
  blurType="light"
  blurAmount={20}
  maskElement={
    <LinearGradient
      style={StyleSheet.absoluteFillObject}
      colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.3)", "rgba(0,0,0,1)"]}
      locations={[0, 0.5, 1]}
      start={{ x: 0.5, y: 0.5 }}
      end={{ x: 1, y: 1 }}
    />
  }
>
  <Text>Custom radial-like gradient mask</Text>
</ProgressiveBlurView>
```

## Example

See the `example` folder for a complete example app.

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
