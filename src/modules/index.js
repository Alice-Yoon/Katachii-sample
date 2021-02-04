import { combineReducers } from 'redux';
import login from './login';
import paymentInfo from './paymentInfo';
import mypage from './mypage';
import responsive from './responsive';

const rootReducer = combineReducers({
    login,
    paymentInfo,
    mypage,
    responsive
})

export default rootReducer;