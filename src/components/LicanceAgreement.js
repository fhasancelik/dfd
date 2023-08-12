import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from './Icon'
import { colors } from '../utils/constants'

const LicanceAgreement = () => {
  return (
    <View style={styles.mainContainer}>
     <Icon name={'checkmark-circle-outline'} size={25} color={colors.secondary} />
     <View style={styles.textContainer}>
        <Text style={styles.text}>Agree with</Text>
        <Text style={[styles.text,styles.secondText]}>Terms & Conditations</Text>
     </View>
    </View>
  )
}

export default LicanceAgreement

const styles = StyleSheet.create({
mainContainer:{
    flexDirection:'row',
    gap:10,
    justifyContent:'center',
    alignItems:'center'
},
    textContainer:{
        flexDirection:'row',
        gap:2

    }
,
    text:{
color:colors.textColor,
fontSize:18
    }
,
    secondText:{
        color:colors.secondary
    }


})