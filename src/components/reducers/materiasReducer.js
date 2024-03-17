import React, {useEffect, useState, useContext} from 'react';
import { SELECCIONAR_MATERIA, RETIRAR_MATERIA} from '../actions/materiasActionType';
import {AuthContext} from '/Users/sebastianmataortega/Desktop/reactProjects/class_06/src/context/AuthContext';

const INITIAL_STATE = {
    materiasDisponibles: ['Diseño de Experiencia de Usuarios', 'Filosofía', 'Principios de Seguridad', 'Calculo y Álgebra Lineal l'],
    materiasSeleccionadas: [],
};

const MateriasReducer = (state = INITIAL_STATE, action) => {
    const {materiasDisponibles, materiasSeleccionadas} = state;
    let materia, newState;

    switch (action.type) {
        case SELECCIONAR_MATERIA:
            materia = action.payload;
            materiasDisponibles.splice(materiasDisponibles.indexOf(materia), 1);
            newState = {
                materiasSeleccionadas:[...materiasSeleccionadas, materia],
                materiasDisponibles: [...materiasDisponibles],
            };
            return newState;

        case RETIRAR_MATERIA:
            materia = action.payload;
            materiasSeleccionadas.splice(materiasSeleccionadas.indexOf(materia), 1);

            newState = {
                materiasSeleccionadas:[...materiasSeleccionadas],
                materiasDisponibles:[...materiasDisponibles, materia],
            };
            return newState;

        default:
        return state;
    }
};

export default MateriasReducer;