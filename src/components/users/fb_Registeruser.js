import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import db from '@react-native-firebase/firestore';

const RegisterUser = () => {
  const [estado, setEstado] = useState();

  const registrar = async () => {
    auth()
      .createUserWithEmailAndPassword('sebas@gmail.com', 'Ripison89%')
      .then(() => {
        // Register data into users collection
        const user = auth().currentUser;
        db().collection('users').doc(user.uid).set({
          iduser: user.uid,
          name: 'Sebastian',
          email: 'sebas@gmail.com',
          job: 'Frontend Developer',
        });

        // Print the user state
        console.log('User account created & signed in!');
        setEstado('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
          setEstado('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
          setEstado('That email address is invalid!');
        }

        console.error(error);
      });
  };

  useEffect(() => {
    registrar();
  }, []);

  return (
    <View>
      <Text>{estado}</Text>
    </View>
  );
};

export default RegisterUser;