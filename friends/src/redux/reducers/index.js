import { combineReducers } from 'redux';

import appStateReducer from './loginReducer';
import friendsReducer from './friendsReducer';

const rootReducer = combineReducers({
  friends: friendsReducer,
  logginIn: appStateReducer,
});

export default rootReducer;
