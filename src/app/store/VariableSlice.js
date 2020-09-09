import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

const variableSlice = createSlice({
  name: 'variable',
  initialState,
  reducers: {
    variableAdded(state, action) {
      state.push(action.payload)
    }
  }
})
export const { variableAdded } = variableSlice.actions
export default variableSlice.reducer