import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo';
import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
  Text,
} from 'react-native-paper';
import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_600SemiBold,
  OpenSans_300Light,
} from '@expo-google-fonts/open-sans';
import { Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import Header from './components/Header';
import Container from './components/Container';

export default function App() {
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_300Light,
    Montserrat_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const fontConfig = {
    default: {
      regular: {
        fontFamily: 'OpenSans_400Regular',
      },
      medium: {
        fontFamily: 'OpenSans_600SemiBold',
      },
      light: {
        fontFamily: 'OpenSans_300Light',
      },
    },
  };

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#336785',
      accent: '#43bee6',
    },
    fonts: configureFonts(fontConfig),
  };

  return (
    <PaperProvider theme={theme}>
      <Container>
        <Container.Inner>
          <Header>A Very Special Header</Header>
          <Text>Almost before we knew it, we had left the ground.</Text>
        </Container.Inner>
      </Container>
      <StatusBar style="auto" />
    </PaperProvider>
  );
}
