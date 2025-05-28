# react-native-progressive-blur-view

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
  gradientDirection="vertical"
>
  <Text>Your content here</Text>
</ProgressiveBlurView>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `blurType` | `'xlight' \| 'light' \| 'dark'` | `'light'` | The blur effect type (iOS only) |
| `blurAmount` | `number` | `10` | The intensity of the blur effect |
| `gradientDirection` | `'vertical' \| 'horizontal'` | `'vertical'` | Direction of the gradient mask |
| `style` | `ViewStyle` | `undefined` | Style for the container |
| `children` | `ReactNode` | `undefined` | Content to be rendered inside the blur view |

## Example

See the `example` folder for a complete example app.

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
