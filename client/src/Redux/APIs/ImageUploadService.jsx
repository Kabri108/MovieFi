import React from 'react'
import toast from 'react-hot-toast'
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
        if (error.response) {
            // Handle specific HTTP error codes (e.g., 400 for bad request)
            toast.error(error.response.data.message || "Upload failed");
        } else {
            toast.error("Network error or server issue");
        }
    }
}

export {uploadImageService}