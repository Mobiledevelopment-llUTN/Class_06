import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

/* custom modules */
import Login from '../views/login';
import SignUp from '../views/signup';
import ViewEstudiante from '../views/viewEstudiante';
import ViewProfesor from '../views/viewProfesor';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (

    <Stack.Navigator initialRouteName='LogIn'>
        <Stack.Screen
          name="LogIn"
          component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen
          name="viewEstudiante"
          component={ViewEstudiante}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="viewProfesor"
          component={ViewProfesor}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>

    )
}

export default AuthStack;