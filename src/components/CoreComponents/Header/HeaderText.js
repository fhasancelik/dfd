import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from './HeaderStyle'

const HeaderText = ({title}) => {
  return (

      <Text style={styles.title}>{title}</Text>

  )
}

export default HeaderText

