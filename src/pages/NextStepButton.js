import React, {  } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../pages/StartDesktop/StartDesktop.module.css";

const NextStepButton = ({ nextRoute }) => {
  const navigate = useNavigate();

  const handleNextStep = () => {
    navigate(nextRoute);
  };

  return (
    <button className={styles.vectorParent} onClick={handleNextStep}>
        <div className={styles.instanceInner} />
        <div className={styles.nextStep}>Next step</div>
      </button>
  );
};

export default NextStepButton;
