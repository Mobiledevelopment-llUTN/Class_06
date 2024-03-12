import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

/* custom modules */
import ViewEstudiante from '../views/viewEstudiante';
import ViewProfesor from '../views/viewProfesor';
import Matricula from '../views/matricula';
import TakePhoto from '../views/takePhoto';
import MainView from '../views/mainView';
const Stack = createNativeStackNavigator();

const AppStack = () => {
    return (
    <Stack.Navigator initialRouteName='Main'>
        <Stack.Screen
          name="Estudiantes"
          component={ViewEstudiante}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Profesores"
          component={ViewProfesor}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Main"
          component={MainView}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Matricula"
          component={Matricula}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Photo"
          component={TakePhoto}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    )
}

export default AppStack;