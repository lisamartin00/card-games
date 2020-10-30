import React from 'react';
import { Overlay, Button, Input, Text, CheckBox } from 'react-native-elements';
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

  const isIos = Platform.OS === 'ios';

  const onSubmit = (data) => {
    handleCardGameSave(data);
  };

  return (
    <Overlay
      isVisible={isOpen}
      onBackdropPress={onClose}
      overlayStyle={styles(isOpen).overlay}
    >
      <KeyboardAvoidingView behavior={isIos ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={isIos ? Keyboard.dismiss : () => {}}>
          <View style={styles.dialog}>
            <Text h2>Add a Card Game</Text>
            <Controller
              control={control}
              render={({ onChange, onBlur, value }) => (
                <Input
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
                <Input
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
                <Input
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
                <Input
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
                  <CheckBox
                    checked={value}
                    onPress={onChange}
                    onBlur={onBlur}
                  />
                </View>
              )}
              name="requiresSpecialDeck"
              defaultValue={false}
            />
            <Button onPress={onClose} type="clear" title="Cancel" />
            <Button onPress={handleSubmit(onSubmit)} title="Save" />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Overlay>
  );
};

const styles = (isOpen) =>
  StyleSheet.create({
    dialog: {
      overflow: 'scroll',
    },
    overlay: {
      display: isOpen ? 'flex' : 'none',
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
