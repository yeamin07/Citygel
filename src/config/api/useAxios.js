import axios from "axios";
import { jwtDecode } from "jwt-decode";
import dayjs from "dayjs";
import { useContext } from "react";
import AuthContext from "context/AuthContext";

const baseURL = "http://localhost:5000/api/v1/";

const useAxios = () => {
  const { authToken, setTUser, setAuthToken } = useContext(AuthContext);

  const axiosInstance = axios.create({
    baseURL,
    headers: { Authorization: `Bearer ${authToken}` },
  });

  // axiosInstance.interceptors.request.use(async (req) => {
  //   const user = jwtDecode(authToken);
  //   const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

  //   if (!isExpired) return req;

  //   const response = await axios.post(`${baseURL}/auth/refresh-token/`, {
  //     refresh: authToken.refresh,
  //   });

  //   localStorage.setItem("authToken", response.data.data.accessToken);

  //   setAuthToken(response.data.data.accessToken);
  //   setTUser(jwtDecode(response.data.data.accessToken));

  //   req.headers.Authorization = `Bearer ${response.data.data.accessToken}`;
  //   return req;
  // });

  return axiosInstance;
};

export default useAxios;
