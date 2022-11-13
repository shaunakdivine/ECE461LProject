import axios from "axios";
import { catchAPIerror } from "./utils";

const BASE_URL = `${process.env.REACT_APP_API_URL}/hwset`

// 3.5
export const checkInHardwareAPI = (userId, projectId, data) =>
  axios.put(`${BASE_URL}/checkin/${userId}/${projectId}`, data)
    .then(response => response.data)
    .catch(catchAPIerror);

// 3.6
export const checkOutHardwareAPI = (userId, projectId, data) =>
  axios.put(`${BASE_URL}/checkout/${userId}/${projectId}`, data)
    .then(response => response.data)
    .catch(catchAPIerror);