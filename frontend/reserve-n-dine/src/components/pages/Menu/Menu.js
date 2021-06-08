import React, { useState, useContext } from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
import { FaSearch, FaAngleUp, FaAngleDown, FaCartPlus } from "react-icons/fa";
import { GrFormNext } from "react-icons/gr";
import { IconContext } from "react-icons";
import HeroSection from "../../HeroSection";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";
import Pricing from "../../Pricing";
import { ItemsContext } from "../../context/ItemsContext";
import { CartItemsContext } from "../../context/CartItemsContext";


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

  const items = useContext(ItemsContext);
  const { cartItems } = useContext(CartItemsContext);

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
    <>
      <MenuContent>
        <CartIcon />

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
                />
              ))}
          </CategoriesList>
        </SideNav>
        <MainContent>
          {renderSelectedCategoryTitle()}
          {renderMenuItems()}
        </MainContent>
      </MenuContent>
    </>
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
  return <div className="menu-items-list">{props.children}</div>;
};

const Item = ({ item }) => {
  return (
    
      <div className="menu-item-card">
        
        <div className="menu-img-container">
        <Link to={`/menu/items/${item.item_id}`} style={{ textDecoration: "none", color:"inherit"}}>
          <img src={item.item_img} alt={item.item_name} className="menu-item-img" />
          </Link>
        </div>
        
        <div className="menu-card-content">
          <div className="menu-item-name">{item.item_name}
          </div>
          <div className="menu-item-cost">Rs. {item.item_cost}</div>
          <button className="menu-add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
    
  );
};

const CartIcon = () => {
  return (
    <>
      <Link to="/cart">
        <button className="cart-icon-link">
          <FaCartPlus style={{ fontSize: "1.4rem" }} />
          <span className="cart-items-no">5</span>
        </button>
      </Link>
    </>
  );
};
