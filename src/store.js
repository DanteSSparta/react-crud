import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import createReducer from './reducers/default';
import { composeWithDevTools } from 'redux-devtools-extension';

function configureStore() {
	return createStore(
		createReducer(),
		composeWithDevTools(
			applyMiddleware(thunkMiddleware)
		));
}

export const defaultStore = configureStore();
