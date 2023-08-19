import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React,{useEffect, useState} from 'react';
import {colors} from '../../utils/constants';
import Icon from '../../components/Icon';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
const Profile = () => {

  const[id,setId]=useState(auth().currentUser?.uid)
  const[userInfo,setUserInfo]=useState({})
console.log(auth().currentUser)
    useEffect(() => {
      const subscriber = firestore()
        .collection('users')
        .doc(id)
        .onSnapshot(documentSnapshot => {
         // console.log('User data: ', documentSnapshot.data());
          setUserInfo(documentSnapshot.data())
        });
  
      // Stop listening for updates when no longer required
      return () => subscriber();
    }, [id]);
  console.log(userInfo)
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

          <Text>{userInfo.userName}</Text>
       <TouchableOpacity onPress={()=>console.log('ddd')}>
       <Text>ÇıkışYap</Text>
       </TouchableOpacity>
        </View>

        <View style={styles.right}>
   
<TouchableOpacity onPress={()=>auth().signOut()}>
        
<Icon name={'clipboard'} size={40} color={colors.primaryColor} />
</TouchableOpacity>

        </View>
      </View>

      <View style={{flex: 8, backgroundColor: colors.primaryColor}}>
        <View style={styles.infoContainer}>
          <View style={styles.infoBox}>
            <Icon name={'mail'} size={20} color={colors.primaryColor} />
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: 'white',
                alignItems: 'center',
                gap: 25,
                paddingHorizontal: 10,
                paddingVertical: 15,
              }}>
              <Icon name={'mail'} size={30} color={colors.primaryColor} />
              <View
                style={{
                  borderBottomWidth: 2,
                  borderColor: colors.primaryColor,
                  width: '50%',
                  paddingBottom: 5,
                }}>
                <Text>E-Mail</Text>
                <Text>{userInfo.userEmail}</Text>
              </View>
            </View>
          </View>
          <View style={styles.infoBox}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: 'white',
                alignItems: 'center',
                gap: 25,
                paddingHorizontal: 10,
                paddingVertical: 15,
              }}>
              <Icon
                name={'code-working'}
                size={30}
                color={colors.primaryColor}
              />
              <View
                style={{
                  borderBottomWidth: 2,
                  borderColor: colors.primaryColor,
                  width: '50%',
                  paddingBottom: 5,
                }}>
                <Text>Çalıştığı Bölüm</Text>
                <Text>{userInfo.userJob}</Text>
              </View>
            </View>
          </View>
          <View style={styles.infoBox}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: 'white',
                alignItems: 'center',
                gap: 25,
                paddingHorizontal: 10,
                paddingVertical: 15,
              }}>
              <Icon name={'layers'} size={30} color={colors.primaryColor} />
              <View
                style={{
                  borderBottomWidth: 2,
                  borderColor: colors.primaryColor,
                  width: '50%',
                  paddingBottom: 5,
                }}>
                <Text>Tecrübe Yılı</Text>
                <Text>{userInfo.userExperience}</Text>
              </View>
            </View>
          </View>
          <View style={styles.infoBox}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: 'white',
                alignItems: 'center',
                gap: 25,
                paddingHorizontal: 10,
                paddingVertical: 15,
              }}>
              <Icon name={'trophy'} size={30} color={colors.primaryColor} />
              <View
                style={{
                  borderBottomWidth: 2,
                  borderColor: colors.primaryColor,
                  width: '50%',
                  paddingBottom: 5,
                }}>
                <Text>Çalıştığı Firma</Text>
                <Text>{userInfo.userCompany}</Text>
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
    marginBottom:15
  },
  right: {
    marginTop: 20,
    marginRight: 30,
  },

  infoContainer: {
    marginHorizontal: 15,
  },
  infoBox: {
    margin: 5,
  },
});
