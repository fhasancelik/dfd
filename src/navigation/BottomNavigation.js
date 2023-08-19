import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Profile from '../screens/HomeScreens/Profile'

const BottomNavigation = () => {
    const Bottom=createBottomTabNavigator()
  return (
  <Bottom.Navigator>
    <Bottom.Screen name='Profile' component={Profile}/>
  </Bottom.Navigator>
  )
}

export default BottomNavigation

const styles = StyleSheet.create({})