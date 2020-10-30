import React, { useState, useContext } from 'react';
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  View,
} from 'react-native';
import { Card, Icon, Text, ThemeContext } from 'react-native-elements';
import Container from '../components/Container';
import CardGameDialog from '../screens/CardGameDialog';
import cardGames from '../lib/constants/cardGames';

const CardGameCard = (props) => {
  const { game, navigation } = props;
  const { name, imgSrc } = game;

  const handleCardPress = () => {
    navigation.navigate('CardGameView', { game });
  };

  const source = imgSrc ? imgSrc : require('../assets/defaultGame.jpg');

  return (
    <TouchableOpacity onPress={handleCardPress}>
      <Card style={styles.card}>
        <Card.Title title={name} />
        <Card.Image source={source} />
      </Card>
    </TouchableOpacity>
  );
};

const Home = ({ navigation }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [data, setData] = useState(cardGames);
  const {
    theme: { colors },
  } = useContext(ThemeContext);

  const onCardGameSave = (cardGame) => {
    setData((prevData) => [cardGame, ...prevData]);
    setIsDialogOpen(false);
  };

  return (
    <Container>
      <Container.Inner>
        <View style={styles.fabWrapper}>
          <Text h1>Card Games</Text>
          <Icon
            type="material-community"
            name="plus"
            color={colors.primary}
            reverse
            //containerStyle={styles.fab}
            onPress={() => setIsDialogOpen(true)}
          />
          <CardGameDialog
            isOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            handleCardGameSave={(cardGame) => onCardGameSave(cardGame)}
          />
          <FlatList
            data={data}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <CardGameCard game={item} navigation={navigation} />
            )}
          />
        </View>
      </Container.Inner>
    </Container>
  );
};

const windowHeight = Dimensions.get('window').height;
const navHeight = 64;

const styles = StyleSheet.create({
  card: {
    marginVertical: 20,
  },
  fab: {
    position: 'absolute',
    right: 10,
    bottom: 30,
  },
  // not needed for mobile but necessary to place this correctly for web
  fabWrapper: {
    maxHeight: windowHeight - navHeight,
    position: 'relative',
  },
});

export default Home;
