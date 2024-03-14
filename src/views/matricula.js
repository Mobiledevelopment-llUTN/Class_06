import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import Button from '/Users/sebastianmataortega/Desktop/reactProjects/class_06/src/components/Button.js';
import VmMateriasDisponibles from '../views/materiasDisponibles';
import VmMateriasSeleccionadas from '../views/materiasSeleccionadas';
import ConfigureStore from '../components/Store';

const Matricula = ({navigation}) => {
  const store = ConfigureStore();
  return (
    <Provider store={store}>
      <View>
        <VmMateriasDisponibles />
        <VmMateriasSeleccionadas />
        <Button
        title="Matricular"
        filled
        style={{
            marginTop: 150,
            marginBottom: 4,
        }}/>
      </View>
    </Provider>
  );
};

export default Matricula;
