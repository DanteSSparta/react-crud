import { combineReducers } from 'redux';
import Articles from './Articles';
import Categories from './Categories';
import Recipes from './Recipes';
import AdminPanel from './AdminPanel';

export default function createReducer() {
	return combineReducers({
		articles: ArticlesReducer,
		categories: Categories,
		recipes: Recipes,
		adminPanel: AdminPanel
	});
}
