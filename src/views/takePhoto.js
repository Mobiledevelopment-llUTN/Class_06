import { View, Text, Image , Pressable, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import InsPicture from '../components/collections/galeria/insPicture';

const TakePhoto = ({ navigation }) => {

return (
    <SafeAreaView>
        <InsPicture/>
    </SafeAreaView>)
};

export default TakePhoto;