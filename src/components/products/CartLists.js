import React from "react";
import { cartActions } from "../../functions/CartActions";
import { connect } from "react-redux";
import { removeCartSuccess } from "../../redux/";


class CartLists extends React.Component {
  componentDidMount() {
    //cartActions.updateCartTotal();
  }
  /**
   * [removeCartItem description]
   *
   * @param   {[type]}  event  [event description]
   *
   * @return  {[type]}         [return description]
   */
  removeCartItemNew = (product) => {
    this.props.dispatch(removeCartSuccess(this.props.cart, product));
  };
  render() {
    return (
      <>
        {this.props.cart &&
          this.props.cart.map((cart, i) => {
            let { id, name, price, image } = cart;
            let imageSrc = `assets/images/${image}`;

            return (
              <div className="cartRow" key={i}>
                <div className="cartItem cartColumn">
                  <img
                    className="cartItemImage"
                    src={imageSrc}
                    width="100"
                    height="100"
                  />
                  <span className="cartItemTitle">{name}</span>
                </div>
                <span className="cartPrice cartColumn">${price}</span>
                <span className="cartProductId" style={{ display: "none" }}>
                  {id}
                </span>
                <div className="cartQuantity cartColumn">
                  <input
                    className="cartQuantityInput"
                    type="number"
                    value="1"
                    readOnly
                  />
                  <button
                    className="btn btnDanger"
                    type="button"
                    onClick={(e) => this.removeCartItemNew(cart)}
                  >
                    REMOVE
                  </button>
                </div>
              </div>
            );
          })}
      </>
    );
  }
}

/**
 * [mapStateToProps description]
 *
 * @param   {[type]}  state  [state description]
 *
 * @return  {[type]}         [return description]
 */
const mapStateToProps = (state) => {
  console.log("state.listproduct.cart", state.listproduct.cart);
  return {
    cart: state.listproduct.cart,
  };
};

/**
 * [mapDispatchToProps description]
 *
 * @param   {[type]}  dispatch  [dispatch description]
 *
 * @return  {[type]}            [return description]
 */
const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartLists);
