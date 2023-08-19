import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SignUpScreen from './src/screens/AuthScreens/SignUpScreen';
import {colors} from './src/utils/constants';
import Profile from './src/screens/HomeScreens/Profile';
import {DataProvider} from './src/context';
import RootNavigation from './src/navigation/RootNavigation';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <DataProvider>
      <SafeAreaView style={{flex: 1, backgroundColor: colors.primaryColor}}>
        <StatusBar backgroundColor={colors.primaryColor} />

<NavigationContainer>
  <RootNavigation/>
</NavigationContainer>
      </SafeAreaView>
    </DataProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
