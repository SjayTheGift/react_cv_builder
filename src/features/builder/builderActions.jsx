// authActions.js
import React,{useRef} from 'react';
import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

// const token = JSON.parse(localStorage.getItem('userToken'))

const token = JSON.parse(localStorage.getItem('userToken')) ? JSON.parse(localStorage.getItem('userToken')) : null


const config = {
  headers: {
    "Authorization": `Bearer ${token ? token.access : ''}`,
    'Content-Type': 'application/json',
  },
}

let backendURL = ''

const host_name = window.location.hostname

// const { userToken } = useSelector((state) => state.auth)

if(host_name === 'localhost'){
  backendURL = import.meta.env.VITE_LOCAL_BACKEND_URL
}
else{
  backendURL = import.meta.env.VITE_PRODUCTION_URL
}



// Personal Info CRUD 

export const fetchPersonalInfo = createAsyncThunk('builder/fetchPersonalInfo', async (thunkAPI) => {

    return await axios.get(`${backendURL}/api/cv-builder/personal-info/`, config)
    .then(res => {
        localStorage.setItem('personalInfoData', JSON.stringify(res.data))
        return res.data
    })
    .catch(error => {
      console.log(error)
      toast.error(error.message)
    })
  }
)

export const addPersonalInfo = createAsyncThunk('builder/addPersonalInfo', async (data, thunkAPI) => {
    return await axios.post(`${backendURL}/api/cv-builder/personal-info/`, data, config)
    .then(res => {
        // localStorage.setItem('departmentData', JSON.stringify(res.data)
        return res.data
    })
    .catch(error => {
      toast.error(error.response.data.name[0])
    })
  }
)

export const updatePersonalInfo = createAsyncThunk('builder/updatePersonalInfo', async (data) => {
  
    return await axios.put(`${backendURL}/api/cv-builder/personal-info/${data.id}/`,  data , config)
    .then(res => {
        toast.success('Updated successfully')
        return res.data
    })
    .catch(error => {
      toast.error(error.response.data.name[0])
    })
})


// Experience Info CRUD 

// export const fetchExperience= createAsyncThunk('builder/fetchExperience', async (thunkAPI) => {

//     return await axios.get(`${backendURL}/api/cv-builder/experience/`, config)
//     .then(res => {
//         // localStorage.setItem('departmentData', JSON.stringify(res.data))
//         return res.data
//     })
//     .catch(error => {
//       console.log(error)
//       toast.error(error.message)
//     })
//   }
// )

// export const addExperience = createAsyncThunk('builder/addExperience', async (data, thunkAPI) => {
//     console.log(data)
//     return await axios.post(`${backendURL}/api/cv-builder/experience/`, data, config)
//     .then(res => {
//         // localStorage.setItem('departmentData', JSON.stringify(res.data)
//         return res.data
//     })
//     .catch(error => {
//       toast.error(error.response.data.name[0])
//     })
//   }
// )

// export const updateExperience = createAsyncThunk('builder/updateExperience', async (data, thunkAPI) => {
//     return await axios.put(`${backendURL}/api/cv-builder/experience/${data.id}/`,  data , config)
//     .then(res => {
//         toast.success(res.data.name + ' Updated')
//         return res.data
//     })
//     .catch(error => {
//       toast.error(error.response.data.name[0])
//     })
// })
