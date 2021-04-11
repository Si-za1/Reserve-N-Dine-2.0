import React, { Component } from "react";
import Cart from "./components/js/Cart";
import Order from "./components/js/Order";

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        items: [],
        cartitems: [],
      }
    // this.state = {
    //   cartitems: [
    //     {
    //       item: {
    //         id: 1,
    //         name: "Khir",
    //         rate: 100.0,
    //       },
    //       quantity: 0,
    //     },

    //     {
    //       item: {
    //         id: 2,
    //         name: "Gulab Jamun",
    //         rate: 30.0,
    //       },
    //       quantity: 0,
    //     },

    //     {
    //       item: {
    //         id: 3,
    //         name: "Barfi",
    //         rate: 25.0,
    //       },
    //       quantity: 3,
    //     },
    //   ],
    // };

    this.fetchItems = this.fetchItems.bind(this);
  }

  componentDidMount() {
    this.fetchItems();
  }

  fetchItems() {
    fetch("http://127.0.0.1:8000/api/")
      .then((response) => response.json())
      .then(data => 
        this.setState({
          items: data
        })
      )
  }

  handleAddtoCart = (item) => {
    //console.log(event.target.value)
    const {items, cartitems} = this.state
    if (items.includes(item)) {
      const cartitem = {item, quantity: 1}
      cartitems.push(cartitem)
      this.setState({cartitems: cartitems})
    }
  }

  calculatePrice = (cartitem) => {
    const quantity = cartitem.quantity;
    console.log(cartitem.quantity);
    const rate = cartitem.item.rate;
    return quantity * parseFloat(rate);
  };

  calculatePriceTotal = () => {
    const cartitems = this.state.cartitems;
    let priceTotal = 0;
    cartitems.forEach((cartitem) => {
      priceTotal += this.calculatePrice(cartitem);
    });
    return priceTotal;
  };

  
  handleDecrement = (cartitem) => {
    //console.log('decrement', cartitem)
    const cartitems = [...this.state.cartitems];
    const index = cartitems.indexOf(cartitem);
    //cartitems[index] = {...cartitem}

    if (cartitems[index].quantity > 1) {
      cartitems[index].quantity--;
    } else {
      cartitems.splice(index, 1);
    }

    this.setState({ cartitems });
  };

  handleIncrement = (cartitem) => {
    //console.log('increment', cartitem)
    const cartitems = [...this.state.cartitems];
    const index = cartitems.indexOf(cartitem);
    //cartitems[index] = {...cartitem}

    cartitems[index].quantity++;

    this.setState({ cartitems });
  };

  handleDelete = (cartitem) => {
    const cartitems = [...this.state.cartitems];
    const index = cartitems.indexOf(cartitem);

    cartitems.splice(index, 1);

    this.setState({ cartitems });
  };

  handleReset = () => {
    const cartitems = this.state.cartitems.map((cartitem) => {
      cartitem.quantity = 0;
      return cartitem;
    });
    this.setState({ cartitems });
  };

  render() {
    const cartitems = this.state.cartitems;
    console.log("render app");
    console.log(cartitems);
    return (
      <React.Fragment>
        <Order 
          items={this.state.items}
          handleAddtoCart={this.handleAddtoCart}
        />
        <h1>Your Cart</h1>
        {cartitems === [] ?<p>You have nothing in your cart.</p>:
        <Cart
          cartitems={cartitems}
          calculatePrice={this.calculatePrice}
          calculatePriceTotal={this.calculatePriceTotal}
          handleDecrement={this.handleDecrement}
          handleIncrement={this.handleIncrement}
          handleDelete={this.handleDelete}
          onReset={this.handleReset}
        />} 
      </React.Fragment>
    );
  }
}

export default App;
