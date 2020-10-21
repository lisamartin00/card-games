import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';

const Container = ({ children }) => (
  <SafeAreaView style={styles.container}>{children}</SafeAreaView>
);

Container.Inner = ({ children }) => (
  <View style={styles.innerContainer}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    maxWidth: 700,
    alignSelf: 'center',
    width: '100%',
  },
  innerContainer: {
    padding: 20,
    flex: 1,
  },
});

export default Container;
