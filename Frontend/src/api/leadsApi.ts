import axios from 'axios'
import type { Lead } from '../types/Lead'


const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL, 
  })

export const getLeads = async (): Promise<Lead[]> => {
    const res = await api.get('/leads')
    return res.data
}


export const createLead = async (payload: Omit<Lead, 'id'>): Promise<Lead> => {
    const res = await api.post('/leads', payload)
    return res.data
}


export const updateLead = async (id: number, payload: Partial<Lead>) => {
    const res = await api.put(`/leads/${id}`, payload)
    return res.data
}