import {Image, StyleSheet, Text, View} from 'react-native';
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
const SignUpScreen = () => {
  //console.log(auth().currentUser);

  const [photoGallery, setPhotoGallery] = useState(null);

  const [newUser, setNewUser] = useState({
    userName: '',
    userEmail: '',
    userPassword: '',
    userPhoto: '',
  });

  const onChangeText = (key, value) => {
    setNewUser({...newUser, [key]: value});
  };

  const choosePhotoGallry = async () => {
    const result = await launchImageLibrary();
  
      //setPhotoGallery(result.assets[0].uri)
      setNewUser({...newUser, userPhoto: `${result.assets[0].uri}`});
    
  };
  console.log(newUser);
  const saveUserWithUnId = () => {
    firestore()
      .collection('Users')
      .add(newUser)
      .then(() => {
        console.log('User added!');
      });
  };

  const saveNewUser = userId => {
    firestore()
      .collection('users')
      .doc(userId)
      .set(newUser)
      .then(() => {
        console.log('User added!');
      });
  };

  const handleSignUp = () => {
    auth()
      .createUserWithEmailAndPassword(newUser.userEmail, newUser.userPassword)
      .then(() => {
        console.log('User account created & signed in!');
        setNewUser({...newUser, userId: auth().currentUser.uid});
        //saveNewUser(auth().currentUser.uid)
        saveUserWithUnId();
        setNewUser({
          userName: '',
          userEmail: '',
          userPassword: '',
          userPhoto: '',
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
        <View style={styles.bottomMain}>
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
            <View style={styles.imageBox}>
              <AddPhoto
                onPress={() => choosePhotoGallry()}
                source={newUser.userPhoto}
              />
              <CustomButton
                onPress={() => choosePhotoGallry('Fotoğraf Seç')}
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
        </View>
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
