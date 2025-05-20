import axios from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default {
  // Example service methods
  getServices: () => apiClient.get('/services'),
  getServiceById: (id) => apiClient.get(`/services/${id}`),
  submitApplication: (data) => apiClient.post('/applications', data),
  trackApplication: (trackingId) => apiClient.get(`/tracking/${trackingId}`),
  
  // Authentication
  login: (credentials) => apiClient.post('/auth/login', credentials),
  register: (userData) => apiClient.post('/auth/register', userData),
  
  // File Upload
  uploadDocument: (file) => {
    const formData = new FormData()
    formData.append('document', file)
    return apiClient.post('/documents', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  },
}