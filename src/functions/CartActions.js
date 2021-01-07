/**
 * [default description]
 *
 * @param   {[Int]}  id     [id description]
 * @param   {[String]}  title  [title description]
 * @param   {[Float]}  price  [price description]
 * @param   {[String]}  image  [image description]
 *
 * @return  {[type]}         [return description]
 */
export default function addItemToCart(id, title, price, image) {
  let cartItems = document.getElementsByClassName("cartItems")[0];
  let cartItemNames = cartItems.getElementsByClassName("cartItemTitle");
  for (let i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == title) {
      alert("This item is already added to the cart");
      return;
    }
  }
}

/**
 * [removeCartItem description]
 *
 * @param   {[type]}  event  [event description]
 *
 * @return  {[type]}         [return description]
 */
const removeCartItem = (event) => {
  let buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();
  updateCartTotal();
};

/**
 * @param
 * @description Updating Cart total with the help of carItems classes based on quantity class
 * @returns
 */
const updateCartTotal = () => {
  let cartItemContainer = document.getElementsByClassName("cartItems")[0];
  let cartRows = cartItemContainer.getElementsByClassName("cartRow");
  let total = 0;
  let productIdsArray = [];
  let productIdsObj = {};
  for (let i = 0; i < cartRows.length; i++) {
    //+-- Updating cart objects in local
    let cartRow = cartRows[i];
    let cartProductId = cartRow.getElementsByClassName("cartProductId")[0]
      .innerText;
    let priceElement = cartRow.getElementsByClassName("cartPrice")[0];
    let quantityElement = cartRow.getElementsByClassName(
      "cartQuantityInput"
    )[0];
    let nameElement = cartRow.getElementsByClassName("cartItemTitle")[0];
    let imageElement = cartRow.getElementsByClassName("cartItemImage")[0];
    let productName = nameElement.innerText;
    let imageSrc = imageElement.getAttribute("src");
    let price = parseFloat(priceElement.innerText.replace("$", ""));
    let quantity = quantityElement.value;
    total = total + price * quantity;
    productIdsObj = {
      productId: cartProductId,
      quantity: quantity,
      price: price,
      name: productName,
      imageSrc,
    };
    productIdsArray.push(productIdsObj);
  }

  //+-- Update or Add Carts local storage obj (in future we can use this local storage to retrieve cart data even page refreshed but now only used as a reference object)
  localStorage.setItem("cartItems", JSON.stringify(productIdsArray));
  total = Math.round(total * 100) / 100;
  document.getElementsByClassName("cartTotalPrice")[0].innerText = "$" + total;
};

/**
 * @param
 * @description While changing the Quantity and update the cart total
 * @returns
 */
const quantityChanged = (event) => {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
};

/**
 * [cartActions description]
 *
 * @var {[type]}
 */
export const cartActions = {
  updateCartTotal,
  removeCartItem,
};
