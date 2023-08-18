import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../utils/constants'

const CustomButton = ({onPress,title}) => {
  return (

    <TouchableOpacity onPress={onPress} style={styles.container}>
        <Text style={styles.title}> {title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({


container:{
    backgroundColor:colors.secondary

    ,
    paddingHorizontal:25,
    paddingVertical:15,
    borderRadius:50,
    shadowColor: "#0dc9ee",
shadowOffset: {
  width: 0,
  height: 18,
},
shadowOpacity:  0.25,
shadowRadius: 20.00,
elevation: 24,
alignItems:'center'
,
justifyContent:'center'
}
,
title:{
    color:colors.textColor,
    fontSize:20,
    fontWeight:'bold'
}

})