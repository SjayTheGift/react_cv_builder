import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { 
    fetchPersonalInfo, 
    addPersonalInfo, 
    updatePersonalInfo,  
} from './builderActions'

// const departmentData = localStorage.getItem('departmentData')
// ? localStorage.getItem('departmentData')
// : null


// const designationData = localStorage.getItem('designationData')
// ? localStorage.getItem('designationData')
// : null

const initialState = {
  personalInfoData: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}


export const builderSlice = createSlice({
  name: 'builder',
  initialState,
  reducers: {
    reset: (state) => {
      state.personalInfoData = state.personalInfoData
      state.isLoading = false
      state.isSuccessPersonalInfo = false,
      state.isError = false
      state.message = ''
    },
  },
  extraReducers: (builder) => {
    builder
      // Personal Info
      .addCase(fetchPersonalInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPersonalInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccessPersonalInfo = true;
        state.personalInfoData = localStorage.getItem('personalInfoData');
      })
      .addCase(fetchPersonalInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(addPersonalInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addPersonalInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccessPersonalInfo = true;
      })
      .addCase(addPersonalInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      
      .addCase(updatePersonalInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updatePersonalInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccessPersonalInfo = true;
      })
      .addCase(updatePersonalInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // End Department
  },
})

export const { reset } = builderSlice.actions
export default builderSlice.reducer