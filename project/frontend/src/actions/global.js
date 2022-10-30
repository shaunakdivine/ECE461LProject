import { GLOBAL_CHECK_LOGIN, GLOBAL_CLOSE_TOAST, GLOBAL_LOGIN, GLOBAL_LOGOUT, GLOBAL_REGISTER } from "./types/global";

export const checkLogin = () => ({ type: GLOBAL_CHECK_LOGIN });
export const login = (payload) => ({ type: GLOBAL_LOGIN, payload });
export const logout = (payload) => ({ type: GLOBAL_LOGOUT, payload });
export const register = (payload) => ({ type: GLOBAL_REGISTER, payload });

// component behaviors
export const closeToast = () => ({ type: GLOBAL_CLOSE_TOAST });