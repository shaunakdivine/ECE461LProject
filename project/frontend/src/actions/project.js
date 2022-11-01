import {
  PROJECT_ADD,
  PROJECT_DELETE,
  PROJECT_EDIT,
  PROJECT_GET,
  PROJECT_JOIN,
  PROJECT_LEAVE,
} from "./types/project";

export const getProject = (payload) => ({ type: PROJECT_GET, payload });
export const addProject = (payload) => ({ type: PROJECT_ADD, payload });
export const editProject = (payload) => ({ type: PROJECT_EDIT, payload });
export const deleteProject = (payload) => ({ type: PROJECT_DELETE, payload });

export const joinProject = (payload) => ({ type: PROJECT_JOIN, payload });
export const leaveProject = (payload) => ({ type: PROJECT_LEAVE, payload });