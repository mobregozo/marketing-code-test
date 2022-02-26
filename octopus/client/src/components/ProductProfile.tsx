import React from "react";
import { ProductType } from "../types";
import styles from "./Product.module.scss";
import { CartHolder } from "../components/CartHolder";

export const ProductProfile: React.FC<{ product: ProductType }> = ({
  product,
}) => {
  return (
    <div className={styles.mainInformation}>
      <div className={styles.container}>
        <img
          className={styles.productImage}
          src={product.imgUrl}
          alt={product.name}
        />
      </div>
      <div className={`${styles.secondarySection}`}>
        <div className={`${styles.container} `}>
          <div className={styles.productName}>{product.name}</div>
          <div className={styles.productSet}>
            {product.power} {'//'} Packet of {product.quantity}
          </div>
        </div>
      </div>
      <div className={`${styles.container} `}>
        <CartHolder product={product} />
      </div>
      <div className={` ${styles.secondarySection}`}>
        <div className={styles.container}>
          <h2>Description</h2>
          <p>{product.description}</p>
        </div>
      </div>
      <div className={`${styles.container} `}>
        <h2>Specifications</h2>
        <table className={styles.specificationTable}>
          <tbody className={styles.specificationTableBody}>
            <tr>
              <td>Brand</td>
              <td>{product.brand}</td>
            </tr>
            <tr>
              <td>Item weight</td>
              <td>{product.weight}</td>
            </tr>
            <tr>
              <td>Dimensions</td>
              <td>
                {product.height}x{product.width}x{product.length}
              </td>
            </tr>
            <tr>
              <td>Item model number</td>
              <td>{product.modelCode}</td>
            </tr>
            <tr>
              <td>Colour</td>
              <td>{product.colour}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
