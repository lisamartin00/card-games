import React from 'react';
import { AppLoading } from 'expo';
import { ThemeProvider } from 'react-native-elements';
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

  const theme = {
    colors: {
      primary: '#336785',
      secondary: '#43bee6',
      success: '#41B768',
      error: '#f05A23',
    },
    Text: {
      style: {
        fontFamily: 'OpenSans_400Regular',
      },
      h1Style: {
        fontFamily: 'Montserrat_400Regular',
      },
      h2Style: {
        fontFamily: 'Montserrat_400Regular',
      },
      h3Style: {
        fontFamily: 'Montserrat_400Regular',
      },
      h4Style: {
        fontFamily: 'Montserrat_400Regular',
      },
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen
            name="Main"
            component={MainStackScreen}
            options={{ headerShown: false }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
