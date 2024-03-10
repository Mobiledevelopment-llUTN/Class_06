import { View, Text, Image , Pressable, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import ValiUser from '../components/users/fb_Valiusers';
import Profesores from '../components/collections/profesores'
const ViewProfesor= ({ navigation }) => {
    return (<SafeAreaView>
        <View>
        <Text>View Profesor</Text>
        <Profesores/>
        <ValiUser/>
        </View>
    </SafeAreaView>)
};

export default ViewProfesor;