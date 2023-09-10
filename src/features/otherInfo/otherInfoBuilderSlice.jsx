import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { 
    fetchExperience,
    addExperience, 
    updateExperience,  
    fetchEducation,
    addEducation, 
    updateEducation, 
} from './otherInfoBuilderActions'

// const departmentData = localStorage.getItem('departmentData')
// ? localStorage.getItem('departmentData')
// : null


// const designationData = localStorage.getItem('designationData')
// ? localStorage.getItem('designationData')
// : null

const initialState = {
  experienceData: [],
  educationData: [],
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
      state.educationData = state.educationData
      state.isLoading = false
      state.isExperienceSuccess = false,
      state.isEducationSuccess = false,
      state.isError = false
      state.message = ''
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchExperience.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchExperience.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isExperienceSuccess = true;
        state.experienceData = localStorage.getItem('experienceInfoData')
      })
      .addCase(fetchExperience.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
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
      .addCase(fetchEducation.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchEducation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isEducationSuccess = true;
        state.educationData = localStorage.getItem('educationInfoData')
      })
      .addCase(fetchEducation.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(addEducation.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addEducation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isEducationSuccess = true;
      })
      .addCase(addEducation.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      
      .addCase(updateEducation.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateEducation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isEducationSuccess = true;
      })
      .addCase(updateEducation.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
  },
})

export const { reset } = otherInfoBuilderSlice.actions
export default otherInfoBuilderSlice.reducer