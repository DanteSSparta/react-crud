import actionResolve from './actionResolver';
import notificator from 'utils/notificator';
import * as RecipeType from 'constants/Recipes';
import * as AdminPanelType from 'constants/AdminPanel';

export const getAllRecipes = () => {
	return (dispatch) => {
		dispatch(actionResolve(RecipeType.GET_ALL_RECIPE_ATTEMPT));
		fetch('https://test-task-server.herokuapp.com/api/v1/recipe/all')
			.then(res => {
				return res.json();
			})
			.then(repices => {
				dispatch(actionResolve(RecipeType.GET_ALL_RECIPE_SUCCESS, repices))
			});
	}
}

export const createRecipe = (payload) => {
	return (dispatch) => {
		let ok = true;
		dispatch(actionResolve(RecipeType.CREATE_RECIPE_ATTEMPT));
		fetch('https://test-task-server.herokuapp.com/api/v1/recipe/create', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json'}
    })
      .then(res => {
				if (res.status >= 400) {
					ok = false;
					notificator({error: ['Some form fields are missing or incorrect.']});
				}
				else {
					notificator({success: ['Recipe create']});
				}
				return res.json();
      })
      .then(response => {
				if (ok) {
					dispatch(actionResolve(RecipeType.CREATE_RECIPE_SUCCESS, response));
					dispatch(actionResolve(AdminPanelType.ADMIN_PANEL_TOGGLE, 'view'));
				}
				else {
					dispatch(actionResolve(RecipeType.CREATE_RECIPE_ERROR, response));
				}
      });
	}
}

export const deletRecipe = (payload) => {
	return (dispatch) => {
		let ok = true;
		dispatch(actionResolve(RecipeType.DELETE_ARTICLE_ATTEMPT));
		fetch('https://test-task-server.herokuapp.com/api/v1/recipe/' + payload, { method: "DELETE" })
      .then(res => {
				if (res.status >= 400) {
					ok = false;
					notificator({error: ['Some form fields are missing or incorrect.']});
				}
				else {
					notificator({success: ['Article delete']});
				}
				return res.json();
      })
      .then(response => {
				if (ok) {
					dispatch(actionResolve(RecipeType.DELETE_ARTILCE_SUCCESS, response));
				}
				else {
					dispatch(actionResolve(RecipeType.DELETE_ARTILCE_ERROR, response));
				}
      });
	}
}

export const getRecipesByCategory = (payload) => {
	return (dispatch) => {
		let ok = true;
		dispatch(actionResolve(RecipeType.GET_ARTICLE_BY_CATEGORY_ATTEMPT));
		fetch('https://test-task-server.herokuapp.com/api/v1/recipe/byCategory/' + payload)
      .then(res => {
				if (res.status >= 400) {
					ok = false;
					notificator({error: ['Category not found']});
				}
				return res.json();
      })
      .then(response => {
				if (ok) {
					dispatch(actionResolve(RecipeType.GET_ARTICLE_BY_CATEGORY_SUCCESS, response));
				}
				else {
					dispatch(actionResolve(RecipeType.GET_ARTICLE_BY_CATEGORY_ERROR));
				}
      });
	}
}

export const getRecipe = (payload) => {
	return (dispatch) => {
		let ok = true;
		dispatch(actionResolve(RecipeType.GET_ARTICLE_ATTEMPT));
		fetch('https://test-task-server.herokuapp.com/api/v1/recipe/item/' + payload)
      .then(res => {
				if (res.status >= 400) {
					ok = false;
					notificator({error: ['Article not found']});
				}
				return res.json();
      })
      .then(response => {
				if (ok) {
					dispatch(actionResolve(RecipeType.GET_ARTICLE_SUCCESS, response));
				}
				else {
					dispatch(actionResolve(RecipeType.GET_ARTICLE_ERROR));
				}
      });
	}
}

export const updateRecipe = (payload) => {
	return (dispatch) => {
		let ok = true;
		dispatch(actionResolve(RecipeType.UPDATE_ARTICLE_ATTEMPT));
		fetch('https://test-task-server.herokuapp.com/api/v1/recipe/create', {
			method: 'POST',
			body: JSON.stringify(payload),
			headers: { 'Content-Type': 'application/json'}
		})
      .then(res => {
				if (res.status >= 400) {
					ok = false;
					notificator({error: ['Some form fields are missing or incorrect.']});
				}
				else {
					notificator({success: ['Article update']});
				}
				return res.json();
      })
      .then(response => {
				if (ok) {
					dispatch(actionResolve(RecipeType.UPDATE_ARTICLE_SUCCESS, response));
					dispatch(actionResolve(AdminPanelType.ADMIN_PANEL_TOGGLE, 'view'));
				}
				else {
					dispatch(actionResolve(RecipeType.UPDATE_ARTICLE_ERROR, response));
				}
      });
	}
}
