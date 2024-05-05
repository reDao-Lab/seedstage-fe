import axios from 'axios'

const axiosClient = axios.create({
	baseURL: 'https://whitelabel-be-lep33.ondigitalocean.app',
	headers: {
		'Content-Type': 'application/json'
	}
})

// Add a response interceptor
axiosClient.interceptors.response.use(
	response => response.data,
	error => Promise.reject(error)
)

export default axiosClient
