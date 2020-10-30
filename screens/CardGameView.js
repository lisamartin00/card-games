import React, { useContext } from 'react';
import { Linking, StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemeContext, ListItem, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Container from '../components/Container';

const CardGameView = (props) => {
  const { route } = props;
  const game = route?.params?.game;
  const {
    theme: { colors },
  } = useContext(ThemeContext);

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
        <Text h1>{name}</Text>
        <TouchableOpacity onPress={() => Linking.openURL(howToPlayUrl)}>
          <ListItem>
            <ListItem.Content>
              <ListItem.Title>How to Play</ListItem.Title>
            </ListItem.Content>
            <Icon name="open-in-new" size={24} color={colors.accent} />
          </ListItem>
        </TouchableOpacity>
        <ListItem>
          <ListItem.Content>
            <ListItem.Title>Ages</ListItem.Title>
          </ListItem.Content>
          <View style={styles.right}>
            <Text>{`${minAge}+`}</Text>
          </View>
        </ListItem>
        <ListItem>
          <ListItem.Content>
            <ListItem.Title>Players</ListItem.Title>
          </ListItem.Content>
          <View style={styles.right}>
            <Text>{numPlayers}</Text>
          </View>
        </ListItem>
        <ListItem>
          <ListItem.Content>
            <ListItem.Title>Special deck?</ListItem.Title>
          </ListItem.Content>
          <Icon {...getSpecialDeckIconProps()} size={24} />
        </ListItem>
      </Container.Inner>
    </Container>
  );
};

const styles = StyleSheet.create({
  right: {
    justifyContent: 'center',
    flex: -1, // https://reactnative.dev/docs/0.46/layout-props#flex
    width: 40,
    textAlign: 'right',
    marginRight: 5,
  },
});

export default CardGameView;
