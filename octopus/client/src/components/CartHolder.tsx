import React, { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { ProductType } from "../types";
import styles from "./CartHolder.module.scss";

export const CartHolder: React.FC<{ product: ProductType }> = ({ product }) => {
  const { addProduct } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");

  const dereaseQuantity = () => {
    if (quantity > 1) setQuantity((quantity) => quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity((quantity) => quantity + 1);
  };

  const addToCart = () => {
    addProduct(product, quantity);
    setMessage(`${quantity} item/s were successfully added to the cart`);
    setTimeout(() => {
      setMessage("");
    }, 2000);
    setQuantity(1);
  };

  return (
    <>
      <div className={`${styles.alert} ${message ? styles.show : ""} `}>
        {message}
      </div>
      <div className={styles.priceRow}>
        <div className={styles.priceContainer}>
          <div className={styles.price}>
            {(product.price / 100).toString().split(".")[0]}
          </div>
          <div className={styles.priceDecimals}>
            .{(product.price / 100).toString().split(".")[1]}
          </div>
        </div>
        <div className={styles.counterContainer}>
          <div className={styles.label}>QTY</div>
          <div className={styles.counterContainerButtons}>
            <button
              aria-label="Decrease amount"
              className={styles.quantityButton}
              disabled={quantity < 2}
              onClick={() => dereaseQuantity()}
            >
              -
            </button>
            <div className={styles.quantity}>
              <div aria-label="quantity" className={styles.number}>
                {quantity}
              </div>
            </div>
            <button
              className={styles.quantityButton}
              aria-label="Increase amount"
              onClick={() => increaseQuantity()}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className={styles.addToCartContainer}>
        <button
          aria-label="Add to cart"
          className={styles.addToCartButton}
          onClick={() => addToCart()}
        >
          Add to cart
        </button>
      </div>
    </>
  );
};
