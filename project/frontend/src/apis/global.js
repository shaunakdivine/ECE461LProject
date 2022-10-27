import axios from "axios";
import { catchAPIerror } from "./utils";

export const loginAPI = data =>
  axios.post(`${process.env.REACT_APP_API_URL}/login-user`, data)
    .then(response => {
      console.log('hello');
      console.log(response);
      return response.data;
    })
    .catch(catchAPIerror);