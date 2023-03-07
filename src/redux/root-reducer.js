import { combineReducers } from '@reduxjs/toolkit';

import contactsReducer from './contacts/slice';
import filterReducer from './filter/slice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export default rootReducer;
