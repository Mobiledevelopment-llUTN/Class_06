import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';

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
      </View>
    </Provider>
  );
};

export default Matricula;
