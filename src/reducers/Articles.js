import * as ArticlesType from '../constants/Articles';

const defaultState = {
	loading : false,
	articles : [],
	article : false,
	error : {}
};

export default (state = defaultState, action) => {
	const { type, payload } = action;

	switch (type) {
		case ArticlesType.CREATE_ARTICLE_ATTEMPT:
			return { ...state, loading : true, error : {} };

		case ArticlesType.CREATE_ARTICLE_SUCCESS:
			return { ...state,
				loading : false,
				articles : state.articles.push(payload)
		 	};

		case ArticlesType.CREATE_ARTICLE_ERROR:
			return { ...state,
				loading : false,
				error : payload
			};

		case ArticlesType.DELETE_ARTICLE_ATTEMPT:
			return { ...state, loading : true, error : {} };

		case ArticlesType.DELETE_ARTILCE_SUCCESS:
			return { ...state,
				loading : false,
				articles : state.articles.filter(item => item._id !== payload)
			};

		case ArticlesType.DELETE_ARTILCE_ERROR:
			return { ...state,
				loading : false,
				error : payload
			};

		case ArticlesType.GET_ALL_ARTICLES_ATTEMPT:
			return { ...state, loading : true };

		case ArticlesType.GET_ALL_ARTICLES_SUCCESS:
			return { ...state, loading : false, articles : payload };

		case ArticlesType.GET_ARTICLE_BY_CATEGORY_ATTEMPT:
			return { ...state, loading : true };

		case ArticlesType.GET_ARTICLE_BY_CATEGORY_SUCCESS:
			return { ...state,
				loading : false,
				articles : payload
			};

		case ArticlesType.GET_ARTICLE_BY_CATEGORY_ERROR:
			return { ...state,
				loading : false
			};

		case ArticlesType.GET_ARTICLE_ATTEMPT:
			return { ...state, loading : true };

		case ArticlesType.GET_ARTICLE_SUCCESS:
			return { ...state,
				loading : false,
				article : payload
			};

		case ArticlesType.GET_ARTICLE_ERROR:
			return { ...state,
				loading : false
			};

		// case ArticlesType.GET_ARTICLE_CATEGORY_LIST_ATTEMPT:
		// 	return { ...state, loading : true };
		//
		// case ArticlesType.GET_ARTICLE_CATEGORY_LIST_SUCCESS:
		// 	return { ...state,
		// 		loading : false,
		// 		article : payload
		// 	};
		//
		// case ArticlesType.GET_ARTICLE_CATEGORY_LIST_ERROR:
		// 	return { ...state,
		// 		loading : false
		// 	};

		case ArticlesType.UPDATE_ARTICLE_ATTEMPT:
			return { ...state, loading : true, error : {} };

		case ArticlesType.UPDATE_ARTICLE_SUCCESS:
			return { ...state,
				loading : false,
				articles : state.articles.map(item => { return item._id === payload._id ? payload : item })
			};

		case ArticlesType.UPDATE_ARTICLE_ERROR:
			return { ...state,
				loading : false,
				error : payload
			};

		default:
			return state;
	}
};
