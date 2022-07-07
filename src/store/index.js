import { configureStore } from '@reduxjs/toolkit'

import settingSlice from './features/settings';
import userSlice from './features/user';

const store = configureStore({
  reducer: {
    settings: settingSlice,
    user: userSlice
  }
})

export default store;