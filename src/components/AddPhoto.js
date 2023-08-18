import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from './Icon';
import { colors } from '../utils/constants';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const AddPhoto = ({source,onPress}) => {
    console.log('s',source)
  return (
    <TouchableOpacity style={styles.box} onPress={onPress}>

        {source ? (    <Image
    style={{width:'100%',height:'100%'}}
        source={{
          uri: `${source}`,
        }}
      />): (<Icon size={40} name={'add'} color={'white'} style={styles.icon}/>)
    }
  

         </TouchableOpacity>
  );
};

export default AddPhoto;

const styles = StyleSheet.create({


box:{
    width:100,
    height:100
},
icon:{backgroundColor:colors.secondary,width:'100%',height:'100%',
alignItems:'center',
justifyContent:'center'}


});
