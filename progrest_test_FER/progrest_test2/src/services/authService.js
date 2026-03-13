import api from './api'

export const loginApi = async (username, password) => {
  const response = await api.get('/users', {
    params: {
      username,
      password
    }
  })

  return response.data
}