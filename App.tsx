/* call react libraries */
import React, {useContext} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

/* custom modules */
import AppNav from './src/navigation/AppNav';
import AuthProvider from './src/context/AuthContext';

const App = () => {

  return (
    <AuthProvider>
    <AppNav/>
    </AuthProvider>
  );
};

export default App;