import { View, Text, Image , Pressable, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import ValiUser from '../components/users/fb_Valiusers';
import Estudiantes from '../components/collections/estudiantes'
import Button from '/Users/sebastianmataortega/Desktop/reactProjects/class_06/src/components/Button.js';

const ViewEstudiante = ({ navigation }) => {


return (
    <SafeAreaView>
        <View>
        <ValiUser/>
        <Estudiantes/>
        <Button
        title="Matricular Cursos"
        filled
        style={{
            marginTop: 250,
            marginBottom: 4,
        }}
        onPress={() => navigation.navigate("Matricula")}/>
        </View>
    </SafeAreaView>)
};

export default ViewEstudiante;