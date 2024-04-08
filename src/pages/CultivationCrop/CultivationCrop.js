import React, { useCallback } from "react";
import styles from "../StartDesktop/StartDesktop.module.css";
import FarmerProfileFollow from "../FarmerProfileFollow"; // Import the new component
import AdditionalInformation from "../AdditionalInformation";
import NextStepButton from "../NextStepButton";
import Prev from "../Prev";
import { useNavigate } from "react-router-dom";

const CultivationCrop = () => {
   const navigate = useNavigate();


   const onPrevTextClick = useCallback(() => {
    navigate("/locsoiltyp");
  }, [navigate]);
  

  const onRectangleContainer1Click = useCallback(() => {
    // Please sync "Name info (Desktop)" to the project
  }, []);
  // div,inputFieldtype1,inputFieldtype1Item,rectangleParent,addIcon,rakigmailcom,

  return (
    <div className={styles.startDesktop}>
      <FarmerProfileFollow /> {/* Use the new component */}
      
      <AdditionalInformation onRectangleContainer1Click={onRectangleContainer1Click} />
      <NextStepButton nextRoute="/last" />
      <Prev onPrevClick={onPrevTextClick}/>
    </div>
  );
};

export default CultivationCrop;


// export default CultivationCrop