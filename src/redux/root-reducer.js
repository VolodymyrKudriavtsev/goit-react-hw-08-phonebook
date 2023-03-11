import { combineReducers } from '@reduxjs/toolkit';

import authReducer from './auth/slice';
import contactsReducer from './contacts/slice';
import filterReducer from './filter/slice';

const rootReducer = combineReducers({
  auth: authReducer,
  contacts: contactsReducer,
  filter: filterReducer,
});

export default rootReducer;
