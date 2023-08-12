import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { colors } from '../../utils/constants'

const CustomInput = ({placeHolder,onChangeText,value}) => {
  return (
    <View >
      <TextInput
      
      onChangeText={onChangeText}
      value={value}
      placeholderTextColor={colors.whiteColor} placeholder={placeHolder} style={styles.input}/>
    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({
    input:{
        fontSize:20,
        color:colors.whiteColor,
        borderBottomWidth:2,
        borderBottomColor:colors.secondary,
        paddingBottom:2
    }
})