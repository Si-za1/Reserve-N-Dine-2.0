import React, { useContext } from "react";
import { useParams } from "react-router-dom";

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
  return <div>{thisItem.item_name}</div>;
};

export default ItemDetail;
