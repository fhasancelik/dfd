import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {utils} from '@react-native-firebase/app';
import storage from '@react-native-firebase/storage';
const Savestr = () => {
  const reference = storage().ref('black-t-shirt-sm.png');

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="de" 
      
      onPress={async () => {
        // path to existing file on filesystem
        // uploads file
        await reference.putFile(pathToFile);
      }}
      
      
      
      
      />
    </View>
  );
};

export default Savestr;

const styles = StyleSheet.create({});
