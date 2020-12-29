import Sidebar from './sidebar'

import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    sidebar: Sidebar.reducer,
  },
})

export type StoreState = ReturnType<typeof store.getState>

export default store
