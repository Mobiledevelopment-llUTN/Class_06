import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

/* custom modules */
import ViewEstudiante from '../views/viewEstudiante';
import ViewProfesor from '../views/viewProfesor';
import Matricula from '../views/matricula';
const Stack = createNativeStackNavigator();

const AppStack = () => {
    return (
    <Stack.Navigator initialRouteName='Estudiantes'>
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
          name="Matricula"
          component={Matricula}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    )
}

export default AppStack;