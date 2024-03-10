import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

/* custom modules */
import ViewEstudiante from '../views/viewEstudiante';
import ViewProfesor from '../views/viewProfesor';

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
          name="ViewProfesor"
          component={ViewProfesor}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    )
}

export default AppStack;