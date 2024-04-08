import React, { useCallback } from "react";
import styles from "../StartDesktop/StartDesktop.module.css";
import FarmerProfileFollow from "../FarmerProfileFollow"; // Import the new component
import AdditionalInformation from "../AdditionalInformation";
import NextStepButton from "../NextStepButton";
import { useNavigate } from "react-router-dom";
import Prev from "../Prev";

const ContactLocation = () => {
   const navigate = useNavigate();


   const onPrevTextClick = useCallback(() => {
    navigate("/updtaedname");
  }, [navigate]);
  

  const onRectangleContainer1Click = useCallback(() => {
    // Please sync "Name info (Desktop)" to the project
  }, []);

  return (
    <div className={styles.startDesktop}>
      <FarmerProfileFollow /> {/* Use the new component */}
      <div className={styles.inputFieldtype1}>
        
        <div className={styles.label}>Email</div>
        <div className={styles.inputFieldtype1Child} />
        <div className={styles.mailOutlineParent}>
          <img
            className={styles.mailOutlineIcon}
            alt=""
            src="/mail-outline.svg"
          />
          <div className={styles.rakigmailcom1}>raki@gmail.com</div>
        </div>
        <img className={styles.addIcon} alt="" src="/add.svg" />
        <div className={styles.inputFieldtype1Item} />
      </div>
      <div className={styles.inputFieldtype11}>
        
        <div className={styles.label}>Phone</div>
        <div className={styles.inputFieldtype1Child} />
        <div className={styles.mailOutlineParent}>
          <img className={styles.mailOutlineIcon} alt="" src="/phone.svg" />
          <div className={styles.rakigmailcom1}>9949XXXXXX</div>
        </div>
        <img className={styles.addIcon} alt="" src="/add.svg" />
        <div className={styles.inputFieldtype1Item} />
      </div>
      <div className={styles.inputFieldtype12}>
        
        <div className={styles.label}>Location</div>
        <div className={styles.inputFieldtype1Child} />
        <div className={styles.mailOutlineParent}>
          <img
            className={styles.mailOutlineIcon}
            alt=""
            src="/location-on.svg"
          />
          <div className={styles.rakigmailcom1}>26/328 Moscow</div>
        </div>
        <img className={styles.addIcon} alt="" src="/add.svg" />
        <div className={styles.inputFieldtype1Item} />
      </div>
      
      <AdditionalInformation onRectangleContainer1Click={onRectangleContainer1Click} />
      <NextStepButton nextRoute="/mid" />
      <Prev onPrevClick={onPrevTextClick}/>
    </div>
  );
};

export default ContactLocation;
