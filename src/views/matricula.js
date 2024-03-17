import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import Button from '/Users/sebastianmataortega/Desktop/reactProjects/class_06/src/components/Button.js';
import VmMateriasDisponibles from '../views/materiasDisponibles';
import VmMateriasSeleccionadas from '../views/materiasSeleccionadas';
import Cursos from '../components/collections/cursos'
import ConfigureStore from '../components/Store';

const Matricula = ({navigation}) => {
  const store = ConfigureStore();
  return (
    <Provider store={store}>
      <View>
        <VmMateriasDisponibles />
        <VmMateriasSeleccionadas />
        <Cursos/>
            <View style={{marginTop: 400}}>
                <Button
                title="Matricular"
                filled
                style={{
                    marginTop: 12,
                    marginBottom: 4,
                }}/>
                <Button
                title="Regresar"
                filled
                style={{
                    marginTop: 12,
                    marginBottom: 4,
                }}
                onPress={()=> navigation.navigate("Estudiantes")}/>
            </View>
      </View>
    </Provider>
  );
};

export default Matricula;
