import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import auth from '@react-native-firebase/auth';

const LoginUser = () => {
  const [estado, setEstado] = useState();

  const autenticar = async () => {
    auth()
      .signInWithEmailAndPassword('sebas@gmail.com', 'Ripison89%')
      .then(() => {
        console.log('User is signed in!');
        setEstado('User is signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/invalid-credential') {
          console.log(
            'The supplied auth credential is incorrect, malformed or has expired!',
          );
          setEstado(
            'The supplied auth credential is incorrect, malformed or has expired!',
          );
        }
      });
  };

  useEffect(() => {
    autenticar();
  }, []);

  return (
    <View>
      <Text>{estado}</Text>
    </View>
  );
};

export default LoginUser;