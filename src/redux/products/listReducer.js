/**
 * [initialState description]
 *
 * @var {[type]}
 */
const initialState = {
  loading: true,
  error: "",
  product: [],
  cart:[]
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
        ...state,
        loading: false,
        product: action.payload,
        error: "",
      };

    case "FETCH_FAILURE":
      return {
        ...state,
        error: action.payload,
      };

    case "ADD_CART_SUCCESS":
      return {
        ...state,
        loading: false,
        cart: [...state.cart, action.payload],
        //cart: action.payload,
        error: "",
      };

    case "ADD_CART_FAILURE":
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default listReducer;
