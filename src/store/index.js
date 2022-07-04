import { configureStore } from '@reduxjs/toolkit'

import settingSlice from './features/settings';

const store = configureStore({
  reducer: {
    settings: settingSlice
  }
})

export default store;