import React from "react";

class Order extends React.Component {
  constructor(props) {
    super(props);
  }

  /**
   * [render description]
   *
   * @return  {[type]}  [return description]
   */
  render() {
    let { order } = this.props;
    let { genOrderId, price, name, image, status } = order;
    let quantity = order?.quantity || 1;
    let statusText = "Ordered";
    let btnClassName = "btn btnDanger";
    
    switch (status) {
      case 1:
        statusText = "Ordered";
        btnClassName = "btn btnDanger";
        break;

      case 2:
        statusText = "Shipped";
        btnClassName = "btn btnPrimary";
        break;

      case 3:
        statusText = "Dispatched";
        btnClassName = "btn btnGreen";
        break;

      default:
        statusText = "Ordered";
        btnClassName = "btn btnDanger";
        break;
    }
    let productImage = `assets/images/${image}`;
    return (
      <div className="cartRow">
        <span className="cartPrice cartColumn">{genOrderId}</span>
        <div className="cartItem cartColumn">
          <img
            className="cartItemImage"
            src={productImage}
            width="100"
            height="100"
          />
          <span className="cartItemTitle">{name}</span>
        </div>
        <span className="cartPrice cartColumn">${price}</span>
        <div className="cartQuantity cartColumn">
          <input
            className="cartQuantityInput"
            type="number"
            value={quantity}
            disabled="true"
          />
          <button className={btnClassName} type="button" disabled={true}>
            {statusText}
          </button>
        </div>
      </div>
    );
  }
}

export default Order;
