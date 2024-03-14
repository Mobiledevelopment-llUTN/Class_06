import { View, Text, Image , Pressable, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import ValiUser from '../components/users/fb_Valiusers';
import {AuthContext} from '../context/AuthContext';
import Button from '/Users/sebastianmataortega/Desktop/reactProjects/class_06/src/components/Button.js';


const MainView = ({ navigation }) => {
const{userEmail} = useContext(AuthContext);
useEffect(() => {
    if (userEmail) {
      // Suponiendo que `userEmail` contenga el dominio completo o parcial del correo electrónico
      // y deseas navegar basado en este.
      if (userEmail.includes('est.utn.ac.cr')) {
        navigation.navigate('Estudiantes');
      } else {
        // Asumiendo que cualquier otro correo es de un profesor
        navigation.navigate('Profesores');
      }
    }
  }, [userEmail, navigation]);

return (
    <View>
      <ValiUser />
    </View>
  );
}
export default MainView;