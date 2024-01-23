# RNSwitchTabs

| iOS                            | Android                                 |
| ------------------------------ | --------------------------------------- |
| ![for iOS](src/assets/ios.gif) | ![for Android](src/assets/androidI.gif) |

#### RNSwitchTabs is a React Native component that provides a customizable switch with multiple tabs. It allows users to scroll horizontally through the available options and select a specific tab. The component is designed to be flexible, allowing for customization of colors, styles, and rendering of individual tab items.

## Installation

#### To use RNSwitchTabs in your React Native project, follow these steps:

> Install the component using your preferred package manager:

```
npm install rn-switch-tabs
```

### Import the component in your code:

```
import RNSwitchTabs from 'rn-switch-tabs';
```

## Usage

```
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import RNSwitchTabs from 'rn-switch-tabs';

const YourComponent = () => {
  // ... your component logic

  return (
    <RNSwitchTabs
      options={YOUR_OPTIONS_ARRAY}
      onPress={YOUR_ON_PRESS_HANDLER}
      containerStyle={YOUR_CUSTOM_CONTAINER_STYLE}
      selectedColor={YOUR_SELECTED_COLOR}
      unSelectedColor={YOUR_UNSELECTED_COLOR}
      renderItem={YOUR_RENDER_ITEM_FUNCTION}
      textStyle={YOUR_CUSTOM_TEXT_STYLE}
      selectedTextColor={YOUR_SELECTED_TEXT_COLOR}
      unSelectedTextColor={YOUR_UNSELECTED_TEXT_COLOR}
    />
  );
};

export default YourComponent;

```

## Props

- options: An array of objects representing the available tabs. Each object should have a key and a value

- onPress: A callback function invoked when a tab is pressed. It receives the selected tab item as a parameter.

- containerStyle: Custom styles for the tab container.

- selectedColor: Background color for the selected tab.

- unSelectedColor: Background color for unselected tabs.

- renderItem: A function that can be used to render custom content for each tab. Receives the current tab item as a parameter.

- textStyle: Custom styles for the text inside each tab.

- selectedTextColor: Text color for the selected tab.

- unSelectedTextColor: Text color for unselected tabs.

### Styles

#### The following styles are available for customization:

- root: The main container of the component.

- subRootContainer: Style for the internal ScrollView.

- container: Style for each individual tab container.

- textStyle: Style for the text inside each tab.

## Example 1

```
// YourComponent.js
import React from 'react';
import { View } from 'react-native';
import RNSwitchTabs from 'rn-switch-tabs';

const YourComponent = () => {
  const options = [
    { key: '1', value: 'Tab 1' },
    { key: '2', value: 'Tab 2' },
    { key: '3', value: 'Tab 3' },
  ];

  const handlePress = (item) => {
    console.log('Selected Tab:', item);
  };

  return (
    <View>
      <RNSwitchTabs
        options={options}
        onPress={handlePress}
        selectedColor="#FF5733"
        unSelectedColor="#3498db"
      />
    </View>
  );
};

export default YourComponent;

```

## Example 2

```
// YourComponent.js
import React from 'react';
import { View } from 'react-native';
import RNSwitchTabs from 'rn-switch-tabs';

const YourComponent = () => {
  const options = [
    { key: '1', value: 'Tab 1' },
    { key: '2', value: 'Tab 2' },
    { key: '3', value: 'Tab 3' },
  ];

  const handlePress = (item) => {
    console.log('Selected Tab:', item);
  };

  return (
    <View>
      <RNSwitchTabs
        options={options}
        onPress={handlePress}
        selectedColor="#F3B95F"
        unSelectedColor="#492E87"
        renderItem={item => (
          <View>
            <Text style={{color: '#fff'}}>{item.value}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default YourComponent;

```

#### Feel free to update the documentation with more detailed information or examples based on your specific use cases.
