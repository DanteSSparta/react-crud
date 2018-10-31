import actionResolve from './actionResolver';
import { ADMIN_PANEL_TOGGLE } from '../constants/AdminPanel';

export default adminPanelToggle = (payload) => {
  return (dispatch) => {
    dispatch(actionResolve(ADMIN_PANEL_TOGGLE, payload));
  }
}
