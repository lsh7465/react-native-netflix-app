import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "4f40ede67a51e4e532cb98247d2aed9d",
    language: "ko-KR",
  },
});

export default axiosInstance;
