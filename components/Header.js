import { Children } from 'react';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Headline } from 'react-native-paper';

const Header = ({ children }) => (
  <Headline style={styles.header}>{children}</Headline>
);

const styles = StyleSheet.create({
  header: {
    fontFamily: 'Montserrat_400Regular',
  },
});

export default Header;
