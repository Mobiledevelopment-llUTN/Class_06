/* call react libraries */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

/* custom modules */
import Login from './src/views/login';
import SignUp from './src/views/signup';
import ViewEstudiante from './src/views/viewEstudiante';
import ViewProfesor from './src/views/viewProfesor';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
};

export default App;