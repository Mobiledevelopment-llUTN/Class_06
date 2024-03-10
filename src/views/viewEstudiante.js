import { View, Text, Image , Pressable, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import ValiUser from '../components/users/fb_Valiusers';
import Estudiantes from '../components/collections/estudiantes'
const ViewEstudiante = ({ navigation }) => {

return (<SafeAreaView>
        <View>
        <Text>View Estudiante</Text>
        <ValiUser/>
        <Estudiantes/>
        </View>
    </SafeAreaView>)
};

export default ViewEstudiante;