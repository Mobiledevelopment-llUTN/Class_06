import { SELECCIONAR_MATERIA, RETIRAR_MATERIA} from './materiasActionType';

export const materiaSeleccionada = nomMateria => ({
    type: SELECCIONAR_MATERIA,
    payload: nomMateria,
});

export const retirarMateria = nombMateria => ({
    type: RETIRAR_MATERIA,
    payload: nombMateria,
});