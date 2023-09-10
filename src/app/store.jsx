import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import builderReducer from '../features/builder/builderSlice'
import otherInfoBuilderReducer from '../features/otherInfo/otherInfoBuilderSlice'
// import employeeReducer from '../features/employee/employeeSlice'
// import leaveReducer from '../features/leaves/leaveSlice'
// import homeReducer from '../features/home/homeSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    builder: builderReducer,
    otherInfoBuilder: otherInfoBuilderReducer,
    // employee: employeeReducer,
    // leave: leaveReducer,
    // home: homeReducer,
  },
})