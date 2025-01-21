import axios from "axios";
import { error } from "console";
import { config } from "process";

const axiosInstace=axios.create({
    baseURL: process.env.API_BASE_URL || 'https://api.example.com', // Adjust your API base URL here
    headers:{
        'Content-Type':'application/json'
    }
})


// Request interceptor
axiosInstace.interceptors.request.use(
    (config)=>{
        const token='';
        if(token){
            config.headers['Authorization']=`Bearer ${token}`
        }

        return config;
    },
    (error)=>{
        return Promise.reject(error);
    }
)


// @@ Response Interceptor

axiosInstace.interceptors.response.use(
    (response)=>{
        return response;
    },
    (error)=>{
        if(error.response){
            if (error.response.status === 401) {
                // Handle unauthorized (e.g., token expired, force logout)
                localStorage.removeItem('authToken');
                window.location.href = '/login'; // Redirect to login page
              }
              if (error.response.status === 500) {
                // Handle server errors (optional)
                alert('Server error! Please try again later.');
              }
        }
        else if (error.request) {
            // The request was made but no response was received
            console.error('Request error:', error.request);
          } else {
            // Something else went wrong in setting up the request
            console.error('General error:', error.message);
          }
          return Promise.reject(error); 
    }
)

export default axiosInstace;