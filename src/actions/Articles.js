import actionResolve from './actionResolver';
import notificator from 'utils/notificator';
import * as ArticlesType from 'constants/Articles';
import * as AdminPanelType from 'constants/AdminPanel';

export const getAllArticles = () => {
	return (dispatch) => {
		dispatch(actionResolve(ArticlesType.GET_ALL_ARTICLES_ATTEMPT));
		fetch('https://test-task-server.herokuapp.com/api/v1/article/all')
			.then(res => {
				return res.json();
			})
			.then(articles => {
				dispatch(actionResolve(ArticlesType.GET_ALL_ARTICLES_SUCCESS, articles))
			})
			.catch(error => notificator({error: error}) );
	}
}

export const createArticle = (payload) => {
	return (dispatch) => {
		let ok = true;
		dispatch(actionResolve(ArticlesType.CREATE_ARTICLE_ATTEMPT));
		fetch('https://test-task-server.herokuapp.com/api/v1/article/create', {
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
					notificator({success: ['Article create']});
				}
				return res.json();
      })
      .then(response => {
				if (ok) {
					dispatch(actionResolve(ArticlesType.CREATE_ARTICLE_SUCCESS, response));
					dispatch(actionResolve(AdminPanelType.ADMIN_PANEL_TOGGLE, 'view'));
				}
				else {
					dispatch(actionResolve(ArticlesType.CREATE_ARTICLE_ERROR, response));
				}
      })
			.catch(error => notificator({error: error}) );
	}
}

export const deleteArticle = (payload) => {
	return (dispatch) => {
		let ok = true;
		dispatch(actionResolve(ArticlesType.DELETE_ARTICLE_ATTEMPT));
		fetch('https://test-task-server.herokuapp.com/api/v1/article/' + payload, { method: "DELETE" })
      .then(res => {
				if (res.status >= 400) {
					ok = false;
					notificator({error: ['Data not found']});
				}
				else {
					notificator({success: ['Article delete']});
				}
				return res.json();
      })
      .then(response => {
				if (ok) {
					dispatch(actionResolve(ArticlesType.DELETE_ARTILCE_SUCCESS, response));
				}
				else {
					dispatch(actionResolve(ArticlesType.DELETE_ARTILCE_ERROR, response));
				}
      })
			.catch(error => notificator({error: error}) );
	}
}

export const getArticlesByCategory = (payload) => {
	return (dispatch) => {
		let ok = true;
		dispatch(actionResolve(ArticlesType.GET_ARTICLE_BY_CATEGORY_ATTEMPT));
		fetch('https://test-task-server.herokuapp.com/api/v1/article/byCategory/' + payload)
      .then(res => {
				if (res.status >= 400) {
					ok = false;
					notificator({error: ['Category not found']});
				}
				return res.json();
      })
      .then(response => {
				if (ok) {
					dispatch(actionResolve(ArticlesType.GET_ARTICLE_BY_CATEGORY_SUCCESS, response));
				}
				else {
					dispatch(actionResolve(ArticlesType.GET_ARTICLE_BY_CATEGORY_ERROR));
				}
      })
			.catch(error => notificator({error: error}) );
	}
}

export const getArticle = (payload) => {
	return (dispatch) => {
		let ok = true;
		dispatch(actionResolve(ArticlesType.GET_ARTICLE_ATTEMPT));
		fetch('https://test-task-server.herokuapp.com/api/v1/article/item/' + payload)
      .then(res => {
				if (res.status >= 400) {
					ok = false;
					notificator({error: ['Article not found']});
				}
				return res.json();
      })
      .then(response => {
				if (ok) {
					dispatch(actionResolve(ArticlesType.GET_ARTICLE_SUCCESS, response));
				}
				else {
					dispatch(actionResolve(ArticlesType.GET_ARTICLE_ERROR));
				}
      })
			.catch(error => notificator({error: error}) );
	}
}

export const updateArticle = (payload) => {
	return (dispatch) => {
		let ok = true;
		dispatch(actionResolve(ArticlesType.UPDATE_ARTICLE_ATTEMPT));
		fetch('https://test-task-server.herokuapp.com/api/v1/article/update', {
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
					notificator({success: ['Article update']});
				}
				return res.json();
      })
      .then(response => {
				if (ok) {
					dispatch(actionResolve(ArticlesType.UPDATE_ARTICLE_SUCCESS, response));
					dispatch(actionResolve(AdminPanelType.ADMIN_PANEL_TOGGLE, 'view'));
				}
				else {
					dispatch(actionResolve(ArticlesType.UPDATE_ARTICLE_ERROR, response));
				}
      })
			.catch(error => notificator({error: error}) );
	}
}
