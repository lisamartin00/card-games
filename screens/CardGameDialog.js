import React, { useState } from 'react';
import {
  Portal,
  Dialog,
  Button,
  TextInput,
  Switch,
  Text,
} from 'react-native-paper';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

const CardGameDialog = (props) => {
  const { isOpen, onClose } = props;
  const [name, setName] = useState('');
  const [howToUrl, setHowToUrl] = useState('');
  const [minAge, setMinAge] = useState();
  const [numPlayers, setNumPlayers] = useState('');
  const [doesRequireSpecialDeck, setDoesRequireSpecialDeck] = useState(false);

  return (
    <Portal>
      <Dialog visible={isOpen}>
        <Dialog.Title>Add a Card Game</Dialog.Title>
        <Dialog.Content>
          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            accessible={false}
          >
            <TextInput label="Name" value={name} onChangeText={setName} />
          </TouchableWithoutFeedback>

          <TextInput
            label="How to Play Url"
            value={howToUrl}
            onChangeText={setHowToUrl}
          />
          <TextInput
            label="Minimum Age"
            value={minAge}
            onChangeText={setMinAge}
            keyboardType="numeric"
          />
          <TextInput
            label="Number of Players"
            value={numPlayers}
            onChangeText={setNumPlayers}
          />
          <View style={styles.switchWrapper}>
            <Text>Requires a special deck?</Text>
            <Switch
              value={doesRequireSpecialDeck}
              onValueChange={setDoesRequireSpecialDeck}
            />
          </View>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={onClose}>Cancel</Button>
          <Button onPress={onClose}>Save</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

const styles = StyleSheet.create({
  switchWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
});

export default CardGameDialog;
