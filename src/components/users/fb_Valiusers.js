import React, {useState, useEffect, useContext} from 'react';
import {View, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import {AuthContext} from '/Users/sebastianmataortega/Desktop/reactProjects/class_06/src/context/AuthContext';

const ValiUser = props => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const{makeUser, extractUid} = useContext(AuthContext);
  // Handle user state changes
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function onAuthStateChanged(user) {
    setUser(user);
     extractUid(user.uid);
     verificarDominio(user.email)
    if (initializing) {
      setInitializing(false);
    }

  }

  function verificarDominio(correo) {
  // Obtenemos el índice del caracter @
  const indiceArroba = correo.indexOf("@");

  // Si no hay arroba, la función devuelve un string vacío
  if (indiceArroba === -1) {
    return " ";
  }

  // Extraemos el dominio a partir del índice del caracter @
  const dominio = correo.slice(indiceArroba + 1);
  makeUser(dominio);
  // Devolvemos el dominio
  return dominio;
}

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount

  }, [onAuthStateChanged]);

  if (initializing) {
    return null;
  }

  if (!user) {
    return (
      <View>
        <Text>You need to log in</Text>
      </View>
    );
  }

  return (
    <View>

    </View>
  );
};

export default ValiUser;