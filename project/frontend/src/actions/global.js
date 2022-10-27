import { GLOBAL_LOGIN } from "./types/global";

export const login = (payload) => ({
  type: GLOBAL_LOGIN,
  payload
});