import * as AdminPanelType from '../constants/AdminPanel';

const defaultState = {
	state : 'view'
};

export default (state = defaultState, action) => {
	const { type, payload } = action;

	switch (type) {
		case AdminPanelType.VIEW_STATE:
			return { ...state, state : 'view' };

		case AdminPanelType.CREATE_STATE:
		  return { ...state, state : 'create' };

		case AdminPanelType.EDIT_STATE:
			return { ...state, state : 'edit' };

		default:
			return state;
	}
};
