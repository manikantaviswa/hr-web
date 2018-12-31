import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import AppReducer from './AppReducer';

const Reducer = combineReducers({
    user: UserReducer,
    app: AppReducer
});

export default Reducer;