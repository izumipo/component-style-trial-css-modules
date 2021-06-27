import * as React from "react";
import styles from "./style.scss";
import googleLogo from "../../images/google_logo.png";

export const GoogleSearchLiked = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoWrapper}>
        <img src={googleLogo} className={styles.logo} />
      </div>
      <div className={styles.inputWrapper}>
        <input
          className={styles.input}
          placeholder="Google で検索または URL を入力"
        ></input>
      </div>
    </div>
  );
};
