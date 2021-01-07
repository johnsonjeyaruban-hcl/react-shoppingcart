import React from "react";
import CartItems from "./CartItems";
import Product from "./Product";
import { connect } from "react-redux";
import { fetchSuccess, fetchFailure, FETCH_PRODUCTS } from "../../redux/";
import { getData } from "../../services/api";


class ListProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  /**
   * [componentDidMount description]
   *
   * @return  {[type]}  [return description]
   */
  componentDidMount() {
    // let url = `foods`;
    // getData(url)
    //   .then((response) => {
    //     let responseObject = response.data;
    //     let checkResponseObject = responseObject?.length > 0;
    //     if (checkResponseObject === true) {
    //       //this.setState({ products: responseObject });
    //       this.props.dispatch(fetchSuccess(responseObject));
    //     }
    //   })
    //   .catch((error) => {
    //     console.log("response catch block", error);
    //   });

    //this.props.dispatch({type: FETCH_PRODUCTS})
    this.props.dispatch(separateGetForThunk());
  }

  /**
   * [render description]
   *
   * @return  {[type]}  [return description]
   */
  render() {
    let {data, cart} = this.props;
    return (
      <>
        <section className="container contentSection mainContainer">
          <h2 className="sectionHeader">Food Menu</h2>
          <div className="shopItems" id="appendAllProducts">
            {data &&
              data.map((product, i) => {
                return (
                  <Product product={product} key={i}>
                    <button
                      onClick={() =>
                        this.props.history.push(
                          `/product-details/${product.id}`
                        )
                      }
                    >
                      View More
                    </button>
                  </Product>
                );
              })}
          </div>
        </section>
        <CartItems />
      </>
    );
  }
}

const separateGetForThunk = () => {
  return (dispatch, getState) => {
    let url = `foods`;
    getData(url)
      .then((response) => {
        let responseObject = response.data;
        let checkResponseObject = responseObject?.length > 0;
        if (checkResponseObject === true) {
          //this.setState({ products: responseObject });
          dispatch(fetchSuccess(responseObject));
          console.log('getState', getState())
        }
      })
      .catch((error) => {
        console.log("response catch block", error);
      });
  };
};

/**
 * [mapStateToProps description]
 *
 * @param   {[type]}  state  [state description]
 *
 * @return  {[type]}         [return description]
 */
const mapStateToProps = (state) => {
  return {
    data: state.listproduct.product,
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

export default connect(mapStateToProps, mapDispatchToProps)(ListProducts);
