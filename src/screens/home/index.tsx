import {Platform, StyleSheet, View} from 'react-native';
import React from 'react';
import RNSwitch from '../../components/switch';

const tab = [
  {key: '1', value: 'Tab 1'},
  {key: '2', value: 'Tab 2'},
  {key: '3', value: 'Tab 3'},
  {key: '4', value: 'Tab 4'},
  {key: '5', value: 'Tab 5'},
];

const HomeScreen = () => {
  const tabSelectHandler = tab => {
    console.log('hello', tab);
  };
  return (
    <View style={styles.root}>
      <RNSwitch
        option={tab}
        onPress={tabSelectHandler}
        selectedColor="#FE7A36"
        unSelectedColor="#280274"
      />
      <RNSwitch
        option={tab}
        onPress={tabSelectHandler}
        selectedColor="#F3B95F"
        unSelectedColor="#492E87"
      />
      <RNSwitch
        option={tab}
        onPress={tabSelectHandler}
        containerStyle={styles.container}
        textStyle={styles.textStyle}
        selectedColor="#0A1D56"
        unSelectedColor="#fff"
        selectedTextColor="#fff"
        unSelectedTextColor="#000"
      />
      <RNSwitch
        option={tab}
        onPress={tabSelectHandler}
        containerStyle={styles.container2}
        textStyle={styles.textStyle}
        selectedColor="#FF6868"
        unSelectedColor="#fff"
        selectedTextColor="#fff"
        unSelectedTextColor="#000"
      />
      <RNSwitch
        option={tab}
        onPress={tabSelectHandler}
        containerStyle={styles.container3}
        textStyle={styles.textStyle}
        selectedColor="#3C0753"
        unSelectedColor="#fff"
        selectedTextColor="#fff"
        unSelectedTextColor="#000"
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
