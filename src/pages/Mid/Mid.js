import React, { useCallback } from "react";
import styles from "../StartDesktop/StartDesktop.module.css";
import FarmerProfileFollow from "../FarmerProfileFollow"; // Import the new component
import AdditionalInformation from "../AdditionalInformation";
import NextStepButton from "../NextStepButton";
import { useNavigate } from "react-router-dom";


const Mid = () => {
    const navigate = useNavigate();


   
  

  const onRectangleContainer1Click = useCallback(() => {
    navigate("/contactloc");
  }, [navigate]);

  return (
    <div className={styles.startDesktop}>
      <FarmerProfileFollow /> {/* Use the new component */}
      <div className={styles.property1defaultParent}>
        <div className={styles.property1default}>
          <div className={styles.rectangleParent}>
            <div className={styles.instanceChild} />
            <div className={styles.loremIpsum}>{`Lorem ipsum `}</div>
            <div className={styles.step1}>Step 1</div>
            <div className={styles.personalInformation}>
              Personal information
            </div>
            <div
              className={styles.rectangleGroup}
              onClick={onRectangleContainer1Click}
            >
              <div className={styles.groupChild1} />
              <div className={styles.start1}>Edit</div>
            </div>
             <div className={styles.instanceItem} />
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />

          </div>
        </div>
        <div className={styles.property1variant2}>
          <div className={styles.rectangleParent}>
            <div className={styles.instanceChild} />
            <div className={styles.loremIpsum}>{`Lorem ipsum `}</div>
            <div className={styles.step1}>Step 2</div>
            <div className={styles.personalInformation}>
              Agriculture information
            </div>
            <div className={styles.groupDiv}>
              <div className={styles.groupChild} />
              <div className={styles.start}>Start</div>
            </div>
          </div>
        </div>
        </div>
        
      <AdditionalInformation onRectangleContainer1Click={onRectangleContainer1Click} />
      <NextStepButton nextRoute="/farminfo" />
      
    </div>
  );
};

export default Mid