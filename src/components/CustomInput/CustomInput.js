import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { colors } from '../../utils/constants'

const CustomInput = ({placeHolder,onChangeText,value}) => {
  return (
    <View >
      <TextInput
      
      onChangeText={onChangeText}
      value={value}
      placeholderTextColor={'black'} placeholder={placeHolder} style={styles.input}/>
    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({
    input:{
        fontSize:20,
        color:'black',
        borderBottomWidth:2,
        borderBottomColor:colors.secondary,
        paddingBottom:2,
        backgroundColor:'white'
    }
})