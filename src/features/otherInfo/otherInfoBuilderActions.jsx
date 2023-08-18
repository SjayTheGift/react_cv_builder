// authActions.js
import React,{useRef} from 'react';
import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';
import { Navigate } from 'react-router-dom';

let backendURL = ''

const host_name = window.location.hostname

if(host_name === 'localhost'){
  backendURL = import.meta.env.VITE_LOCAL_BACKEND_URL
}
else{
  backendURL = import.meta.env.VITE_PRODUCTION_URL
}

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
}

// Experience CRUD 

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
