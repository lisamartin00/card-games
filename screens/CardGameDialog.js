import React from 'react';
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
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';

const CardGameDialog = (props) => {
  const { isOpen, onClose, handleCardGameSave } = props;
  const { control, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    handleCardGameSave(data);
  };

  const isIos = Platform.OS === 'ios';

  return (
    <Portal>
      <Dialog visible={isOpen} onDismiss={onClose} style={styles.dialog}>
        <KeyboardAvoidingView behavior={isIos ? 'padding' : 'height'}>
          <TouchableWithoutFeedback
            onPress={isIos ? Keyboard.dismiss : () => {}}
          >
            <View>
              <Dialog.Title>Add a Card Game</Dialog.Title>
              <Dialog.Content>
                <Controller
                  control={control}
                  render={({ onChange, onBlur, value }) => (
                    <TextInput
                      label="Name"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      error={errors.name}
                    />
                  )}
                  name="name"
                  rules={{ required: true }}
                  defaultValue=""
                />
                <Controller
                  control={control}
                  render={({ onChange, onBlur, value }) => (
                    <TextInput
                      label="How to Play Url"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      error={errors.howToPlayUrl}
                    />
                  )}
                  name="howToPlayUrl"
                  rules={{ required: true }}
                  defaultValue=""
                />
                <Controller
                  control={control}
                  render={({ onChange, onBlur, value }) => (
                    <TextInput
                      label="Minimum Age"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      keyboardType="numeric"
                      error={errors.minAge}
                    />
                  )}
                  name="minAge"
                  rules={{ required: true }}
                  defaultValue=""
                />
                <Controller
                  control={control}
                  render={({ onChange, onBlur, value }) => (
                    <TextInput
                      label="Number of Players"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      error={errors.numPlayers}
                    />
                  )}
                  name="numPlayers"
                  rules={{ required: true }}
                  defaultValue=""
                />
                <Controller
                  control={control}
                  render={({ onChange, onBlur, value }) => (
                    <View style={styles.switchWrapper}>
                      <Text>Requires a special deck?</Text>
                      <Switch
                        value={value}
                        onValueChange={onChange}
                        onBlur={onBlur}
                      />
                    </View>
                  )}
                  name="requiresSpecialDeck"
                  defaultValue={false}
                />
              </Dialog.Content>
              <Dialog.Actions>
                <Button onPress={onClose}>Cancel</Button>
                <Button onPress={handleSubmit(onSubmit)}>Save</Button>
              </Dialog.Actions>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </Dialog>
    </Portal>
  );
};

const styles = StyleSheet.create({
  dialog: {
    // This seems like a lame hack but I'm not sure how else
    // to "un-center" the dialog vertically to account for
    // more room for the keyboard on iOS.  You can only target
    // the dialog, not its parent which has
    // "justify-content: center" applied by default
    position: 'absolute',
    top: 100,
    marginHorizontal: 20,
    right: 0,
    left: 0,
  },
  switchWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
});

export default CardGameDialog;
