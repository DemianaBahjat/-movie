
 import axios from "axios";

const axiosInstance = axios.create({
  baseURL:"https://api.themoviedb.org/3/movie/",
  params:{
    api_key: "26c82eb197cd05baad6b0dc4a314a3ae",

    
    },
});


export default axiosInstance;