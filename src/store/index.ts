import Sidebar from './sidebar'
import Theme from './theme'

import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    theme: Theme.reducer,
    sidebar: Sidebar.reducer,
  },
})

export type StoreState = ReturnType<typeof store.getState>

export default store
