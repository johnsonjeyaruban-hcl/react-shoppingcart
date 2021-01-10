/**
 * [fetchSuccess description]
 *
 * @var {[type]}
 */
export const fetchSuccess = response => {
  return {
    type: "FETCH_SUCCESS",
    payload: response
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

export const FETCH_PRODUCTS = 'fetchProducts';

export const setProducts = () => {
  return {
    type: "SET_PRODUCTS"
  };
};

/**
 * [addCartSuccess description]
 *
 * @var {[type]}
 */
export const addCartSuccess = response => {
  return {
    type: "ADD_CART_SUCCESS",
    payload: response
  };
};

/**
 * [addCartFailure description]
 *
 * @var {[type]}
 */
export const addCartFailure = error => {
  return {
    type: "ADD_CART_FAILURE",
    payload: error
  };
};


export const removeCartSuccess = (carts, product) => {
  let afterRemovedCart = carts.filter((cart) => cart.id !== product.id)
  return {
    type: "REMOVE_CART_SUCCESS",
    payload: afterRemovedCart
  }
}
