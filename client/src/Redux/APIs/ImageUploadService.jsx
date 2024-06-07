import React from 'react'
import toast from 'react-hot-toast'
import { setLocale } from 'yup'
import Axios from './Axios'

const uploadImageService= async(file,setLoading)=>{
    try {
        setLoading(true)
        const {data}=await Axios.post('/upload',file)
        setLoading(false)
        toast.success("Image Uploaded Successfully")
        return data;
    } catch (error) {
        setLoading(false)
        toast.error("Something went wrong")
    }
}

export {uploadImageService}