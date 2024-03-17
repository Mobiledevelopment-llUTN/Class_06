import React, {useEffect, useState, useContext} from 'react';
import {StyleSheet, View, Image, Text, Button, SafeAreaView, FlatList} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '/Users/sebastianmataortega/Desktop/reactProjects/class_06/src/context/AuthContext';

const Cursos = () => {
const{extractCourses} = useContext(AuthContext);

useEffect(() => {
    const subscriber = firestore()
    .collection('cursos')
    .onSnapshot(querySnapshot => {
      const cursos = [];

      querySnapshot.forEach(documentSnapshot => {
        cursos.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id,
        });
      });
        //console.log(cursos);
      extractCourses(cursos);
    });

  // Unsubscribe from events when no longer in use
  return () => subscriber();
}, []);

  return (
    <View>

    </View>
  )

}
export default Cursos;