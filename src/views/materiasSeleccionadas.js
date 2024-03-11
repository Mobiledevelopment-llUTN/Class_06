import React from 'react';
import {Image, View, Text, TextInput, TouchableOpacity} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import {styleCourses} from '../styles/styles_courses';

import {useState} from 'react';
import {addTaskAction, retirarMateria} from '../components/actions/materiasAction';

const VmMateriasSeleccionadas = ({materias}) => {

    const dispatch = useDispatch();
    const onPressSubject = materia => {
        dispatch(retirarMateria(materia));
    };

    return (
        <View>
            <Text style={styleCourses.title}> Materias Selecciionadas</Text>
            {materias.materiasSeleccionadas.map((materia, index)=>(
                <TouchableOpacity
                key={index}
                style={styleCourses.list2}
                onPress={() => onPressSubject(materia)}>
                <Text>Remover {materia}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const mapStateToProps = ({materias}) => {
    return {
        materias,
    };
};

export default connect(mapStateToProps)(VmMateriasSeleccionadas);