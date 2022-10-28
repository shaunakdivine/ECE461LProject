import { GLOBAL_CHECK_LOGIN, GLOBAL_CLOSE_TOAST, GLOBAL_LOGIN } from "./types/global";

export const checkLogin = () => ({ type: GLOBAL_CHECK_LOGIN });
export const login = (payload) => ({ type: GLOBAL_LOGIN, payload });

// component behaviors
export const closeToast = () => ({ type: GLOBAL_CLOSE_TOAST });