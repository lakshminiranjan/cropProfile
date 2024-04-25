import React from "react";
import styles from "../pages/StartDesktop/StartDesktop.module.css";

const Prev= ({ onPrevClick }) => {
  return (
    <button className={styles.prevButton} onClick={onPrevClick}>
      <div className={styles.instanceInner} />
      <div className={styles.prevStep}>Prev</div>
    </button>
  );
};

export default Prev;
