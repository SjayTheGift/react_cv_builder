// authActions.js
import React,{useRef} from 'react';
import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';


const token = JSON.parse(localStorage.getItem('userToken')) ? JSON.parse(localStorage.getItem('userToken')) : null


const config = {
  headers: {
    "Authorization": `Bearer ${token ? token.access : ''}`,
    'Content-Type': 'application/json',
  },
}

let backendURL = ''

const host_name = window.location.hostname

if(host_name === 'localhost'){
  backendURL = import.meta.env.VITE_LOCAL_BACKEND_URL
}
else{
  backendURL = import.meta.env.VITE_PRODUCTION_URL
}



// Experience CRUD 

export const fetchExperience = createAsyncThunk('builder/fetchExperience', async (thunkAPI) => {

    return await axios.get(`${backendURL}/api/cv-builder/experience/`, config)
    .then(res => {
        localStorage.setItem('experienceInfoData', JSON.stringify(res.data))
        return res.data
    })
    .catch(error => {
      console.log(error)
      toast.error(error.message)
    })
})

export const addExperience = createAsyncThunk('builder/addExperience', async (data, thunkAPI) => {
    console.log(data)
    return await axios.post(`${backendURL}/api/cv-builder/experience/`, data, config)
    .then(res => {
        // localStorage.setItem('departmentData', JSON.stringify(res.data)
        return res.data
    })
    .catch(error => {
      toast.error(error.response.data.name[0])
    })
  }
)

export const updateExperience = createAsyncThunk('builder/updateExperience', async (data, thunkAPI) => {
    return await axios.put(`${backendURL}/api/cv-builder/experience/${data.id}/`,  data , config)
    .then(res => {
        toast.success(res.data.name + ' Updated')
        return res.data
    })
    .catch(error => {
      toast.error(error.response.data.name[0])
    })
})


// Education CRUD 

export const fetchEducation = createAsyncThunk('builder/fetchEducation', async (thunkAPI) => {

    return await axios.get(`${backendURL}/api/cv-builder/education/`, config)
    .then(res => {
        localStorage.setItem('experienceInfoData', JSON.stringify(res.data))
        return res.data
    })
    .catch(error => {
      console.log(error)
      toast.error(error.message)
    })
})

export const addEducation = createAsyncThunk('builder/addEducation', async (data, thunkAPI) => {
    console.log(data)
    return await axios.post(`${backendURL}/api/cv-builder/education/`, data, config)
    .then(res => {
        // localStorage.setItem('departmentData', JSON.stringify(res.data)
        return res.data
    })
    .catch(error => {
      toast.error(error.response.data.name[0])
    })
  }
)

export const updateEducation = createAsyncThunk('builder/updateEducation', async (data, thunkAPI) => {
    return await axios.put(`${backendURL}/api/cv-builder/education/${data.id}/`,  data , config)
    .then(res => {
        toast.success('Updated Education Data')
        return res.data
    })
    .catch(error => {
      toast.error(error.response.data.name[0])
    })
})
