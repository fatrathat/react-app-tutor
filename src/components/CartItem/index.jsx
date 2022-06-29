import propTypes from "prop-types";
import { CloseButton } from "../Button";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  cartItem: {
    display: "flex",
    alignItems: "center",
    padding: 10,
    columnGap: 30,
    backgroundColor: "yellow",
  },
  column: {
    display: "flex",
    flexDirection: "column",
  },
  counter: {
    display: "flex",
    flexDirection: "column",
  },
  red: {
    color: "red",
    fontWeight: 800,
  },
  value({ item }) {
    return {
      color: !item.count ? "red" : "green",
      fontWeight: !item.count ? 800 : 400,
    };
  },
});

const CartItem = ({ item }) => {
  const styles = useStyles({ item });
  const amount = item.count * item.price;

  return (
    <div className={styles.cartItem}>
      <div className={styles.column}>
        <span>{item.name}</span>
        <span>{item.price}$</span>
      </div>
      <div className={styles.counter}>
        <span>
          <button>-</button>
          <span className={styles.value}>{item.count}</span>
          <button>+</button>
        </span>
      </div>
      <span>{amount}</span>
      <CloseButton />
    </div>
  );
};

CartItem.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string.isRequired,
      price: propTypes.number.isRequired,
      count: propTypes.string.isRequired,
    })
  ),
};

export default CartItem;
