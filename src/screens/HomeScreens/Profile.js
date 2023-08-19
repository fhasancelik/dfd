import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../utils/constants';
import Icon from '../../components/Icon';

const Profile = () => {

  






  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 5,
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
        }}>
        <View style={styles.left}>
          <View
            style={{
              width: 200,
              height: 200,
              borderRadius: 100,
              borderWidth: 6,
              borderColor: 'gray',
            }}>
            <Image
              style={{
                height: '100%',
                width: '100%',
                borderRadius: 100,
                objectFit: 'contain',
              }}
              source={{uri: colors.img}}
            />
          </View>

          <Text>Hasan Çelik</Text>
        </View>

        <View style={styles.right}>
          <Icon name={'clipboard'} size={40} color={colors.primaryColor} />
        </View>
      </View>

      <View style={{flex: 8, backgroundColor: colors.primaryColor}}>
        <View style={styles.infoContainer}>
          <View style={styles.infoBox}>
            <Icon name={'mail'} size={20} color={colors.primaryColor} />
            <View style={{flexDirection:'row',backgroundColor:'white',alignItems:'center',gap:25,paddingHorizontal:10,paddingVertical:15}}>
              <Icon name={'mail'} size={30} color={colors.primaryColor} />
              <View style={{borderBottomWidth:2,borderColor:colors.primaryColor,width:'50%',paddingBottom:5}}>
                <Text>E-Mail</Text>
                <Text>hasancelikjob@gmail.com</Text>
              </View>
            </View>
          </View>
          <View style={styles.infoBox}>
       
            <View style={{flexDirection:'row',backgroundColor:'white',alignItems:'center',gap:25,paddingHorizontal:10,paddingVertical:15}}>
              <Icon name={'code-working'} size={30} color={colors.primaryColor} />
              <View style={{borderBottomWidth:2,borderColor:colors.primaryColor,width:'50%',paddingBottom:5}}>
                <Text>Çalıştığı Bölüm</Text>
                <Text>React ve React Native Developer</Text>
              </View>
            </View>
          </View>
          <View style={styles.infoBox}>
  
            <View style={{flexDirection:'row',backgroundColor:'white',alignItems:'center',gap:25,paddingHorizontal:10,paddingVertical:15}}>
              <Icon name={'layers'} size={30} color={colors.primaryColor} />
              <View style={{borderBottomWidth:2,borderColor:colors.primaryColor,width:'50%',paddingBottom:5}}>
                <Text>Tecrübe Yılı</Text>
                <Text>3 Yıl</Text>
              </View>
            </View>
          </View>
          <View style={styles.infoBox}>
        
            <View style={{flexDirection:'row',backgroundColor:'white',alignItems:'center',gap:25,paddingHorizontal:10,paddingVertical:15}}>
              <Icon name={'trophy'} size={30} color={colors.primaryColor} />
              <View style={{borderBottomWidth:2,borderColor:colors.primaryColor,width:'50%',paddingBottom:5}}>
                <Text>Çalıştığı Firma</Text>
                <Text>Arabuleu</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  left: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    gap: 20,
    marginRight: 40,
  },
  right: {
    marginTop: 20,
    marginRight: 30,
  },

  infoContainer:{
    marginHorizontal:15
  },
  infoBox:{
    margin:5
  }
});
