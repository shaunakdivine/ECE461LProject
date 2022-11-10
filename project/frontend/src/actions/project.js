import {
  PROJECT_ADD,
  PROJECT_CLOSE_ADD_MODAL,
  PROJECT_CLOSE_DETAIL_MODAL,
  PROJECT_DELETE,
  PROJECT_EDIT,
  PROJECT_GET,
  PROJECT_JOIN,
  PROJECT_LEAVE,
  PROJECT_OPEN_ADD_MODAL,
  PROJECT_OPEN_DETAIL_MODAL,
} from "./types/project";

export const getProject = (payload) => ({ type: PROJECT_GET, payload });
export const addProject = (payload) => ({ type: PROJECT_ADD, payload });
export const editProject = (payload) => ({ type: PROJECT_EDIT, payload });
export const deleteProject = (payload) => ({ type: PROJECT_DELETE, payload });

export const joinProject = (payload) => ({ type: PROJECT_JOIN, payload });
export const leaveProject = (payload) => ({ type: PROJECT_LEAVE, payload });

export const openDetailModal = (payload) => ({ type: PROJECT_OPEN_DETAIL_MODAL, payload });
export const openAddModal = () => ({ type: PROJECT_OPEN_ADD_MODAL });
export const closeDetailModal = () => ({ type: PROJECT_CLOSE_DETAIL_MODAL });
export const closeAddModal = () => ({ type: PROJECT_CLOSE_ADD_MODAL });