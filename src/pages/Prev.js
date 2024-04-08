// PrevButton.js

import React from "react";
import styles from "../pages/StartDesktop/StartDesktop.module.css";

const Prev = ({ onPrevClick }) => {
  return (
    <div className={styles.prev} onClick={onPrevClick}>
      Prev
    </div>
  );
};

export default Prev;
