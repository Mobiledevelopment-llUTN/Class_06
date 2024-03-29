import React, {useContext} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthStack from './AuthStack';
import AppStack from './AppStack';
import {AuthContext} from '../context/AuthContext';

function AppNav () {
const{isLoading, userToken} = useContext(AuthContext);
  if (isLoading){
    <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
    <ActivityIndicator size={'large'}/>
    </View>
  }

  if(userToken !== null){
    return(
    <NavigationContainer>
        <AppStack/>
    </NavigationContainer>
    )
  }

    return(
    <NavigationContainer>
    <AuthStack/>
    </NavigationContainer>
    )
}

export default AppNav;