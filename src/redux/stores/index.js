import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import dataReducer from '../reducers/fetchDataReducer';

export default createStore(dataReducer, applyMiddleware(thunk));
