import React, { useContext, useMemo } from "react";
import { CartContext } from "../contexts/CartContext";
import styles from "./Header.module.scss";

export const Header: React.FC = () => {
  const { cart } = useContext(CartContext);

  const totalItems = useMemo(() => {
    let items = 0;
    for (let item in cart) {
      items = items + cart[item].quantity;
    }
    return items;
  }, [cart]);

  return (
    <header>
      <div className={styles.container}>
        <img width={200} src="/logo.svg" alt="Octopus Energy Logo" />
        <div className={styles.cartContainer}>
          <img width={24} src="/basket.svg" alt="Basket" />
          <span>
            (<span aria-label="Total Items">{totalItems}</span>)
          </span>
        </div>
      </div>
    </header>
  );
};
