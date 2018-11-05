import * as RecipeType from '../constants/Recipes';

const defaultState = {
	loading : false,
	recipes : [],
	recipeByCategory : false,
	recipe : false,
	error : {}
};

export default (state = defaultState, action) => {
	const { type, payload } = action;

	switch (type) {
		case RecipeType.CREATE_RECIPE_ATTEMPT:
			return { ...state, loading : true, error : {} };

		case RecipeType.CREATE_RECIPE_SUCCESS:
			return { ...state,
				loading : false,
				recipes : state.recipes.push(payload)
		 	};

		case RecipeType.CREATE_RECIPE_ERROR:
			return { ...state,
				loading : false,
				error : payload
			};

		case RecipeType.DELETE_RECIPE_ATTEMPT:
			return { ...state, loading : true, error : {} };

		case RecipeType.DELETE_RECIPE_SUCCESS:
			return { ...state,
				loading : false,
				recipes : state.recipes.filter(item => item._id !== payload)
			};

		case RecipeType.DELETE_RECIPE_ERROR:
			return { ...state,
				loading : false,
				error : payload
			};

		case RecipeType.GET_ALL_RECIPE_ATTEMPT:
			return { ...state, loading : true };

		case RecipeType.GET_ALL_RECIPE_SUCCESS:
			return { ...state, loading : false, recipes : payload };

		case RecipeType.GET_RECIPE_BY_CATEGORY_ATTEMPT:
			return { ...state, loading : true };

		case RecipeType.GET_RECIPE_BY_CATEGORY_SUCCESS:
			return { ...state,
				loading : false,
				recipes : payload
			};

		case RecipeType.GET_RECIPE_BY_CATEGORY_ERROR:
			return { ...state,
				loading : false
			};

		case RecipeType.GET_RECIPE_ATTEMPT:
			return { ...state, loading : true };

		case RecipeType.GET_RECIPE_SUCCESS:
			return { ...state,
				loading : false,
				recipe : payload
			};

		case RecipeType.GET_RECIPE_ERROR:
			return { ...state,
				loading : false
			};

		// case RecipeType.GET_RECIPE_CATEGORY_LIST_ATTEMPT:
		// 	return { ...state, loading : true };
    //
		// case RecipeType.GET_RECIPE_CATEGORY_LIST_SUCCESS:
		// 	return { ...state,
		// 		loading : false,
		// 		recipes : payload
		// 	};
    //
		// case RecipeType.GET_RECIPE_CATEGORY_LIST_ERROR:
		// 	return { ...state,
		// 		loading : false
		// 	};

		case RecipeType.UPDATE_RECIPE_ATTEMPT:
			return { ...state, loading : true, error : {} };

		case RecipeType.UPDATE_RECIPE_SUCCESS:
			return { ...state,
				loading : false,
				recipes : state.recipes.map(item => { return item._id === payload._id ? payload : item })
			};

		case RecipeType.UPDATE_RECIPE_ERROR:
			return { ...state,
				loading : false,
				error : payload
			};

		default:
			return state;
	}
};
