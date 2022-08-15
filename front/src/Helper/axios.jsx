import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:9000"
})

instance.interceptors.request.use(
    (config) => {
      config.withCredentials = true
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
)

instance.interceptors.response.use(
    (response) => {
      return response
    }
    , (error) => {
      if (error.response.status === 403) {
        window.location.href = "/login"
      }
      return Promise.reject(error)
    }
)


export default instance;