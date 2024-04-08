import React, { useCallback } from "react";
import styles from "../StartDesktop/StartDesktop.module.css";
import FarmerProfileFollow from "../FarmerProfileFollow"; 
import AdditionalInformation from "../AdditionalInformation";
import NextStepButton from "../NextStepButton";
import { useNavigate } from "react-router-dom";
import Prev from "../Prev";

const UpdatedNameInfo = () => {
    const navigate = useNavigate();


   const onPrevTextClick = useCallback(() => {
    navigate("/dragdrop");
  }, [navigate]);
  

  const onRectangleContainer1Click = useCallback(() => {
    
  }, []);

  return (
    <div className={styles.startDesktop}>
      <FarmerProfileFollow /> 
      <div className={styles.of2}>1 of 2</div>
       <div className={styles.containerProfilePhoto}>
         
        <div className={styles.containerProfilePhotoChild} />
       
        <div className={styles.rectangleParent1}>
          
          <img className={styles.avatarIcon} alt="" src="/avatar.svg" />
          <div className={styles.profilePhotoWrapper}></div>
           <div className={styles.profilePhoto1}>Profile photo</div>
        </div>
        </div>
       
      <div className={styles.textInputTypephone}>
  
  <div className={styles.inputLabel}>First name</div>
  <div className={styles.enterInputWrapper}>
   
    <input type="text" className={styles.enterInput} placeholder="Sunai Kumar" />
  </div>
</div>
<div className={styles.textInputTypephone1}>
  
  <div className={styles.inputLabel}>Middle name</div>
  <div className={styles.enterInputWrapper}>
    
    <input type="text" className={styles.enterInput} placeholder="Reddy" />
  </div>
</div>
<div className={styles.textInputTypephone2}>
  
  <div className={styles.inputLabel}>Last name</div>
  <div className={styles.enterInputWrapper}>
     
    
    <input type="text" className={styles.enterInput} placeholder="Pathikota" />
  </div>
</div>

      
      <div className={styles.nameInformation}>Name information</div>
      <AdditionalInformation onRectangleContainer1Click={onRectangleContainer1Click} />
      <NextStepButton nextRoute="/contactloc" />
      <Prev onPrevClick={onPrevTextClick}/>
    </div>
  );
};

export default UpdatedNameInfo;
