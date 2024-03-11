import React, {useState, useEffect, useContext} from 'react';
import {View, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import {AuthContext} from '/Users/sebastianmataortega/Desktop/reactProjects/class_06/src/context/AuthContext';

const ValiUser = props => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const{login} = useContext(AuthContext);
  // Handle user state changes
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function onAuthStateChanged(user) {
    setUser(user);
     login(user.uid);
    if (initializing) {
      setInitializing(false);
    }

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