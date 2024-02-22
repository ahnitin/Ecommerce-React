import { useContext } from "react";
import Model from "../UI/Model";
import { IoMdClose } from "react-icons/io";
import CartContext from "../../store/cart-context";
import styles from "./Cart.module.css";

const Cart = (props) => {
  const { cart, removeItem, addItem } = useContext(CartContext);
  let items = cart.items;
  return (
    <Model onHideCart={props.onHideCart}>
      <span
        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        onClick={props.onHideCart}
      >
        <IoMdClose />
      </span>
      <ul className={`list-group list-group-flush ${styles.items}`}>
        {items.map((item) => (
          <li
            className={`list-group-item list-group-item-action ${styles["single_item"]}`}
          >
            <div>
              <div className={styles.item_name}>{item.title}</div>
              <div>
                <img src={item.photo} class={` ${styles.images}`} alt="..." />
              </div>
            </div>
            <div>
              <span>${item.price} </span> <span> x {item.quantity}</span>
            </div>
            <div className={styles.add_remove}>
              <button
                className="btn btn-outline-danger"
                onClick={() => {
                  removeItem(item);
                }}
              >
                -
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => addItem(item)}
              >
                +
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.total_Amount}>
        <span>Total Amount:</span>
        <span>$ {cart.total}</span>
      </div>
      <div className={styles.order_close}>
        <button onClick={props.onHideCart} className="btn btn-outline-danger">
          Close
        </button>
        <button className="btn btn-danger">Order</button>
      </div>
    </Model>
  );
};
export default Cart;
