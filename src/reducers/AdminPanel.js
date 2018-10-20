import * as AdminPanelType from '../constants/AdminPanel';

const defaultState = {
	state : 'view'
};

export default (state = defaultState, action) => {
	const { type, payload } = action;

	switch (type) {
		case ArticlesType.VIEW_STATE:
			return { ...state, state : 'view' };

		case ArticlesType.CREATE_STATE:
		  return { ...state, state : 'create' };

		case ArticlesType.EDIT_STATE:
			return { ...state, state : 'edit' };

		default:
			return state;
	}
};
