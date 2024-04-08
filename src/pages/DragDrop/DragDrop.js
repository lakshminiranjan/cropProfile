import React, { useCallback } from "react";
import styles from "../StartDesktop/StartDesktop.module.css";
import FarmerProfileFollow from "../FarmerProfileFollow";
import AdditionalInformation from "../AdditionalInformation";
import NextStepButton from "../NextStepButton";
import { useNavigate } from "react-router-dom";
import Prev from "../Prev";

const DragDrop = () => {
  const navigate = useNavigate();


   const onPrevTextClick = useCallback(() => {
    navigate("/nameinfo");
  }, [navigate]);
  

  const onRectangleContainer1Click = useCallback(() => {
    
  }, []);

  return (
    <div className={styles.startDesktop}>
      <FarmerProfileFollow /> 
        <div className={styles.of2}>1 of 2</div>
      <div className={styles.uploadingAPicDesktopItem} />
      <div className={styles.or}>or</div>
      <img className={styles.clouduploadIcon} alt="" src="/cloudupload.svg" />
      <div className={styles.dragAndDrop}>Drag and drop here</div>
      <div className={styles.vectorGroup}>
        
        <button className={styles.selectFile}>Select file</button>
      </div>
      
      <AdditionalInformation onRectangleContainer1Click={onRectangleContainer1Click} />
      <NextStepButton nextRoute="/updtaedname" />
      <Prev onPrevClick={onPrevTextClick}/>
    </div>
  );
};

export default DragDrop;



