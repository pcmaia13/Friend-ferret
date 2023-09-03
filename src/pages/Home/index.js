import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { styles } from './styles';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../Services/firebaseConfig'; 


class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>wlcome Home</Text>
      </View>
    );
  }
}

export default HomeScreen;