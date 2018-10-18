import * as CategoryType from '../constants/Categories';

const defaultState = {
	loading : false,
	categories : [],
	breadcrumbs : [],
	error : {}
};

export default (state = defaultState, action) => {
	const { type, payload } = action;

	switch (type) {
		case ArticlesType.CREATE_CATEGORY_ATTEMPT:
			return { ...state, loading : true, error : {} };

		case ArticlesType.CREATE_CATEGORY_SUCCESS:
			return { ...state,
				loading : false,
				categories : state.categories.push(payload)
		 	};

		case ArticlesType.CREATE_CATEGORY_ERROR:
			return { ...state,
				loading : false,
				error : payload
			};

		case ArticlesType.DELETE_CATEGORY_ATTEMPT:
			return { ...state, loading : true, error : {} };

		case ArticlesType.DELETE_CATEGORY_SUCCESS:
			return { ...state,
				loading : false,
				categories : state.categories.filter(item => item._id !== payload)
			};

		case ArticlesType.DELETE_CATEGORY_ERROR:
			return { ...state,
				loading : false,
				error : payload
			};

		case ArticlesType.GET_ALL_CATEGORY_ATTEMPT:
			return { ...state, loading : true };

		case ArticlesType.GET_ALL_CATEGORY_SUCCESS:
			return { ...state, loading : false, categories : payload };

		case ArticlesType.GET_CATEGORY_LIST_ATTEMPT:
			return { ...state, loading : true };

		case ArticlesType.GET_CATEGORY_LIST_SUCCESS:
			return { ...state,
				loading : false,
				breadcrumbs : payload
			};

		case ArticlesType.GET_CATEGORY_LIST_ERROR:
			return { ...state,
				loading : false
			};

		case ArticlesType.UPDATE_CATEGORY_ATTEMPT:
			return { ...state, loading : true, error : {} };

		case ArticlesType.UPDATE_CATEGORY_SUCCESS:
			return { ...state,
				loading : false,
				categories : state.categories.map(item => { return item._id === payload._id ? payload : item })
			};

		case ArticlesType.UPDATE_CATEGORY_ERROR:
			return { ...state,
				loading : false,
				error : payload
			};

		default:
			return state;
	}
};
