import React from 'react';
import { AppLoading } from 'expo';
import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_600SemiBold,
  OpenSans_300Light,
} from '@expo-google-fonts/open-sans';
import { Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import CardGameView from './screens/CardGameView';

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen name="CardGameView" component={CardGameView} />
    </MainStack.Navigator>
  );
};

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
      // Custom colors
      success: '#41B768',
      error: '#f05A23',
    },
    fonts: configureFonts(fontConfig),
  };

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen
            name="Main"
            component={MainStackScreen}
            options={{ headerShown: false }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
