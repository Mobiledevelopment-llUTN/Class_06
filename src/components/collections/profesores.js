import React, {useEffect, useState, useContext} from 'react';
import {StyleSheet, View, Image, Text, Button, SafeAreaView, FlatList} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '/Users/sebastianmataortega/Desktop/reactProjects/class_06/src/context/AuthContext';
import UserInfoStyles from '/Users/sebastianmataortega/Desktop/reactProjects/class_06/src/styles/userInfoStyles.js';

function Profesores({}){
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [profesores, setProfesores] = useState([]); // Initial empty array of users
  const{id} = useContext(AuthContext);
  useEffect(() => {
    const subscriber = firestore()
      .collection('profesores')
      .doc(id)
      .onSnapshot(documentSnapshot => {
        setProfesores(documentSnapshot.data());
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, [id]);
  return(
    <SafeAreaView>
     <View style={UserInfoStyles.container}>
        <Text styles={UserInfoStyles.idText}>ID:{profesores.idProfesor}</Text>
        <Text styles={UserInfoStyles.text}>Nombre:{profesores.Nombre}</Text>
        <Text styles={UserInfoStyles.text}>Edad:{profesores.Edad}</Text>
        <Text styles={UserInfoStyles.text}>Correo:{profesores.correo}</Text>
        <Text styles={UserInfoStyles.text}>Rol:{profesores.rol}</Text>
      </View>
    </SafeAreaView>
  )
}
export default Profesores;