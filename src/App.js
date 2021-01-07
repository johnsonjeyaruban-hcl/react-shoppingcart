import "./App.css";
import React from "react";
import Header from "./layout/views/Header";
import Footer from "./layout/views/Footer";
import Login from "./components/users/Login";
import Register from "./components/users/Register";
import ListProducts from "./components/products/ListProducts";
import ListOrders from "./components/products/ListOrders";
import NoMatch from "./components/common/NoMatch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import {getStore} from "./redux/store";
import { PrivateRoute } from "./routes/PrivateRoute";

const store = getStore();
function App() {
  return (
    <React.Fragment>
      <Header />
      <Router>
        <Provider store={store}>
          <Switch>
            <PrivateRoute exact path="/products" component={ListProducts} />
            <PrivateRoute exact path="/orders" component={ListOrders} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/" component={NoMatch} />
          </Switch>
        </Provider>
      </Router>
      <Footer />
    </React.Fragment>
  );
}

export default App;
