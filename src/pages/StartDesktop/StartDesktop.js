import React, { useCallback } from "react";
import styles from "./StartDesktop.module.css";
import FarmerProfileFollow from "../FarmerProfileFollow";
import AdditionalInformation from "../AdditionalInformation";
import NextStepButton from "../NextStepButton";
import { useNavigate } from "react-router-dom";

const StartDesktop = () => {
    const navigate = useNavigate();
  const onGroupContainerClick = useCallback(() => {
     navigate('/nameinfo');
  }, [navigate]);

  return (
    <div className={styles.startDesktop}>
      <FarmerProfileFollow />
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
              onClick={onGroupContainerClick}
            >
              <div className={styles.groupChild} />
              <div className={styles.start}>Start</div>
            </div>
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
         <NextStepButton nextRoute="/nameinfo" />
      </div>

      <AdditionalInformation />
     
    </div>
  );
};

export default StartDesktop;
