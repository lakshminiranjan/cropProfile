import React, { useCallback } from "react";
import styles from "../StartDesktop/StartDesktop.module.css";
import FarmerProfileFollow from "../FarmerProfileFollow"; // Import the new component
import AdditionalInformation from "../AdditionalInformation";
import NextStepButton from "../NextStepButton";
import { useNavigate } from "react-router-dom";
import Prev from "../Prev";

const InvestmentStorage = () => {
    const navigate = useNavigate();


   const onPrevTextClick = useCallback(() => {
    navigate("/nameinfo");
  }, [navigate]);
  

  const onRectangleContainer1Click = useCallback(() => {
    // Please sync "Name info (Desktop)" to the project
  }, []);

  return (
    <div className={styles.startDesktop}>
      <FarmerProfileFollow /> {/* Use the new component */}
      
      <AdditionalInformation onRectangleContainer1Click={onRectangleContainer1Click} />
      <NextStepButton nextRoute="/nameinfo" />
      <Prev onPrevClick={onPrevTextClick}/>
    </div>
  );
};

export default InvestmentStorage