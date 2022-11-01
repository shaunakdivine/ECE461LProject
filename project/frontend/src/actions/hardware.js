import {
  HARDWARE_ADD,
  HARDWARE_DELETE,
  HARDWARE_EDIT,
  HARDWARE_GET,
  HARDWARE_CHECK_IN,
  HARDWARE_CHECK_OUT,
} from "./types/hardware";

export const getHardware = (payload) => ({ type: HARDWARE_GET, payload });
export const addHardware = (payload) => ({ type: HARDWARE_ADD, payload });
export const editHardware = (payload) => ({ type: HARDWARE_EDIT, payload });
export const deleteHardware = (payload) => ({ type: HARDWARE_DELETE, payload });

export const checkInHardware = (payload) => ({ type: HARDWARE_CHECK_IN, payload });
export const checkOutHardware = (payload) => ({ type: HARDWARE_CHECK_OUT, payload });