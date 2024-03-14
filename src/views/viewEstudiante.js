import { View, Text, Image , Pressable, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useContext } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import {AuthContext} from '../context/AuthContext';
import ValiUser from '../components/users/fb_Valiusers';
import Estudiantes from '../components/collections/estudiantes'
import Button from '/Users/sebastianmataortega/Desktop/reactProjects/class_06/src/components/Button.js';
import InsPicture from '../components/collections/galeria/insPicture';

const ViewEstudiante = ({ navigation }) => {
const{userEmail, logout} = useContext(AuthContext);

const exit = () => {
    logout()
}

return (
    <SafeAreaView>
        <View>
        <Button
        title="Salir"
        filled
        style={{
            marginTop: 150,
            marginBottom: 4,
        }}
        onPress={exit}/>
        <Estudiantes/>
        <Button
        title="Matricular Cursos"
        filled
        style={{
            marginTop: 150,
            marginBottom: 4,
        }}
        onPress={() => navigation.navigate("Matricula")}/>
        <Button
        title="Tomar Foto"
        filled
        style={{
            marginTop: 150,
            marginBottom: 4,
        }}
        onPress={() => navigation.navigate("Photo")}/>
        </View>
    </SafeAreaView>)
};

export default ViewEstudiante;