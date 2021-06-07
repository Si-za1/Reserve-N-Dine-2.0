import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import "./ItemDetail.css";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

//context for items
import { ItemsContext } from "../../context/ItemsContext";


const ItemDetail = () => {
  //context for items
  const items = useContext(ItemsContext);
  
  console.log(items);
  const { itemId } = useParams();
  console.log(itemId);
  const thisItem = items.find((item) => item.item_id === parseInt(itemId));
  console.log(thisItem);
  return (
  <div>
      <div className="back-to-result">
        <Link to="/menu" style={{ textDecoration: "none", color:"inherit"}}><ArrowBackIcon /></Link>
      </div>
      <div className="details">
        <div className="details-image">
          <img src={thisItem.item_img} alt="item"></img>
        </div>
        <div className="details-info">
         <ul>
          <li>
            <div className="item-name">
             <h1>{thisItem.item_name}</h1>
             </div>
          </li>
          <li>
          <div className="item-description">
           <h1>Description:</h1> 
           <p>{thisItem.item_description}</p>
            </div>
           </li>
           <li>
             <div className="ingredients">
            <h1>Ingredients:</h1>
            <p>{thisItem.item_ingredients}</p>
            </div>
          </li>
           
          <li>
          <div className="price">
           <h1>Price:</h1><p><b> Rs {thisItem.item_cost}</b></p>
           </div>
          </li>
          <li>
            <div className="quantity">
            <div className="qty">
            <input type="number" name="Quantity" placeholder="Quantity"  required/>
            </div>
           <button className="add-to-cart-btn">Add to Cart</button>
           </div>
          </li>
         </ul>
       
       </div>
      </div>
  </div>
  ) 
};

export default ItemDetail;
