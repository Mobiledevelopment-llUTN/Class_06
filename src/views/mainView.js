import { View, Text, Image , Pressable, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useContext } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import ValiUser from '../components/users/fb_Valiusers';
import {AuthContext} from '../context/AuthContext';
import ViewEstudiante from '../views/viewEstudiante';
import ViewProfesor from '../views/viewProfesor';
const MainView = ({ navigation }) => {
const{userEmail, userToken} = useContext(AuthContext);

if(userEmail == 'est.utn.ac.cr'){
    return(
    <View>
        <ValiUser/>
        <ViewEstudiante/>
    </View>
    )
  }
  else{
    return(
    <View>
        <ValiUser/>
        <ViewProfesor/>
    </View>
    )
}
}
export default MainView;