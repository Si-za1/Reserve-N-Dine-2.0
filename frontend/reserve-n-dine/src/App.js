import React from "react";
import "./App.css";
import Home from "./components/pages/HomePage/Home";
import Services from "./components/pages/Services/Services";
import Products from "./components/pages/Products/Products";
import Menu from "./components/pages/Menu/Menu";
import SignUp from "./components/pages/SignUp/SignUp";
import Login from "./components/pages/Login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./components/pages/Cart/Cart";
import Footer from "./components/pages/Footer/Footer";

//context for items
import { ItemsProvider } from "./components/context/ItemsContext";
import ItemDetail from "./components/pages/Menu/ItemDetail";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/products" component={Products} />
        <Route path="/menu" exact>
          <ItemsProvider>
            <Menu />
          </ItemsProvider>
        </Route>
        <Route path="/menu/items/:itemId">
          {/* context for items */}
          <ItemsProvider>
            <ItemDetail />
          </ItemsProvider>
        </Route>
        <Route path="/cart" component={Cart} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/log-in" component={Login} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
