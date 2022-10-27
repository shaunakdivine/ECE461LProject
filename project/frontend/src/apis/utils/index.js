/**
 * handle API error and return error message
 * @param {AxiosError} err - error object
 * @return {Object} error status and message
 */
export const catchAPIerror = err => typeof err.response !== 'object'
  ? {
    status: "error",
    error: `${err.code}: ${err.message}`
  }
  : {
    ...err.response.data,
    error: `${err.response.status}: ${err.response.data.error}`
  };