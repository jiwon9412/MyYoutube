import { combineReducers } from 'redux';
import mode from './mode';
import player from './player';

const rootReducer = combineReducers({ mode, player });

export default rootReducer;
