import {Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RNSwitchTabs from 'rn-switch-tabs';

const tab = [
  {key: '1', value: 'Tab 1'},
  {key: '2', value: 'Tab 2'},
  {key: '3', value: 'Tab 3'},
  {key: '4', value: 'Tab 4'},
  {key: '5', value: 'Tab 5'},
];

const data = [
  {key: '1', label: 'Option 1'},
  {key: '2', label: 'Option 2'},
  {key: '3', label: 'Option 3'},
];

const HomeScreen = () => {
  const tabSelectHandler = tab => {
    console.log('hello', tab);
  };
  return (
    <View style={styles.root}>
      <RNSwitchTabs
        options={tab}
        onPress={tabSelectHandler}
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

export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingVertical: Platform.OS || 'ios' ? 50 : 10,
  },
  container: {
    borderWidth: 1,
    borderColor: '#0A1D56',
    backgroundColor: '#fff',
  },
  textStyle: {
    color: '#000',
  },
  container2: {
    borderColor: '#0A1D56',
    backgroundColor: '#fff',
    width: 80,
    height: 40,
  },
  container3: {
    borderWidth: 1,
    borderColor: '#0A1D56',
    backgroundColor: '#fff',
    width: 80,
    height: 40,
    borderRadius: 12,
  },
});
