import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { 
    addExperience, 
    updateExperience,  
} from './otherInfoBuilderActions'

// const departmentData = localStorage.getItem('departmentData')
// ? localStorage.getItem('departmentData')
// : null


// const designationData = localStorage.getItem('designationData')
// ? localStorage.getItem('designationData')
// : null

const initialState = {
  experienceData: [],
  isError: false,
  isExperienceSuccess: false,
  isLoading: false,
  message: '',
}


export const otherInfoBuilderSlice = createSlice({
  name: 'otherInfoBuilder',
  initialState,
  reducers: {
    reset: (state) => {
      state.experienceData = state.experienceData
      state.isLoading = false
      state.isExperienceSuccess = false,
      state.isError = false
      state.message = ''
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addExperience.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addExperience.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isExperienceSuccess = true;
      })
      .addCase(addExperience.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      
      .addCase(updateExperience.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateExperience.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isExperienceSuccess = true;
      })
      .addCase(updateExperience.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // End Department
  },
})

export const { reset } = otherInfoBuilderSlice.actions
export default otherInfoBuilderSlice.reducer