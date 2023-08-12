import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icons from 'react-native-vector-icons/Ionicons'

const Icon = ({style,name,size,color}) => {
  return (
    <View style={style}>
      <Icons name={name} size={size} color={color}/>
    </View>
  )
}

export default Icon

