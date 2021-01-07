/**
 * [initialState description]
 *
 * @var {[type]}
 */
const initialState = {
  loading: true,
  error: "",
  data: {}
};

/**
 * [listReducer description]
 *
 * @param   {[type]}  state         [state description]
 * @param   {[type]}  initialState  [initialState description]
 * @param   {[type]}  action        [action description]
 *
 * @return  {[type]}                [return description]
 */
const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        data: action.payload,
        error: ""
      };

    case "FETCH_FAILURE":
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default listReducer;
