import React, { useState } from "react";

import vegmomo from "./images/veg-momo.jpg";
import bananalassi from "./images/banana-lassi.jpg";
import buffchowmein from "./images/buff-chowmein.jpg";
import butterscotch from "./images/butter-scotch.jpeg";
import chickencmomo from "./images/chicken-c-momo.jpg";
import vegchowmein from "./images/veg-chowmein.jpg";
import chocolateicecream from "./images/chocolate-icecream.jpg";
import friedbuffmomo from "./images/fried-buff-momo.png";
import lemontea from "./images/lemon-tea.jpg";
import milktea from "./images/milk-tea.jpg";
import strawberry from "./images/strawberry.jpg";
import vanilla from "./images/vanilla.jpg";

import lassi from "./images/lassi.JPG";
import chickensizzler from "./images/chicken-sizzler.jpg";

export const ItemsContext = React.createContext();

export const ItemsProvider = (props) => {
  const [items] = useState([
    {
      item_id: 1,
      item_name: "Veg Momo",
      item_cost: 100,
      item_ingredients: "Flour, Potato, Carrot, Cabbage, Garlic",
      item_img: vegmomo,
      category_id: 3,
    },
    {
      item_id: 2,
      item_name: "Fried Buff Momo",
      item_cost: 120,
      item_ingredients: "Flour, Potato, Carrot, Cabbage, Garlic",
      item_img: friedbuffmomo,
      category_id: 3,
    },

    {
      item_id: 3,
      item_name: "Chicken C Momo",
      item_cost: 130,
      item_ingredients: "Flour, Potato, Carrot, Cabbage, Garlic",
      item_img: chickencmomo,
      category_id: 3,
    },
    {
      item_id: 4,
      item_name: "Lemon Tea",
      item_cost: 20,
      item_ingredients: "Flour, Potato, Carrot, Cabbage, Garlic",
      item_img: lemontea,
      category_id: 6,
    },
    {
      item_id: 5,
      item_name: "Milk Tea",
      item_cost: 25,
      item_ingredients: "Flour, Potato, Carrot, Cabbage, Garlic",
      item_img: milktea,
      category_id: 6,
    },
    {
      item_id: 6,
      item_name: "Chocolate",
      item_cost: 80,
      item_ingredients: "Flour, Potato, Carrot, Cabbage, Garlic",
      item_img: chocolateicecream,
      category_id: 7,
    },
    {
      item_id: 7,
      item_name: "Butter Scotch",
      item_cost: 100,
      item_ingredients: "Flour, Potato, Carrot, Cabbage, Garlic",
      item_img: butterscotch,
      category_id: 7,
    },
    {
      item_id: 8,
      item_name: "Banana Lassi",
      item_cost: 100,
      item_ingredients: "Flour, Potato, Carrot, Cabbage, Garlic",
      item_img: bananalassi,
      category_id: 5,
    },
    {
      item_id: 9,
      item_name: "Veg Chowmein",
      item_cost: 50,
      item_ingredients: "Flour, Potato, Carrot, Cabbage, Garlic",
      item_img: vegchowmein,
      category_id: 4,
    },
    {
      item_id: 9,
      item_name: "Buff Chowmein",
      item_cost: 80,
      item_ingredients: "Flour, Potato, Carrot, Cabbage, Garlic",
      item_img: buffchowmein,
      category_id: 4,
    },
    {
      item_id: 10,
      item_name: "Vanilla",
      item_cost: 100,
      item_ingredients: "Flour, Potato, Carrot, Cabbage, Garlic",
      item_img: vanilla,
      category_id: 7,
    },
    {
      item_id: 11,
      item_name: "Strawberry",
      item_cost: 100,
      item_ingredients: "Flour, Potato, Carrot, Cabbage, Garlic",
      item_img: strawberry,
      category_id: 7,
    },
  ]);

 

  return (
    <ItemsContext.Provider value={items}>
      {props.children}
    </ItemsContext.Provider>
  );
};

