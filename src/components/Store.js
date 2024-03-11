import {combineReducers, legacy_createStore} from 'redux';
import materiasReducer from './reducers/materiasReducer';

const ConfigureStore = () => {
    const reducers = combineReducers({
        materias: materiasReducer,
    });
    const store = legacy_createStore(reducers);
    return store;
};

export default ConfigureStore;