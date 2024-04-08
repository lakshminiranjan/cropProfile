import React from "react";
import styles from "../pages/StartDesktop/StartDesktop.module.css";

const AdditionalInformation = () => {
  return (
    <div>
      <div className={styles.startDesktopChild} />
      <div className={styles.logo}>Logo</div>
      <div className={styles.personalInformation2}>Personal information</div>
      <div className={styles.agricultureInformation}>
        Agriculture information
      </div>
      <img className={styles.rightArrowIcon} alt="" src="/right-arrow@2x.png" />
    </div>
  );
};

export default AdditionalInformation;
