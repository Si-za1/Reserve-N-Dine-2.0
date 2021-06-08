import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";

//context for items
import { ItemsContext } from "../../context/ItemsContext";
import { CartItemsContext } from "../../context/CartItemsContext";

const ItemDetail = () => {
  //context for items
  const items = useContext(ItemsContext);
  const { cartItems, handleAddToCart } = useContext(CartItemsContext);
  console.log(cartItems);
 

  console.log(items);
  const { itemId } = useParams();
  console.log(itemId);
  const thisItem = items.find((item) => item.item_id === parseInt(itemId));
  console.log(thisItem);

  var initialQuantity = 0;
  const thisCartItem = cartItems.find(cartItem => cartItem.item_id=== thisItem.item_id);
  console.log(thisCartItem)
  if (thisCartItem) {
    initialQuantity = thisCartItem.quantity;
  } 

  const [quantity, setQuantity] = useState(initialQuantity);
  console.log(quantity);
  return (
    <>
      <div>{thisItem.item_name}</div>

      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button onClick={() => handleAddToCart(thisItem, parseInt(quantity))}>
        Add to cart
      </button>
    </>
  );
};

export default ItemDetail;
