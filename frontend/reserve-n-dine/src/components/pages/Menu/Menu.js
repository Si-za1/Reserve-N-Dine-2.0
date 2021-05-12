import React, { useState } from "react";
import "./Menu.css";
import {
  FaSearch,
  FaAngleUp,
  FaAngleDown,
} from "react-icons/fa";
import { GrFormNext } from "react-icons/gr";
import { IconContext } from "react-icons";
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

const Menu = () => {
  /*===========
  States
  ===========*/

  //to be fetched from database
  const [categories] = useState([
    {
      category_id: 1,
      category_name: "Drinks",
      parent_category_id: null,
    },
    {
      category_id: 2,
      category_name: "Snacks",
      parent_category_id: null,
    },
    {
      category_id: 3,
      category_name: "Momo",
      parent_category_id: 2,
    },
    {
      category_id: 4,
      category_name: "Chowmein",
      parent_category_id: 2,
    },
    {
      category_id: 5,
      category_name: "Lassi",
      parent_category_id: 1,
    },
    {
      category_id: 6,
      category_name: "Tea",
      parent_category_id: 1,
    },
    {
      category_id: 7,
      category_name: "Ice Cream",
      parent_category_id: null,
    },
  ]);

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

  //other states
  const [selectedCategory, setSelectedCategory] = useState({});

  const [selectedParentCategory, setSelectedParentCategory] = useState({});

  const [selectedItems, setSelectedItems] = useState(items);

  /*===========
  Variables
  ===========*/

  /*===========
  Functions
  ===========*/

  const onSelectingAll = () => {
    setSelectedCategory({});
    setSelectedParentCategory({});
    setSelectedItems(items);
  };

  const onSelectingCategory = (category) => {
    setSelectedCategory(category);
    if (category.parent_category_id !== null) {
      setSelectedParentCategory(
        categories.find(
          (element) => category.parent_category_id === element.category_id
        )
      );
    } else {
      setSelectedParentCategory({});
    }

    setSelectedItems(
      items.filter((item) => item.category_id === category.category_id)
    );
  };

  console.log(selectedCategory);
  console.log(selectedParentCategory);
  console.log(selectedItems);

  const renderSelectedCategoryTitle = () => {
    if (Object.keys(selectedCategory).length === 0) {
      return;
    } else if (Object.keys(selectedParentCategory).length === 0) {
      return (
        <div className="selected-category-container">
          <div className="selected-category">
            {selectedCategory.category_name}
          </div>
        </div>
      );
    } else {
      return (
        <div className="selected-category-container">
          <div className="selected-category">
            {selectedParentCategory.category_name}
          </div>
          <IconContext.Provider
            value={{
              style: { fontSize: "1.6em", margin: "0 12px", fill: "green" },
            }}
          >
            <GrFormNext style={{ fill: "green" }} />
          </IconContext.Provider>

          <div className="selected-subcategory">
            {selectedCategory.category_name}
          </div>
        </div>
      );
    }
  };

  const renderMenuItems = () => {
    if (Object.keys(selectedItems).length === 0) {
      
    } else {
      return (
        <Items>
          {selectedItems.map((item, index) => (
            <Item key={index} item={item} />
          ))}
        </Items>
      );
    }
    return;
  };

  return (
    <MenuContent>
      <SearchBar />
      <SideNav>
        <CategoriesList handleSelectingAll={onSelectingAll}>
          {categories
            .filter((category) => !category.parent_category_id)
            .map((category, index) => (
              <Category
                key={index}
                category={category}
                categories={categories}
                handleSelectingCategory={onSelectingCategory}
              ></Category>
            ))}
        </CategoriesList>
      </SideNav>
      <MainContent>
        {renderSelectedCategoryTitle()}
        {renderMenuItems()}
      </MainContent>
    </MenuContent>
  );
};

export default Menu;

const MenuContent = (props) => {
  return <div className="menu-content">{props.children}</div>;
};

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <form className="search-bar">
        <input
          id="search-item"
          className="search-item"
          type="text"
          placeholder="Search food item"
          aria-label="Search food item"
        />
        <button className="search-icon">
          <FaSearch style={{ fontSize: "1rem" }} />
        </button>
      </form>
    </div>
  );
};

const SideNav = (props) => {
  return (
    <div className="menu-sidenav">
      <div className="categories-header">Categories</div>

      {props.children}
    </div>
  );
};

const CategoriesList = (props) => {
  return (
    <div className="categories-list">
      <button className="category-btn" onClick={props.handleSelectingAll}>
        All
      </button>
      {props.children}
    </div>
  );
};

const Category = (props) => {
  const renderCategory = () => {
    //Extracting subcategories of individual parent category
    const subcategories = [];
    props.categories.forEach((element) => {
      if (element.parent_category_id === props.category.category_id) {
        subcategories.push(element);
      }
    });
    //console.log(props.categories);
    if (subcategories.length === 0) {
      return (
        <button
          className="category-btn"
          onClick={() => props.handleSelectingCategory(props.category)}
        >
          <div className="category-title">{props.category.category_name}</div>
        </button>
      );
    } else {
      return (
        <SubCategoriesDropdown
          title={props.category.category_name}
          list={subcategories}
          handleSelectingSubCategory={props.handleSelectingCategory}
        ></SubCategoriesDropdown>
      );
    }
  };
  return (
    <div className="category">
      {renderCategory()}
      {props.children}
    </div>
  );
};

const SubCategoriesDropdown = (props) => {
  const [open, setOpen] = useState(false);

  const toggleList = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <div className="dd-wrapper">
      <button type="button" className="dd-header" onClick={toggleList}>
        {props.title}
        {/* <div className="header-title">{headerTitle}</div> */}

        {open ? (
          <FaAngleUp style={{ fontSize: "1em" }} />
        ) : (
          <FaAngleDown style={{ fontSize: "1em" }} />
        )}
      </button>
      {open && (
        <div className="list">
          {props.list.map((item) => (
            <button
              type="button"
              className="dd-list-item"
              key={item.category_id}
              onClick={() => props.handleSelectingSubCategory(item)}
            >
              <div className="sub-category-title">{item.category_name}</div>
            </button>
          ))}
        </div>
      )}
      {props.children}
    </div>
  );
};

const MainContent = (props) => {
  return <div className="main-content">{props.children}</div>;
};

const Items = (props) => {
  return <div className="items-list">{props.children}</div>;
};

const Item = ({ item }) => {
  return (
    <>
      <div className="item-card">
        <div className="img-container">
          <img src={item.item_img} alt={item.item_name} className="item-img" />
        </div>
        <div className="card-content">
          <div className="item-name">{item.item_name}</div>
          <div className="item-cost">{item.item_cost}</div>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
    </>
  );
};
