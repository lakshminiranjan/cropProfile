import React from "react";
import styles from "../pages/StartDesktop/StartDesktop.module.css";

const NextStepButton = ({ onClick }) => {
  return (
    <button className={styles.vectorParent} onClick={onClick}>
      <div className={styles.instanceInner} />
      <div className={styles.nextStep}>Next step</div>
    </button>
  );
};

export default NextStepButton;
