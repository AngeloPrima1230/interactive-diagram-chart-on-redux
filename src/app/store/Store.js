import { configureStore } from '@reduxjs/toolkit'
import variableReducer from './VariableSlice'


export default configureStore({
  reducer: () => ({
    variable: variableReducer
  }),
})
