import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { 
    fetchResume, 
    addResume, 
    updateResume,  
} from './builderActions'

// const departmentData = localStorage.getItem('departmentData')
// ? localStorage.getItem('departmentData')
// : null


// const designationData = localStorage.getItem('designationData')
// ? localStorage.getItem('designationData')
// : null

const initialState = {
  resumeData: [],
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
      state.resumeData = state.resumeData
      state.isLoading = false
      state.isSuccess = false,
      state.isError = false
      state.message = ''
    },
  },
  extraReducers: (builder) => {
    builder
      // Personal Info
      .addCase(fetchResume.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchResume.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.resumeData = localStorage.getItem('resumeData');
      })
      .addCase(fetchResume.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(addResume.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addResume.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(addResume.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      
      .addCase(updateResume.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateResume.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(updateResume.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // End Department
  },
})

export const { reset } = builderSlice.actions
export default builderSlice.reducer