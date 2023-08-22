import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import {
  Home,
  Products,
  SingleProduct,
  About,
  Cart,
  Error,
  Checkout,
  PrivateRoute,
} from "./pages/pages";
function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact patch="/">
          <Home />
        </Route>
        <Route patch="/about">
          <About />
        </Route>
        <Route patch="/cart">
          <Cart />
        </Route>
        <Route patch="/products">
          <Products />
        </Route>
        <Route patch="/products/:id" children={<SingleProduct />}></Route>
        <Route patch="/checkout">
          <Checkout />
        </Route>
        <Route patch="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
