import React from "react";
import CartLists from "./CartLists";
import { connect } from "react-redux";
import { fetchSuccess, fetchFailure } from "../../redux/";
import { postData } from "../../services/api";

class CartItems extends React.Component {
  constructor(props) {
    super(props);
  }

  /**
   * @param
   * @description Place order functionality goes here
   * @returns
   */
  placeOrder = () => {
    let cartItemsObj = this?.props?.carts;
    if (cartItemsObj === null) {
      alert("Add any Product(s) to cart");
      return;
    }
    let genOrderId = Date.now();
    let orderDataArray = [];
    let orderDataObj = {};
    for (let inc = 0; inc < cartItemsObj.length; inc++) {
      orderDataObj = {
        id: inc + 1,
        genOrderId,
        productId: parseInt(cartItemsObj[inc].id),
        quantity: 1,
        name: cartItemsObj[inc].name,
        price: cartItemsObj[inc].price,
        image: cartItemsObj[inc].image,
        status: 1, //1-Order placed, 2-Shipped, 3-Dispatched
      };
      orderDataArray.push(orderDataObj);
    }

    postData("orders", orderDataArray)
      .then((response) => {
        console.log("response", this.props);

        let responseStatus = response.status;
        if (responseStatus >= 200) {
          alert(
            "Your Order has been Placed Successfully!!! Order Number: " +
              genOrderId
          );
          //this.props.history.push('track-order')
          window.location.href = "http://localhost:3000/orders";
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
//   sum = (key) => {
//     return this.reduce((a, b) => a + (b[key] || 0), 0);
// }
  render() {
    
    let totalPrice = this.props.carts.reduce((a, b) => a + (parseFloat(b['price']) || 0), 0);
    let formattedTotalPrice = Math.round(totalPrice * 100) / 100;
    return (
      <section className="container contentSection">
        <h2 className="sectionHeader">CART</h2>
        <div className="cartRow">
          <span className="cartItem cartHeader cartColumn">ITEM</span>
          <span className="cartPrice cartHeader cartColumn">PRICE</span>
          <span className="cartQuantity cartHeader cartColumn">QUANTITY</span>
        </div>
        <div className="cartItems">
          {/* {this.props.carts &&
            this.props.carts.map((cart, i) => {
              return <CartLists cart={cart} key={i} />;
            })} */
            }
            <CartLists />
        </div>
        <div className="cartTotal">
          <strong className="cartTotalTitle">Total</strong>
          <span className="cartTotalPrice">${formattedTotalPrice}</span>
        </div>
        <button
          className="btn btnPrimary btnPurchase"
          type="button"
          onClick={(e) => this.placeOrder()}
        >
          PLACE ORDER
        </button>
      </section>
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
    carts: state.listproduct.cart,
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

export default connect(mapStateToProps, mapDispatchToProps)(CartItems);
