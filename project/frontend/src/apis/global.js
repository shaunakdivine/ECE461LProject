import axios from "axios";
import { catchAPIerror } from "./utils";

export const loginAPI = data =>
  axios.post(`${process.env.REACT_APP_API_URL}/login-user`, data)
    .then(response => response.data)
    .catch(catchAPIerror);

export const logoutAPI = data =>
  axios.post(`${process.env.REACT_APP_API_URL}/logout-user`, data)
    .then(response => response.data)
    .catch(catchAPIerror);

export const registerAPI = data =>
  axios.post(`${process.env.REACT_APP_API_URL}/register`, data)
    .then(response => response.data)
    .catch(catchAPIerror);