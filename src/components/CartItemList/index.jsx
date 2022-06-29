import CartItem from "../CartItem";
import styles from "./style.module.css";

import propTypes from "prop-types";

const CartItemlist = ({ items }) => (
  <div className={styles.cartItemList}>
    {items.map((item) => (
      <CartItem key={item.id} item={item} />
    ))}
  </div>
);

CartItemlist.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
    })
  ),
};

export default CartItemlist;
