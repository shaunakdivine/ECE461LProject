import {
  PROJECT_ADD,
<<<<<<< HEAD
  PROJECT_CLOSE_DETAIL_MODAL,
=======
>>>>>>> 408b82a (add project redux reducers)
  PROJECT_DELETE,
  PROJECT_EDIT,
  PROJECT_GET,
  PROJECT_JOIN,
  PROJECT_LEAVE,
<<<<<<< HEAD
  PROJECT_OPEN_DETAIL_MODAL,
=======
>>>>>>> 408b82a (add project redux reducers)
} from "./types/project";

export const getProject = (payload) => ({ type: PROJECT_GET, payload });
export const addProject = (payload) => ({ type: PROJECT_ADD, payload });
export const editProject = (payload) => ({ type: PROJECT_EDIT, payload });
<<<<<<< HEAD
export const deleteProject = (payload) => ({ type: PROJECT_DELETE, payload });

export const joinProject = (payload) => ({ type: PROJECT_JOIN, payload });
export const leaveProject = (payload) => ({ type: PROJECT_LEAVE, payload });

export const openDetailModal = (payload) => ({ type: PROJECT_OPEN_DETAIL_MODAL, payload });
export const closeDetailModal = () => ({ type: PROJECT_CLOSE_DETAIL_MODAL });
=======
export const deleteroject = (payload) => ({ type: PROJECT_DELETE, payload });

export const joinProject = (payload) => ({ type: PROJECT_JOIN, payload });
export const leaveProject = (payload) => ({ type: PROJECT_LEAVE, payload });
>>>>>>> 408b82a (add project redux reducers)
