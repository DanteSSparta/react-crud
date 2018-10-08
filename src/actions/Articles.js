import actionResolve from './actionResolver';
import ScamFighterAPI from '../api/ScamFighterAPI';

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
