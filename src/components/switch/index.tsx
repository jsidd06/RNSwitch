import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

const RNSwitchTabs = props => {
  const [selectTab, setSelectedTab] = useState(0);
  const [selectedTextColor, setSelectedTextColor] = useState(0);

  return (
    <View style={styles.root}>
      <ScrollView
        style={styles.subRootContainer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {props?.options?.map((item, index) => (
          <Pressable
            onPress={() => {
              props.onPress(item);
              setSelectedTab(index);
              setSelectedTextColor(index);
            }}
            key={item.key}
            style={[
              styles.container,
              props.containerStyle,
              props.selectedColor &&
                props.unSelectedColor && {
                  backgroundColor:
                    index === selectTab
                      ? props.selectedColor
                      : props.unSelectedColor,
                },
            ]}>
            {props.renderItem ? (
              props.renderItem(item)
            ) : (
              <Text
                style={[
                  styles.textStyle,
                  props.textStyle,
                  props.selectedTextColor &&
                    props.unSelectedTextColor && {
                      color:
                        index === selectedTextColor
                          ? props.selectedTextColor
                          : props.unSelectedTextColor,
                    },
                ]}>
                {item.value}
              </Text>
            )}
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default RNSwitchTabs;

const styles = StyleSheet.create({
  root: {
    marginVertical: 10,
    marginHorizontal: 5,
  },
  subRootContainer: {},
  container: {
    backgroundColor: '#0A1D56',
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginHorizontal: 5,
  },
  textStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
});
