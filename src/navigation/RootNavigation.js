import {StyleSheet, Text, View} from 'react-native';
import React, {useContext,useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from '../screens/AuthScreens/SignUpScreen';
import BottomNavigation from './BottomNavigation';
import {DataContext} from '../context';
import auth from '@react-native-firebase/auth'
import Profile from '../screens/HomeScreens/Profile';

const RootNavigation = () => {
  const {user,setUser} = useContext(DataContext);
  const RootStack = createNativeStackNavigator();

  function onAuthStateChanged(user) {
    if(user){
  setUser(true)
    }else{
setUser(false)
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <RootStack.Navigator screenOptions={{
        headerShown:false
    }}>
      {user ? (
        <RootStack.Screen name="Home" component={BottomNavigation} />
      ) : (
        <RootStack.Screen name="SignUp" component={SignUpScreen} />
      )}

 
    </RootStack.Navigator>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
