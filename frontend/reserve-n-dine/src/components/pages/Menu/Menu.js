import React, { Component } from "react";
import ItemCard from "./ItemCard";
import Category from "./Category";
import "../css/Menu.css";

export class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          item_id: 1,
          item_name: "Veg Momo",
          item_cost: 100,
          item_ingredients: "Flour, Potato, Carrot, Cabbage, Garlic",
        },
        {
          item_id: 2,
          item_name: 'Buff Momo',
          item_cost: 120,
          item_ingredients: 'Flour, Potato, Carrot, Cabbage, Garlic',
        },
        
        {
          item_id: 3,
          item_name: 'Chicken Momo',
          item_cost: 130,
          item_ingredients: 'Flour, Potato, Carrot, Cabbage, Garlic',
        },
        // {
        //   item_id: 3,
        //   item_name: 'Chicken Momo',
        //   item_cost: 130,
        //   item_ingredients: 'Flour, Potato, Carrot, Cabbage, Garlic',
        // },
        // {
        //   item_id: 3,
        //   item_name: 'Chicken Momo',
        //   item_cost: 130,
        //   item_ingredients: 'Flour, Potato, Carrot, Cabbage, Garlic',
        // },
        // {
        //   item_id: 3,
        //   item_name: 'Chicken Momo',
        //   item_cost: 130,
        //   item_ingredients: 'Flour, Potato, Carrot, Cabbage, Garlic',
        // },
        // {
        //   item_id: 3,
        //   item_name: 'Chicken Momo',
        //   item_cost: 130,
        //   item_ingredients: 'Flour, Potato, Carrot, Cabbage, Garlic',
        // },
        // {
        //   item_id: 3,
        //   item_name: 'Chicken Momo',
        //   item_cost: 130,
        //   item_ingredients: 'Flour, Potato, Carrot, Cabbage, Garlic',
        // },
        // {
        //   item_id: 3,
        //   item_name: 'Chicken Momo',
        //   item_cost: 130,
        //   item_ingredients: 'Flour, Potato, Carrot, Cabbage, Garlic',
        // },
        // {
        //   item_id: 3,
        //   item_name: 'Chicken Momo',
        //   item_cost: 130,
        //   item_ingredients: 'Flour, Potato, Carrot, Cabbage, Garlic',
        // },
        // {
        //   item_id: 3,
        //   item_name: 'Chicken Momo',
        //   item_cost: 130,
        //   item_ingredients: 'Flour, Potato, Carrot, Cabbage, Garlic',
        // },
        // {
        //   item_id: 3,
        //   item_name: 'Chicken Momo',
        //   item_cost: 130,
        //   item_ingredients: 'Flour, Potato, Carrot, Cabbage, Garlic',
        // },
        // {
        //   item_id: 3,
        //   item_name: 'Chicken Momo',
        //   item_cost: 130,
        //   item_ingredients: 'Flour, Potato, Carrot, Cabbage, Garlic',
        // },
        // {
        //   item_id: 3,
        //   item_name: 'Chicken Momo',
        //   item_cost: 130,
        //   item_ingredients: 'Flour, Potato, Carrot, Cabbage, Garlic',
        // },
        // {
        //   item_id: 3,
        //   item_name: 'Chicken Momo',
        //   item_cost: 130,
        //   item_ingredients: 'Flour, Potato, Carrot, Cabbage, Garlic',
        // },
        // {
        //   item_id: 3,
        //   item_name: 'Chicken Momo',
        //   item_cost: 130,
        //   item_ingredients: 'Flour, Potato, Carrot, Cabbage, Garlic',
        // },
        // {
        //   item_id: 3,
        //   item_name: 'Chicken Momo',
        //   item_cost: 130,
        //   item_ingredients: 'Flour, Potato, Carrot, Cabbage, Garlic',
        // },
        // {
        //   item_id: 3,
        //   item_name: 'Chicken Momo',
        //   item_cost: 130,
        //   item_ingredients: 'Flour, Potato, Carrot, Cabbage, Garlic',
        // },
      ],

      categories: [
        {
          category_id: 1,
          category_name: "Drinks",
        },
        {
          category_id: 2,
          category_name: "Snacks",
        },
      ],
      cartitems: [],
    };
    //this.fetchItems = this.fetchItems.bind(this);
  }

  // componentDidMount() {
  //   this.fetchItems();
  // }

  // fetchItems() {
  //   fetch("http://127.0.0.1:8000/api/")
  //     .then((response) => response.json())
  //     .then((data) =>
  //       this.setState({
  //         items: data,
  //       })
  //     );
  // }

  handleAddtoCart = (item) => {
    //console.log(event.target.value)
    const { items, cartitems } = this.state;
    if (items.includes(item)) {
      const cartitem = { item, quantity: 1 };
      if (cartitems.includes(cartitem)) {
        const index = cartitems.indexOf(cartitem);
        cartitems[index].quantity++;
      } else {
        cartitems.push(cartitem);
      }
      this.setState({ cartitems: cartitems });
      console.log(cartitems);
    }
  };

  render() {
    const { items, categories } = this.state;
    return (
      <div className="menu">
        {/* Navbar */}
        <div className="menu-nav">Navigation</div>

        {/* Header */}
        <div className="menu-header">Header</div>

        {/* Categories List */}
        <div className="menu-sidebar">
          <h3>Categories</h3>
          <div className="categories-list">
            {categories.map((category, index) => (
              <Category key={index} category={category} />
            ))}
          </div>
        </div>

        <div className="menu-main">
          {/* Search Bar */}
          <div classname="search-bar">
            <form>
              <label for="search-item"></label>
              <input id="search-item" type="text" />
              <button className="search-icon"></button>
            </form>
          </div>

          {/* Selected Category */}
          <div className="selected-category">
            <h3>
              <span>Snacks</span>
              <span>-</span>
              <span>Momo</span>
            </h3>
          </div>

          {/* Items List */}
          <div className="items-list">
            {items.map((item, index) => (
              <ItemCard
                key={index}
                item={item}
                onAddtoCart={this.handleAddtoCart}
              />
            ))}
          </div>
        </div>
        {/* Footer */}
        <div className="menu-footer">Footer</div>
      </div>
    );
  }
}

export default Order;
