import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import { tasksReducer, buttonStatusReducer, optionsTasksReducer } from '../reducers';

const reducer = combineReducers({
	tasks: tasksReducer,
	buttonStatus: buttonStatusReducer,
	optionsTasks: optionsTasksReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
