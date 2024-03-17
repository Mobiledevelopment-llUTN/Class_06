import {combineReducers, legacy_createStore} from 'redux';
import MateriasReducer from './reducers/materiasReducer';

const ConfigureStore = () => {
    const reducers = combineReducers({
        materias: MateriasReducer,
    });
    const store = legacy_createStore(reducers);
    return store;
};

export default ConfigureStore;