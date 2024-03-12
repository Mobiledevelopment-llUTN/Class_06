import { View, Text, Image , Pressable, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import ValiUser from '../components/users/fb_Valiusers';
import Estudiantes from '../components/collections/estudiantes'
import Button from '/Users/sebastianmataortega/Desktop/reactProjects/class_06/src/components/Button.js';
import InsPicture from '../components/collections/galeria/insPicture';

const ViewEstudiante = ({ navigation }) => {


return (
    <SafeAreaView>
        <View>
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