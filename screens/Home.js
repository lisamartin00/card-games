import React, { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  View,
} from 'react-native';
import { Card, FAB } from 'react-native-paper';
import Header from '../components/Header';
import Container from '../components/Container';
import CardGameDialog from '../screens/CardGameDialog';
import cardGames from '../lib/constants/cardGames';

const CardGameCard = (props) => {
  const { game, navigation } = props;
  const { name, imgSrc } = game;

  const handleCardPress = () => {
    navigation.navigate('CardGameView', { game });
  };

  return (
    <TouchableOpacity onPress={handleCardPress}>
      <Card style={styles.card}>
        <Card.Title title={name} />
        {imgSrc ? <Card.Cover source={imgSrc} /> : null}
      </Card>
    </TouchableOpacity>
  );
};

const Home = ({ navigation }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <Container>
      <Container.Inner>
        <View style={styles.fabWrapper}>
          <Header>Card Games</Header>
          <FlatList
            data={cardGames}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <CardGameCard game={item} navigation={navigation} />
            )}
          />
          <FAB
            icon="plus"
            color="white"
            style={styles.fab}
            onPress={() => setIsDialogOpen(true)}
          />
        </View>
        <CardGameDialog
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
        />
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
