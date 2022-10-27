import { GLOBAL_CLOSE_TOAST, GLOBAL_LOGIN } from "./types/global";

export const login = (payload) => ({ type: GLOBAL_LOGIN, payload });

// component behaviors
export const closeToast = () => ({ type: GLOBAL_CLOSE_TOAST });