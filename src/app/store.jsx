import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import builderReducer from '../features/builder/builderSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    builder: builderReducer,
  },
})