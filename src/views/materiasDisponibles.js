import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import {styleCourses} from '../styles/styles_courses';
import { materiaSeleccionada } from '../components/actions/materiasAction';


const VmMateriasDisponibles = ({materias}) => {
    const dispatch = useDispatch();
    const onPressSubject = materia => {
        dispatch(materiaSeleccionada(materia));
    };

    return (
       <View>
            <Text style={styleCourses.title}>Materias Disponibles</Text>
            {materias.materiasDisponibles.map((materia ,index) => (
                <TouchableOpacity
                key={index}
                style={styleCourses.list1}
                onPress={() => onPressSubject(materia)}>
                <Text>Agregar {materia}</Text>
                </TouchableOpacity>
            ))}
       </View>
    );
};

const mapStateToProps = ({materias}) => {
    return {materias};
};

export default connect(mapStateToProps)(VmMateriasDisponibles);