import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "http://104.131.4.58:8080/",
});
export default axiosInstance;