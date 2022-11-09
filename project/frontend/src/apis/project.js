import axios from "axios";
import { catchAPIerror } from "./utils";

const BASE_URL = `${process.env.REACT_APP_API_URL}/project`

// 2.1
export const getProjectsAPI = userId =>
  axios.get(`${BASE_URL}/${userId}`)
    .then(response => response.data)
    .catch(catchAPIerror);

// 2.2
export const addProjectAPI = data =>
  axios.post(`${BASE_URL}/`, data)
    .then(response => response.data)
    .catch(catchAPIerror);

// 2.3
export const editProjectAPI = (projectId, data) =>
  axios.put(`${BASE_URL}/${projectId}`, data)
    .then(response => response.data)
    .catch(catchAPIerror);

// 2.4
export const deleteProjectAPI = projectId =>
  axios.delete(`${BASE_URL}/${projectId}`)
    .then(response => response.data)
    .catch(catchAPIerror);

// 2.5
export const joinProjectAPI = ({ userId, projectId }) =>
  axios.put(`${BASE_URL}/join/${userId}/${projectId}`)
    .then(response => response.data)
    .catch(catchAPIerror);

// 2.6
export const leaveProjectAPI = ({ userId, projectId }) =>
  axios.put(`${BASE_URL}/leave/${userId}/${projectId}`)
    .then(response => response.data)
    .catch(catchAPIerror);