import { SELECCIONAR_MATERIA, RETIRAR_MATERIA} from '../actions/materiasActionType';

const INITIAL_STATE = {
    materiasDisponibles: ['Español', 'Matematicas', 'Ciencias', 'Ingles'],
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