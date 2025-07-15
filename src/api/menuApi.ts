import axios from 'axios'

const apiUrl = 'https://684faa72e7c42cfd179568a8.mockapi.io/menu'

export const fetchMenu = () => axios.get(apiUrl)
export const addMenuItem = (data: any) => axios.post(apiUrl, data)
export const updateMenuItem = (id: string, data: any) => axios.put(`${apiUrl}/${id}`, data)
export const deleteMenuItem = (id: string) => axios.delete(`${apiUrl}/${id}`) 