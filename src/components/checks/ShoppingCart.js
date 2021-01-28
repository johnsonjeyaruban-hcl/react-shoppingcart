import React from "react";
import Cart from "./Cart";

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { id: 1, name: "Cap", price: "5", image: "", cartQuantity: 0 },
        { id: 2, name: "Hand Bag", price: "30", image: "", cartQuantity: 0 },
        { id: 3, name: "Shirt", price: "35", image: "", cartQuantity: 0 },
      ],
      carts: [],
    };
  }

  addToCart = (e, product) => {
    e.preventDefault();
    let { id, name, cartQuantity } = product;
    //+-- Update Products quantity state
    const elementsIndex = this.state.products.findIndex(
      (element) => element.id == id
    );
    let newProductArray = [...this.state.products];
    newProductArray[elementsIndex] = {
      ...newProductArray[elementsIndex],
      cartQuantity: 1,
    };
    this.setState({ products: newProductArray });

    //+-- Update cart quantity state
    let newCart = { id, name, quantity: 1 };
    this.setState({ carts: [...this.state.carts, newCart] });
  };

  increaseQuantity = (e, product) => {
    e.preventDefault();
    let { id, name, cartQuantity } = product;

    //+-- Update Products quantity state
    const productElementsIndex = this.state.products.findIndex(
      (element) => element.id == id
    );
    let newProductArray = [...this.state.products];
    newProductArray[productElementsIndex] = {
      ...newProductArray[productElementsIndex],
      cartQuantity: newProductArray[productElementsIndex].cartQuantity + 1,
    };
    this.setState({ products: newProductArray });

    const elementsIndex = this.state.carts.findIndex(
      (element) => element.id == id
    );
    let newCartArray = [...this.state.carts];
    newCartArray[elementsIndex] = {
      ...newCartArray[elementsIndex],
      quantity: newCartArray[elementsIndex].quantity + 1,
    };
    this.setState({ carts: newCartArray });
  };

  decreaseQuantity = (e, product) => {
    let { id, name, cartQuantity } = product;
    //+-- Update Products quantity state
    const productElementsIndex = this.state.products.findIndex(
      (element) => element.id == id
    );
    let newProductArray = [...this.state.products];
    newProductArray[productElementsIndex] = {
      ...newProductArray[productElementsIndex],
      cartQuantity: newProductArray[productElementsIndex].cartQuantity - 1,
    };
    this.setState({ products: newProductArray });

    const elementsIndex = this.state.carts.findIndex(
      (element) => element.id == id
    );
    let newCartArray = [...this.state.carts];
    newCartArray[elementsIndex] = {
      ...newCartArray[elementsIndex],
      quantity: newCartArray[elementsIndex].quantity - 1,
    };
    this.setState({ carts: newCartArray });
  };

  render() {
    return (
      <>
        <div>
          <ul>
            {this.state.products &&
              this.state.products.map((product, index) => {
                let { id, name, price, image, cartQuantity } = product;
                return (
                  <li key={id} data-testid={`product-item-${index}`}>
                    <div>{name}</div>
                    <div>${price}</div>
                    <div>
                      <span>Quantity:</span>
                      <span data-testid="">{cartQuantity}</span>
                    </div>
                    <div>
                      {cartQuantity == 0 && (
                        <button
                          data-testid="btn-item-add"
                          onClick={(e) => this.addToCart(e, product)}
                        >
                          Add to Cart
                        </button>
                      )}

                      {cartQuantity > 0 && (
                      <button
                        data-testid="btn-quantity-add"
                        onClick={(e) => this.increaseQuantity(e, product)}
                      >
                        Increase Quantity
                      </button>
                      )}
                      {cartQuantity > 0 && (
                      <button
                        data-testid="btn-quantity-subtract"
                        onClick={(e) => this.decreaseQuantity(e, product)}
                      >
                        Decrease Quantity
                      </button>
                      )}
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
        <Cart carts={this.state.carts} />
      </>
    );
  }
}

export default ShoppingCart;
