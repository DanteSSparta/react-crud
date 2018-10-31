import * as AdminPanelType from '../constants/AdminPanel';

const defaultState = {
	state : 'view'
};

export default (state = defaultState, action) => {
	const { type, payload } = action;

	switch (type) {
		case AdminPanelType.ADMIN_PANEL_TOGGLE:
			return { ...state, state : payload };

		default:
			return state;
	}
};
