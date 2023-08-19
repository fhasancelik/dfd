import {Image, StyleSheet, Text, View,ScrollView} from 'react-native';
import React, {useState} from 'react';
import HeaderText from '../../components/CoreComponents/Header/HeaderText';
import {colors} from '../../utils/constants';
import CustomInput from '../../components/CustomInput/CustomInput';
import LicanceAgreement from '../../components/LicanceAgreement';
import CustomButton from '../../components/CustomButton';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AddPhoto from '../../components/AddPhoto';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import firebase from '@react-native-firebase/app'
import storage from '@react-native-firebase/storage'
import { utils } from '@react-native-firebase/app';

import ImagePicker from 'react-native-image-picker';
const SignUpScreen = () => {
 // console.log(auth().currentUser);
  //const reference = storage().ref('black-t-shirt-sm.png');
  const [photoGallery, setPhotoGallery] = useState(null);

//auth().signOut()
//console.log(auth().currentUser)
  const [newUser, setNewUser] = useState({
 
    userName: '',
    userEmail: '',
    userPassword: '123456',
    userJob:'',
    userExperience:'',
    userCompany:''
  
  });

  const onChangeText = (key, value) => {
    setNewUser({...newUser, [key]: value});
  };

  const choosePhotoGallry = async () => {
    const result = await launchImageLibrary();
  console.log(result.assets[0].uri)
      //setPhotoGallery(result.assets[0].uri)
      setPhotoGallery(`${result.assets[0].uri}`);
    
  };
  //console.log(newUser);


  const addPhotoFirebase=async()=>{


    const { uri } = photoGallery;
    const filename = uri.substring(uri.lastIndexOf('/') + 1);

    const reference = storage().ref(`images/${filename}`);
    await reference.putFile(uri);

  }


//console.log(auth().currentUser.uid)

  const handleSignUp = async() => {
   // const reference = storage().ref('images/');


    auth()
      .createUserWithEmailAndPassword(`${newUser.userEmail}@gmail.com`, newUser.userPassword)
      .then(async() => {
   console.log('kayıt başarılı')

//user id yi güncelleiyorum
//const userId=auth().currentUser.uid
//console.log(userId)


//storage fotğraf yükle

// const task = reference.putFile(photoGallery);
// const imageUrl= await reference.getDownloadURL()

// task.then(async()=>{






// }).then(()=>{

 

// }).catch((error)=>console.log('image error',error))


firestore()
.collection('users')
.doc(auth().currentUser.uid)
.set({...newUser,userUID:auth().currentUser.uid,userPhoto:colors.img})
.then(() => {
  console.log('User added!');

});

   
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };



  return (
    <View style={styles.mainContainer}>
      <View style={styles.top}>
        <HeaderText title={'İş Hesabı'} />
      </View>
      <View style={styles.bottom}>
        <ScrollView style={styles.bottomMain}>
          <View style={styles.inputBox}>
            <CustomInput
              value={newUser.userName}
              onChangeText={text => onChangeText('userName', text)}
              placeHolder={'Kullanıcı Adı Girin'}
            />
            <CustomInput
              value={newUser.userEmail}
              onChangeText={text => onChangeText('userEmail', text)}
              placeHolder={'Email Girin'}
            />
            <CustomInput
              value={newUser.userPassword}
              onChangeText={text => onChangeText('userPassword', text)}
              placeHolder={'Şifre Girin'}
            />

<CustomInput
              value={newUser.userJob}
              onChangeText={text => onChangeText('userJob', text)}
              placeHolder={'Meslek'}
            />

<CustomInput
              value={newUser.userExperience}
              onChangeText={text => onChangeText('userExperience', text)}
              placeHolder={'Tecrübe Yılı'}
            />

<CustomInput
              value={newUser.userCompany}
              onChangeText={text => onChangeText('userCompany', text)}
              placeHolder={'Çalıştığı firma'}
            />

            <View style={styles.imageBox}>
              <AddPhoto
                onPress={() => choosePhotoGallry()}
                source={photoGallery}
              />
              <CustomButton
                onPress={() => addPhotoFirebase()}
                title={'Fotoğraf Seç'}
                style={{with: 50}}
              />
            </View>
          </View>

          <View style={styles.bottomMainBottom}>
            <LicanceAgreement />
            <CustomButton onPress={() => handleSignUp()} title={'Kayıt Ol'} />
            <View></View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.whiteColor,
  },

  top: {
    flex: 1,
  },
  bottom: {
    backgroundColor: colors.primaryColor,
    flex: 2,
  },
  bottomMain: {
    marginLeft: 50,
    width: '80%',
  },
  inputBox: {
    width: '70%',
    gap: 30,
    marginTop: 75,
  },

  bottomMainBottom: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    gap: 15,
    marginTop: 20,
  },

  imageBox: {
    flexDirection: 'row',
    gap: 15,
  },
});
