import axios from "axios";
import { catchAPIerror } from "./utils";

const BASE_URL = `${process.env.REACT_APP_API_URL}/account`

export const loginAPI = data =>
  axios.post(`${BASE_URL}/login`, data)
    .then(response => response.data)
    .catch(catchAPIerror);

export const registerAPI = data =>
  axios.post(`${BASE_URL}/register`, data)
    .then(response => response.data)
    .catch(catchAPIerror);