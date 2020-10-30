import React from 'react';
import { Overlay, Button, Input, Text, CheckBox } from 'react-native-elements';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Modal,
} from 'react-native';
//import Modal from 'modal-react-native-web';
import { useForm, Controller } from 'react-hook-form';

// const ModalChildren = (props) => {
//   const { onClose, handleCardGameSave } = props;
//   const { control, handleSubmit, errors } = useForm();
//   const isIos = Platform.OS === 'ios';

//   const onSubmit = (data) => {
//     handleCardGameSave(data);
//   };

//   return (

//   );
// };

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
      {/* {isWeb ? <>hm</> : <ModalChildren />} */}
    </Overlay>
  );
};

const styles = (isOpen) =>
  StyleSheet.create({
    dialog: {
      // This seems like a lame hack but I'm not sure how else
      // to "un-center" the dialog vertically to account for
      // more room for the keyboard on iOS.  You can only target
      // the dialog, not its parent which has
      // "justify-content: center" applied by default
      // position: 'absolute',
      // top: 100,
      // marginHorizontal: 20,
      // right: 0,
      // left: 0,
      overflow: 'scroll',
      //height: 800,
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
