import React from "react";
import { useQuery } from "@apollo/client";
import getProduct from "./queries";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ProductProfile } from "./components/ProductProfile";
import { ProductType } from "./types";
import { CartProvider } from "./contexts/CartContext";
import styles from "./App.module.css";

type ProductData = {
  product: ProductType;
};

const App = () => {
  const { loading, error, data } = useQuery<ProductData>(getProduct, {
    variables: { id: 1 },
  });

  if (error) {
    return <div> There has been an error, please reload and try again</div>;
  }

  return loading ? (
    <span>loading...</span>
  ) : data?.product ? (
    <div className={styles.container}>
      <CartProvider>
        <Header />
        {data.product ? (
          <ProductProfile product={data.product} />
        ) : (
          "There are no product in the list of items"
        )}
      </CartProvider>
      <Footer />
    </div>
  ) : null;
};

export default App;
