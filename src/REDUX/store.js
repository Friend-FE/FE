// import React from 'react';

import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './loginCheck';
import emailReducer from './emailCheck';
import matchingReducer from './matchingCheck';

export default configureStore({
  reducer: {
    login: loginReducer,
    email: emailReducer,
    matching: matchingReducer
  },
})