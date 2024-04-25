import React, { useState, useCallback, useEffect } from "react"; // Added import for useState and useEffect
import styles from "../StartDesktop/StartDesktop.module.css";
import FarmerProfileFollow from "../FarmerProfileFollow"; // Import the new component
import AdditionalInformation from "../AdditionalInformation";
import NextStepButton from "../NextStepButton";
import { useNavigate } from "react-router-dom";
import Prev from "../Prev";

const FarmInfoExp = () => {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const onPrevTextClick = useCallback(() => {
    navigate("/mid");
  }, [navigate]);

  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const onRectangleContainer1Click = useCallback(() => {
    // Please sync "Name info (Desktop)" to the project
  }, []);

  return (
    <div className={styles.startDesktop}>
      {windowWidth >= 600 && windowWidth <= 865 ? null : <FarmerProfileFollow />}
      <div className={styles.landInformation}>Land information</div>
      {windowWidth >= 600 && windowWidth <= 865 && (
  <div className={styles.farmInformation}>Farm information</div>
)}
      <div className={styles.farmInfoAndExperincedesktoItem} />
      <img
        className={styles.farmInfoAndExperincedesktoInner}
        alt=""
        src="/vector-5.svg"
      />
      <img className={styles.iconPlus} alt="" src="/icon--plus.svg" />
      <img className={styles.iconMinus} alt="" src="/icon--minus.svg" />
      <div className={styles.div}>100</div>
      <div className={styles.farmingExperience}>Farming experience</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.experienceInFarming}>Experience in farming ?</div>
      <div className={styles.textValues}>
        <div className={styles.textValuesChild} />
        <div className={styles.div1}>0-10 years</div>
      </div>
      <div className={styles.textValues1}>
        <div className={styles.textValuesChild} />
        <div className={styles.div1}>10-20 years</div>
        <img
          className={styles.checkCircleIcon}
          alt=""
          src="/check-circle.svg"
        />
      </div>
      <div className={styles.textValues2}>
        <div className={styles.textValuesChild} />
        <div className={styles.div1}>30-40 years</div>
      </div>
      <div className={styles.textValues3}>
        <div className={styles.textValuesChild} />
        <div className={styles.div1}>20-30 years</div>
      </div>

      <AdditionalInformation onRectangleContainer1Click={onRectangleContainer1Click} />
      <NextStepButton nextRoute="/locsoiltyp" />
      <Prev onPrevClick={onPrevTextClick} />
    </div>
  );
};

export default FarmInfoExp;
