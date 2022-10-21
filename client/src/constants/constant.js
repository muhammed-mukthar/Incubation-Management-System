import axios from 'axios'


export const userUrl ="http://localhost:5000"

export const adminUrl ="http://localhost:5000/api/admin"


const TOKEN= localStorage.getItem('userToken')

const ADMINTOKEN= localStorage.getItem('admintoken')



export const userRequest=axios.create({
    baseURL:userUrl,
    header:{token:`Bearer ${TOKEN}`}
})

export const AdmimUserequest=axios.create({
    baseURL:userUrl,
    headers:{admintoken:`Bearer ${ADMINTOKEN}`}
})

export const AdminRequest=axios.create({
    baseURL:adminUrl,
    headers:{admintoken:`Bearer ${ADMINTOKEN}`}
})