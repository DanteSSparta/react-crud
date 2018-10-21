import actionResolve from './actionResolver';
import notificator from './../../../utils/notificator';
import * as ArticlesType from '../constants/Article';

export const getAllArticles = () => {
	return (dispatch) => {
		dispatch(actionResolve(ArticlesType.GET_ALL_ARTICLES_ATTEMPT));
		fetch('https://test-task-server.herokuapp.com/api/v1/article/all')
			.then(res => {
				return res.json();
			})
			.then(articles => {
				dispatch(actionResolve(ArticlesType.GET_ALL_ARTICLES_SUCCESS, articles))
			});
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
				}
				else {
					dispatch(actionResolve(ArticlesType.CREATE_ARTICLE_ERROR, response));
				}
      });
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
					notificator({error: ['Some form fields are missing or incorrect.']});
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
      });
	}
}

GET_ARTICLE_BY_CATEGORY_ATTEMPT
GET_ARTICLE_BY_CATEGORY_SUCCESS
GET_ARTICLE_BY_CATEGORY_ERROR

export const deleteArticle = (payload) => {
	return (dispatch) => {
		let ok = true;
		dispatch(actionResolve(ArticlesType.GET_ARTICLE_BY_CATEGORY_ATTEMPT));
		fetch('https://test-task-server.herokuapp.com/api/v1/article/' + payload, { method: "DELETE" })
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
					dispatch(actionResolve(ArticlesType.GET_ARTICLE_BY_CATEGORY_SUCCESS, response));
				}
				else {
					dispatch(actionResolve(ArticlesType.GET_ARTICLE_BY_CATEGORY_ERROR, response));
				}
      });
	}
}

export const mostReadedAttempt = () => {
	return (dispatch) => {
		dispatch(actionResolve(ArticleType.GET_RECENT_AND_MOSTREADED_ATTEMPT));
		ScamFighterAPI.getRecentAndMostReaded(dispatch);
	};
};

export const mostReadedSuccess = (payload) => {
	return (dispatch) => {
		let data = {
			_isMostReatedLoaded : true,
			recentArticles: payload.recent,
			mostReadedArticles: payload.mostReaded
		};
		dispatch(actionResolve(ArticleType.GET_RECENT_AND_MOSTREADED_SUCCESS, data));
	};
};

export const articlesAttempt = (payload) => {
	return (dispatch) => {
		ScamFighterAPI.getAllArticles(payload, dispatch);
	};
};

export const articlesSuccess = (payload) => {
	return (dispatch) => {
		let data = {
			_isRecentArticlesLoaded : true,
			_isBlogArticlesLoaded : true,
			allArticles: payload.articles,
			filters : payload.filters
		};
		dispatch(actionResolve(ArticleType.GET_ALL_ARTICLES_SUCCESS, data));
	};
};

export const singleArticlesAttempt = (payload) => {
	return (dispatch) => {
		dispatch(actionResolve(ArticleType.SF_GET_SINGLE_ARTICLE_ATTEMPT));
		ScamFighterAPI.getSingleArticle(payload, dispatch);
	};
};

export const singleArticlesSuccess = (payload) => {
	return (dispatch) => {
		let data = {
			_isSingleArticleLoaded : true,
			article : payload,
		};
		dispatch(actionResolve(ArticleType.SF_GET_SINGLE_ARTICLE_SUCCESS, data));
	};
};

// export const actionOnArticlesSuccess = (payload) => {
// 	return (dispatch) => {
// 		dispatch(actionResolve(ArticleType.UPDATE_USER_QUERY, payload.query));
// 	};
// };

export const initializeArticles = (payload) => {
	return (dispatch) => {
		let data = {
			_isRecentArticlesLoaded : Object.keys(payload.articles.recent).length ? true : false,
			_isSingleArticleLoaded : Object.keys(payload.single_article).length ? true : false,
			_isBlogArticlesLoaded : Object.keys(payload.articles.all).length ? true : false,
			recentArticles: payload.articles ? payload.articles.recent : false,
			mostReadedArticles: payload.articles ? payload.articles.mostReaded : false,
			allArticles: payload.articles.all ? payload.articles.all : false,
			article : Object.keys(payload.single_article).length ? payload.single_article : false,
			filters : Object.keys(payload.articles.all).length ? payload.articles.filters : false,
		};
		dispatch(actionResolve(ArticleType.INITIALIZE, data));
	};
};
