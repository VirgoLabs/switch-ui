# Switch UI

This is a customizable Switch component for React Native that can be used in any project built with Expo or React Native. It provides several styling options, dynamic color support based on light or dark mode, animation effects, and support for various states (on/off) with custom colors, sizes, and labels.

## Features:

- Supports two states: `on` and `off`.
- Customizable labels and thumb styles.
- Dynamic theming (light and dark mode support).
- Smooth animation effects for state transitions.
- Fully customizable styles, including colors, borders, size, and rounded corners.
- Optional error state with customizable error color.
- Supports accessibility with both press and long-press actions.

## Installation

To use this Switch component, ensure you have the following dependencies installed:

```bash
npm install react-native
npm install @expo/vector-icons
```

If you're using Expo, the `Ionicons` icon package is included by default. Otherwise, you can install it via:

```bash
npm install @expo/vector-icons
```

Copy the Switch component code into your project.

Import the `Switch` component into your project:

```tsx
import Switch from "@/components/Switch"; // Adjust the path as needed
```

## Usage

Here’s a basic usage example:

```tsx
import React, { useState } from "react";
import { View } from "react-native";
import Switch from "@/components/Switch";

const App = () => {
  const [isSwitchOn, setIsSwitchOn] = useState<boolean>(false);

  const handleSwitchChange = (value: boolean) => {
    setIsSwitchOn(value);
  };

  return (
    <View style={{ padding: 20 }}>
      <Switch
        value={isSwitchOn}
        onValueChange={handleSwitchChange}
        label="Enable Feature"
        size={30}
        rounded={true}
        activeColor="green"
        inactiveColor="red"
      />
    </View>
  );
};

export default App;
```

## Switch Props

Here’s a detailed list of the props supported by the `Switch` component:

| Prop               | Type                                     | Default Value | Description                                                       |
| ------------------ | ---------------------------------------- | ------------- | ----------------------------------------------------------------- |
| `value`            | `boolean`                                | None          | Current state of the Switch (on/off).                             |
| `onValueChange`    | `(value: boolean) => void`               | None          | Function called when the Switch value changes.                    |
| `disabled`         | `boolean`                                | `false`       | If `true`, disables interactions with the Switch.                  |
| `label`            | `string`                                 | None          | The label text displayed next to the Switch when it is on.        |
| `offLabel`         | `string`                                 | None          | Custom label to show when the Switch is off.                      |
| `labelPosition`    | `"left" \| "right"`                      | `"right"`     | Position of the label relative to the Switch.                     |
| `activeColor`      | `string`                                 | Theme color   | Color of the Switch when it is in the active (on) state.          |
| `inactiveColor`    | `string`                                 | Theme color   | Color of the Switch when it is in the inactive (off) state.       |
| `thumbColor`       | `string`                                 | `"#FFF"`      | Color of the thumb when the Switch is on.                          |
| `offThumbColor`    | `string`                                 | None          | Color of the thumb when the Switch is off.                        |
| `trackStyle`       | `StyleProp<ViewStyle>`                   | None          | Custom styles for the Switch track.                               |
| `thumbStyle`       | `StyleProp<ViewStyle>`                   | None          | Custom styles for the Switch thumb.                               |
| `labelStyle`       | `StyleProp<TextStyle>`                   | None          | Custom styles for the label text.                                 |
| `size`             | `number`                                 | `30`          | Size of the Switch.                                               |
| `rounded`          | `number \| boolean`                      | `true`        | Controls the roundness of the Switch (can be a number or boolean).|
| `isError`          | `boolean`                                | `false`       | If `true`, marks the Switch with an error state.                  |
| `errorColor`       | `string`                                 | `"#FF5252"`   | Color for the Switch track in the error state.                    |

## Example with All Props

```tsx
<Switch
  value={true}
  onValueChange={(value) => console.log(value)}
  label="Notifications"
  labelPosition="left"
  size={35}
  rounded={10}
  activeColor="#4CAF50"
  inactiveColor="#E0E0E0"
  thumbColor="#FFF"
  offThumbColor="#9E9E9E"
  trackStyle={{ margin: 5 }}
  thumbStyle={{ borderColor: "#BDBDBD", borderWidth: 2 }}
  labelStyle={{ fontSize: 18 }}
  isError={false}
  errorColor="#FF5252"
/>
```

### Notes on Styling

- **Size**: Use the `size` prop to adjust the size of the Switch.
- **Color Theming**: Colors are dynamically chosen based on the device's current theme (`light` or `dark`) via the `useColorScheme` hook.
- **Label Position**: Use `labelPosition` to position the label text to the `left` or `right` of the Switch.
- **Rounded**: Use the `rounded` prop to control the roundness of the Switch. If set to `true`, it will round the Switch by default. You can also provide a custom value for the border-radius.

### States and Colors

- `on`: Displays the `activeColor` and `thumbColor`.
- `off`: Displays the `inactiveColor` and `offThumbColor`.

### Accessibility

Ensure to provide meaningful labels for the Switch and handle state updates for a better user experience.

## Contributing

If you'd like to contribute to this Switch component, feel free to fork this repository, make changes, and submit a pull request. Any improvements or suggestions are welcome!

## License

This Switch component is licensed under the MIT License. See [LICENSE](./LICENSE) for more details.
