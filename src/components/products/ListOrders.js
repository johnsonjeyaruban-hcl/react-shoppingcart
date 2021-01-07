import React from "react";
import { getData } from "../../services/api";
import Order from "./Order";

class ListOrders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      grandTotal: 0
    };
  }
  /**
   * [componentDidMount description]
   *
   * @return  {[type]}  [return description]
   */
  componentDidMount() {
    let url = `orders`;
    getData(url)
      .then((response) => {
        let responseObject = response.data;
        let checkResponseObject = responseObject?.length > 0;
        if (checkResponseObject === true) {
          this.setState({ orders: responseObject });
        }
      })
      .catch((error) => {
        console.log("response catch block", error);
      });
  }

  /**
   * [render description]
   *
   * @return  {[type]}  [return description]
   */
  render() {
    let total = 0;
    return (
      <>
        <section className="container contentSection orderSection mainContainer">
          <h2 className="sectionHeader">MY FOOD ORDERS LIST</h2>
          <div className="cartRow">
            <span className="cartItem cartHeader cartColumn">ORDER ID</span>
            <span className="cartItem cartHeader cartColumn">ITEM</span>
            <span className="cartPrice cartHeader cartColumn">PRICE</span>
            <span className="cartQuantity cartHeader cartColumn">QUANTITY</span>
            <span className="cartQuantity cartHeader cartColumn">STATUS</span>
          </div>

          <div className="cartItems">
            {
            this.state.orders &&
              this.state.orders.map((orders, i) => {
                  
                for (let inc = 0; inc < orders.length; inc++) {
                    total = total + orders[inc].price * 1;
                    total = Math.round(total * 100) / 100;
                    //this.setState({grandTotal: total})
                  return <Order order={orders[inc]} key={inc} total={total} />;
                }
              })}
          </div>

          <div className="cartTotal">
            <strong className="cartTotalTitle">All Grand Orders Total</strong>
            <span id="cartTotalPriceId" className="cartTotalPrice">
              ${total}
            </span>
          </div>
        </section>
      </>
    );
  }
}

export default ListOrders;
