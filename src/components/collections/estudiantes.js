import React, {useEffect, useState, useContext} from 'react';
import {StyleSheet, View, Image, Text, Button, SafeAreaView, FlatList} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '/Users/sebastianmataortega/Desktop/reactProjects/class_06/src/context/AuthContext';
import UserInfoStyles from '/Users/sebastianmataortega/Desktop/reactProjects/class_06/src/styles/userInfoStyles.js';

function Estudiantes({}){
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [estudiantes, setEstudiantes] = useState([]); // Initial empty array of users
  const{id} = useContext(AuthContext);
  useEffect(() => {
    console.log(id);
    const subscriber = firestore()
      .collection('estudiantes')
      .doc(id.uid)
      .onSnapshot(documentSnapshot => {
        setEstudiantes(documentSnapshot.data());
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, [id.uid]);

  return(
    <SafeAreaView>
     <View style={UserInfoStyles.container}>
        <Text styles={UserInfoStyles.idText}>ID:{estudiantes.idEstudiante}</Text>
        <Text styles={UserInfoStyles.text}>Nombre:{estudiantes.Nombre}</Text>
        <Text styles={UserInfoStyles.text}>Edad:{estudiantes.Edad}</Text>
        <Text styles={UserInfoStyles.text}>Correo:{estudiantes.correo}</Text>
        <Text styles={UserInfoStyles.text}>Rol:{estudiantes.rol}</Text>
      </View>
    </SafeAreaView>
  )
}
export default Estudiantes;