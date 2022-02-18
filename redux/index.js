import { combineReducers, createStore } from 'redux';

import StateProvider from './StateProvider';

const store = createStore(
    combineReducers({ vendisVoyage: StateProvider })
    //	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
