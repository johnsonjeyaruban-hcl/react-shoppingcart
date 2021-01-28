import React from "react";

class Cart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { carts } = this.props;
    return (
      <>
        <div>
          <h1>Your Cart</h1>
          <div>
            <table>
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>Quantity</th>
                </tr>
                {carts &&
                  carts.map((cart, index) => {
                    let { id, name, quantity } = cart;
                    if (quantity >= 1) {
                      return (
                        <tr key={index} data-testid={`cart-item-${index}`}>
                          <td data-testid="cart-item-name">{name}</td>
                          <td data-testid="cart-item-quantity">{quantity}</td>
                        </tr>
                      );
                    }
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}

export default Cart;
