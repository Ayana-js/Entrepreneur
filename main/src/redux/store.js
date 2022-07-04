import { configureStore } from '@reduxjs/toolkit'
import formReducer from './form-reducer';
import Idreducer from './id-reducer';
import reducer from './reducer';

const store = configureStore({reducer: {
    reducer: reducer,
    idReducer: Idreducer,
    formReducer: formReducer
}})

window.__store__ = store
 
export default store