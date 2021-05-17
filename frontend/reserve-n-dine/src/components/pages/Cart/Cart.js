import React, { useState } from "react";
import HeroSection from "../../HeroSection";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";
import Pricing from "../../Pricing";
import "./Cart.css";
import vegmomo from "../Menu/images/veg-momo.jpg";
import chocolateicecream from "../Menu/images/chocolate-icecream.jpg";

import { AiOutlineDelete } from "react-icons/ai";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


import { GrFormAdd, GrFormSubtract, GrPrevious, GrNext } from "react-icons/gr";

const Cart = () => {
  //states
  const [cartItems] = useState([
    {
      item: {
        item_id: 1,
        item_name: "Veg Momo",
        item_cost: 100,
        item_ingredients: "Flour, Potato, Carrot, Cabbage, Garlic",
        item_img: vegmomo,
        category_id: 3,
      },
      quantity: 2,
    },
    {
      item: {
        item_id: 6,
        item_name: "Chocolate",
        item_cost: 80,
        item_ingredients: "Flour, Potato, Carrot, Cabbage, Garlic",
        item_img: chocolateicecream,
        category_id: 7,
      },
      quantity: 2,
    },
  ]);
  //functions

  return (
    <>
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjThree} />
      <CartContent>
        <CartHeader />
        {Object.keys(cartItems).length === 0 && <NoCart />}
        {Object.keys(cartItems).length !== 0 && (
          <>
            <CartItemsTable>
              {cartItems.map((cartItem, index) => (
                <CartItem key={index} cartItem={cartItem} />
              ))}
            </CartItemsTable>
            <CartTotal />
            <CartButtons />
          </>
        )}
      </CartContent>
    </>
  );
};

export default Cart;

const CartContent = (props) => {
  return <div className="cart-content">{props.children}</div>;
};

const CartHeader = () => {
  return <div className="cart-header">Your Cart</div>;
};

const NoCart = () => {
  return <div className="no-cart">Nothing to display in your cart.</div>;
};

const CartItemsTable = (props) => {
  return (
    <div className="cart-items-table">
      <table className="div-table">
        <thead className="div-head-row div-row cart-table-header">
          <th className="div-head-col div-col" colSpan="2">
            ITEM
          </th>
          <th className="div-head-col div-col">PRICE</th>
          <th className="div-head-col div-col">QTY</th>
          <th className="div-head-col div-col">TOTAL</th>
          <th className="div-head-col div-col"></th>
        </thead>
        {props.children}
      </table>
    </div>
  );
};

const CartItem = ({ key, cartItem }) => {
  return (
    <tr className="div-row">
      <td className="div-col cart-item-img-container">
        <img
          className="cart-item-img"
          src={cartItem.item.item_img}
          alt={cartItem.item.item_name}
        />
      </td>
      <td className="div-col cart-item-name">{cartItem.item.item_name}</td>
      <td className="div-col cart-item-price">Rs. {cartItem.item.item_cost}</td>
      <td className="div-col cart-item-qty">
        <button className="dcr-btn">
          <GrFormSubtract style={{ fontSize: "0.8em" }} />
        </button>

        {cartItem.quantity}
        <button className="incr-btn">
          <GrFormAdd style={{ fontSize: "0.8em" }} />
        </button>
      </td>
      <td className="div-col cart-item-total">Rs. 100</td>
      <td className="div-col cart-item-del">
        <button className="cart-item-del-btn">
          <AiOutlineDelete />
        </button>
      </td>
    </tr>
  );
};

const CartTotal = () => {
  return (
    <div className="cart-total">
      <div className="cart-total-header">Total</div>
      <div className="cart-total-amount">Rs. 300</div>
    </div>
  );
};

const CartButtons = () => {
  return (
    <div className="cart-btns">
      <button className="add-btn">
        <FaChevronLeft style={{marginRight: "1em", fontSize:"0.8em"}} />
        Add more items
      </button>
      <button className="proceed-btn">
        Proceed <FaChevronRight style={{marginLeft: "1em", fontSize:"0.8em"}} />
      </button>
    </div>
  );
};
