import { combineReducers } from 'redux';
import AutoCompleteReducer from './AutoComplete';
import ReportAndCommentReducer from './ReportAndComment';
import StaticDataReducer from './StaticData';
import ArticlesReducer from './Articles';
// import AuthModalReducer from './AuthModal'; не используется
import DiscountBarReducer from './DiscountBar';
import DisputeReducer from './Dispute';
import EmailReducer from './Email';
import FilesReducer from './Files';
import UserReducer from './User';
import PasswordReducer from './Password';

export default function createReducer() {
	return combineReducers({
		autocomplete: AutoCompleteReducer,
		reportAndComment: ReportAndCommentReducer,
		staticData: StaticDataReducer,
		articles: ArticlesReducer,
		discountBar: DiscountBarReducer,
		dispute: DisputeReducer,
		email: EmailReducer,
		files: FilesReducer,
		user: UserReducer,
		password: PasswordReducer
	});
}
