import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "../MealItem/MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const cartContext = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} id={props.id} />
      </div>
    </li>
  );
};

export default MealItem;
