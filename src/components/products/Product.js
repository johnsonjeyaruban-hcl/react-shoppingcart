import React from "react";
import addItemToCart from "../../functions/CartActions";
import { connect } from "react-redux";
import { addCartSuccess, addCartFailure } from "../../redux/";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      carts: [],
    };
  }

  /**
   * [addToCartClicked description]
   *
   * @param   {[Array]}  product  [product description]
   *
   * @return  {[type]}           [return description]
   */
  addToCartClicked = (product) => {
    this.props.dispatch(addCartSuccess(product));
    //addItemToCart(id, name, price, image);
  };

  /**
   * [render description]
   *
   * @return  {[type]}  [return description]
   */
  render() {
    let { product, children } = this.props;
    let { id, price, name, image } = product;
    let productImage = `assets/images/${image}`;
    return (
      <div className="shopItem">
        <span className="shopItemTitle">{name}</span>
        <img className="shopItemImage" src={productImage} />
        <div className="shopItemDetails">
          <span className="shopItemPrice">${price}</span>
          <button
            className="btn btnPrimary shopItemButton"
            type="button"
            onClick={() => this.addToCartClicked(product)}
          >
            ADD TO CART
          </button>
        </div>
      </div>
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
  return {
    data: state.listproduct.product
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

export default connect(mapStateToProps, mapDispatchToProps)(Product);
