/**
 * [fetchSuccess description]
 *
 * @var {[type]}
 */
export const fetchSuccess = response => {
  return {
    type: "FETCH_SUCCESS",
    payload: response.data
  };
};

/**
 * [fetchFailure description]
 *
 * @var {[type]}
 */
export const fetchFailure = error => {
  return {
    type: "FETCH_FAILURE",
    payload: error
  };
};
