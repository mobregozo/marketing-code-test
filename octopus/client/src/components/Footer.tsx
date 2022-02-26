import React from "react";
import styles from "./Footer.module.css";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.container}>
        Octopus Energy Ltd is a company registered in England and Wales. <br />
        Registered number: 09263424. Registered office: 33 Holborn, London, EC1N
        2HT, Tradding office: 20-24 Broadwick Street, London, W1F 8HT
      </div>
    </footer>
  );
};
