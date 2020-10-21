import React from 'react';
import { Linking, StyleSheet, TouchableOpacity } from 'react-native';
import { DataTable } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from 'react-native-paper';
import Container from '../components/Container';
import Header from '../components/Header';

const CardGameView = (props) => {
  const { route } = props;
  const game = route?.params?.game;
  const { colors } = useTheme();

  if (!game) {
    return null;
  }

  const { name, minAge, howToPlayUrl, requiresSpecialDeck, numPlayers } = game;

  const getSpecialDeckIconProps = () => {
    const iconProps = requiresSpecialDeck
      ? { name: 'checkbox-marked', color: colors.success }
      : { name: 'close-box', color: colors.error };
    return iconProps;
  };

  return (
    <Container>
      <Container.Inner>
        <Header>{name}</Header>
        <DataTable>
          <DataTable.Row>
            <DataTable.Cell>How to Play</DataTable.Cell>
            <DataTable.Cell style={styles.right}>
              <TouchableOpacity onPress={() => Linking.openURL(howToPlayUrl)}>
                <Icon name="open-in-new" size={24} color={colors.accent} />
              </TouchableOpacity>
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Ages</DataTable.Cell>
            <DataTable.Cell style={styles.right}>{`${minAge}+`}</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Players</DataTable.Cell>
            <DataTable.Cell style={styles.right}>{numPlayers}</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Special deck?</DataTable.Cell>
            <DataTable.Cell style={styles.right}>
              <Icon {...getSpecialDeckIconProps()} size={24} />
            </DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      </Container.Inner>
    </Container>
  );
};

const styles = StyleSheet.create({
  right: {
    justifyContent: 'center',
    flex: -1, // https://reactnative.dev/docs/0.46/layout-props#flex
    width: 40,
    textAlign: 'center',
  },
});

export default CardGameView;
