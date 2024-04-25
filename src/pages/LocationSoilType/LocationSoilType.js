import React, { useCallback,useState,useEffect } from "react";
import styles from "../StartDesktop/StartDesktop.module.css";
import FarmerProfileFollow from "../FarmerProfileFollow"; 
import AdditionalInformation from "../AdditionalInformation";
import NextStepButton from "../NextStepButton";
import { useNavigate } from "react-router-dom";
import Prev from "../Prev";

const LocationSoilType = () => {
    const navigate = useNavigate();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, []);

      useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

   const onPrevTextClick = useCallback(() => {
    navigate("/farminfo");
  }, [navigate]);
  

  const onRectangleContainer1Click = useCallback(() => {
    
  }, []);

  return (
    <div className={styles.startDesktop}>
       {windowWidth >= 600 && windowWidth <= 865 ? null : <FarmerProfileFollow  />}
      <img
        className={styles.locationAndSoilTypeDesktoItem}
        alt=""
        src="/rectangle-55@2x.png"
        data-scroll-to="rectangleImage"
      />
      {windowWidth >= 600 && windowWidth <= 865 && (
  <div className={styles.farmInformation}>Land information</div>
)}
      <div className={styles.locationOfA}>Location of a farm</div>
      <div className={styles.inputFieldtype1}>
        
        <div className={styles.inputFieldtype1Childl} />
        <div className={styles.locationOnParent}>
          <img
            className={styles.locationOnIcon}
            alt=""
            src="/location-on.svg"
          />
          <div className={styles.raki}>26/328 Houston</div>
        </div>
        <img
          className={styles.locationOnIcon1}
          alt=""
          src="/location-on.svg"
          onClick={onRectangleContainer1Click}
        />
        <div className={styles.inputFieldtype1Item} />
      </div>
      <div className={styles.locationAndSoilTypeDesktoInner} />
      <div className={styles.typeOfSoil}>Type of soil ?</div>
      <div className={styles.soilTypeWrapper}>
        <div className={styles.soilType}>Soil type</div>
      </div>
      <div className={styles.textValues}>
        <div className={styles.textValuesChild} />
        <div className={styles.divn}>Alluvial soil</div>
      </div>
      <div className={styles.textValues1}>
        <div className={styles.textValuesChild} />
        <div className={styles.divn}>Black soil</div>
      </div>
      <div className={styles.textValues2}>
        <div className={styles.textValuesChild} />
        <div className={styles.divn}>Red soil</div>
        <img
          className={styles.checkCircleIcon}
          alt=""
          src="/check-circle.svg"
        />
      </div>
      <div className={styles.textValues3}>
        <div className={styles.textValuesChild} />
        <div className={styles.divn}>Sandy soil</div>
      </div>
      <AdditionalInformation onRectangleContainer1Click={onRectangleContainer1Click} />
      <NextStepButton nextRoute="/culcrop" />
      <Prev onPrevClick={onPrevTextClick}/>
    </div>
  );
};



export default LocationSoilType
// export default LocationSoilType