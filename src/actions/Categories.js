import actionResolve from './actionResolver';
import notificator from 'utils/notificator';
import * as CategoryType from 'constants/Categories';
import * as AdminPanelType from 'constants/AdminPanel';

export const getAllCategories = () => {
	return (dispatch) => {
		dispatch(actionResolve(CategoryType.GET_ALL_CATEGORY_ATTEMPT));
		fetch('https://test-task-server.herokuapp.com/api/v1/category/all')
			.then(res => {
				return res.json();
			})
			.then(categories => {
				dispatch(actionResolve(CategoryType.GET_ALL_CATEGORY_SUCCESS, categories))
			})
			.catch(error => notificator({error: error}) );
	}
}

export const createCategory = (payload) => {
	return (dispatch) => {
		let ok = true;
		dispatch(actionResolve(CategoryType.CREATE_CATEGORY_ATTEMPT));
		fetch('https://test-task-server.herokuapp.com/api/v1/category/create', {
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
					notificator({success: ['Category create']});
				}
				return res.json();
      })
      .then(response => {
				if (ok) {
					dispatch(actionResolve(CategoryType.CREATE_CATEGORY_SUCCESS, response));
					dispatch(actionResolve(AdminPanelType.ADMIN_PANEL_TOGGLE, 'view'));
				}
				else {
					dispatch(actionResolve(CategoryType.CREATE_CATEGORY_ERROR, response));
				}
      })
			.catch(error => notificator({error: error}) );
	}
}

export const deleteCategory = (payload) => {
	return (dispatch) => {
		let ok = true;
		dispatch(actionResolve(CategoryType.DELETE_CATEGORY_ATTEMPT));
		fetch('https://test-task-server.herokuapp.com/api/v1/category/' + payload, { method: "DELETE" })
      .then(res => {
				if (res.status >= 400) {
					ok = false;
					notificator({error: ['Data not found']});
				}
				else {
					notificator({success: ['Category delete']});
				}
				return res.json();
      })
      .then(response => {
				if (ok) {
					dispatch(actionResolve(CategoryType.DELETE_CATEGORY_SUCCESS, response));
				}
				else {
					dispatch(actionResolve(CategoryType.DELETE_CATEGORY_ERROR, response));
				}
      })
			.catch(error => notificator({error: error}) );
	}
}

export const updateCategory = (payload) => {
	return (dispatch) => {
		let ok = true;
		dispatch(actionResolve(CategoryType.UPDATE_CATEGORY_ATTEMPT));
		fetch('https://test-task-server.herokuapp.com/api/v1/category/update', {
			method: 'PUT',
			body: JSON.stringify(payload),
			headers: { 'Content-Type': 'application/json'}
		})
      .then(res => {
				if (res.status >= 400) {
					ok = false;
					notificator({error: ['Some form fields are missing or incorrect.']});
				}
				else {
					notificator({success: ['Category update']});
				}
				return res.json();
      })
      .then(response => {
				if (ok) {
					dispatch(actionResolve(CategoryType.UPDATE_CATEGORY_SUCCESS, response));
					dispatch(actionResolve(AdminPanelType.ADMIN_PANEL_TOGGLE, 'view'));
				}
				else {
					dispatch(actionResolve(CategoryType.UPDATE_CATEGORY_ERROR, response));
				}
      })
			.catch(error => notificator({error: error}) );
	}
}

export const getBreadcrumbs = (payload) => {
	return dispatch => {
		let ok = true;
		dispatch(actionResolve(CategoryType.GET_CATEGORY_LIST_ATTEMPT));
		fetch('https://test-task-server.herokuapp.com/api/v1/' + payload.for +'/categoryList/' + payload.id)
			.then(res => {
				if (res.status >= 400) {
					ok = false;
					notificator({error: ['Data not found']});
				}
				return res.json();
			})
			.then(response => {
				if (ok) {
					dispatch(actionResolve(CategoryType.GET_CATEGORY_LIST_SUCCESS, response));
				}
				else {
					dispatch(actionResolve(CategoryType.GET_CATEGORY_LIST_ERROR, response));
				}
			})
			.catch(error => notificator({error: error}) );
	}
}
