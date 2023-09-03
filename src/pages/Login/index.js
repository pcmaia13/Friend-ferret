import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { styles } from './styles';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../Services/firebaseConfig'; 

const handleLogin = () => {
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {

    const user = userCredential.user;

    console.log (user);
    setUser(user);

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log(errorMessage);

  });
};

export default function Login({navigation}){
    return(
        <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() } >
            <View style={styles.Container}>
                <View style={styles.UserImage} >
                    <Image source={require('../../../assets/user-blue.png')}
                    style={styles.Image}  />
                </View>
                <View style={styles.form} >
                    <TextInput onPress={handleLogin} style={styles.inputEmail} placeholder='Email'
                    autoCompleteType= 'email' autoCapitalize='none'
                    placeholderTextColor='#000' />
                    <TextInput onPress={handleLogin} style={styles.inputPassword} placeholder='Senha'
                    autoCompleteType='password' autoCapitalize='none' autoCorrect={true}
                    placeholderTextColor='#000' />
                    <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.buttonForm} >
                        <Text style={styles.textButton}>Entrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('createuser')} >
                        <Text style={styles.ButtonCreate} >Ainda não possui uma conta!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}