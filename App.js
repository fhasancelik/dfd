import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SignUpScreen from './src/screens/AuthScreens/SignUpScreen'
import { colors } from './src/utils/constants'

const App = () => {
  return (
   <SafeAreaView style={{flex:1,backgroundColor:colors.primaryColor}}>
    <StatusBar backgroundColor={colors.primaryColor}/>
       <SignUpScreen/>
   </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})