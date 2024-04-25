import React, { useCallback } from "react";
import styles from "../StartDesktop/StartDesktop.module.css";
import FarmerProfileFollow from "../FarmerProfileFollow"; // Import the new component
import AdditionalInformation from "../AdditionalInformation";
import NextStepButton from "../NextStepButton";
import { useNavigate } from "react-router-dom";
import Prev from "../Prev";
import "../../global.css"

const CultivationCrop = () => {
   const navigate = useNavigate();


   const onPrevTextClick = useCallback(() => {
    navigate("/nameinfo");
  }, [navigate]);
  

  const onRectangleContainer1Click = useCallback(() => {
    // Please sync "Name info (Desktop)" to the project
  }, []);

  return (
    <div className={styles.startDesktop}>
      <FarmerProfileFollow /> 
    <img className="right-arrow-icon16" alt="" src="/right-arrow@2x.png" />
      <div className="sizesgroup-181">
       
        
      </div>
      <div className="crop-type">{`Crop type `}</div>
      <div className="input-fieldtype18">
        <div className="error16">*error</div>
        <div className="label8">
          <p className="primary-crop">Primary crop</p>
        </div>
        <div className="input-fieldtype1-child13" />
        <div className="mail-outline-parent2">
          <img className="mail-outline-icon4" alt="" src="/mail-outline.svg" />
          <div className="rakigmailcom8">Paddy</div>
        </div>
        <img className="date-range-icon" alt="" src="/add.svg" />
        <div className="input-fieldtype1-child14" />
      </div>
      <div className="input-fieldtype19">
        <div className="error16">*error</div>
        <div className="label8">Secondary crop</div>
        <div className="input-fieldtype1-child13" />
        <div className="mail-outline-parent3">
          <img className="mail-outline-icon4" alt="" src="/mail-outline.svg" />
          <div className="rakigmailcom8">raki@gmail.com</div>
        </div>
        <img className="date-range-icon" alt="" src="/add.svg" />
        <div className="input-fieldtype1-child14" />
      </div>
      <div className="rectangle-parent23">
        <div className="frame-child" />
        <div className="paddy">Paddy</div>
        <img className="plus-icon" alt="" src="/plus@2x.png" />
      </div>
      <div className="rectangle-parent24">
        <div className="frame-child" />
        <div className="paddy">Paddy</div>
        <img className="plus-icon" alt="" src="/plus@2x.png" />
      </div>
      <div className="start-month-of">Start month of cultivation</div>
      <div className="input-fieldtype110">
        <div className="error16">*error</div>
        <div className="label10">Label</div>
        <div className="input-fieldtype1-child13" />
        <div className="mail-outline-parent2">
          <img className="mail-outline-icon4" alt="" src="/mail-outline.svg" />
          <div className="rakigmailcom8">DD/MM/YY</div>
        </div>
        <img className="date-range-icon" alt="" src="/date-range.svg" />
        <div className="input-fieldtype1-child14" />
      </div>
      <div className="cultivation">Cultivation</div>
      <div className="pre-production-month">Pre production month</div>
      <div className="input-fieldtype111">
        <div className="error16">*error</div>
        <div className="label10">Label</div>
        <div className="input-fieldtype1-child13" />
        <div className="mail-outline-parent2">
          <img className="mail-outline-icon4" alt="" src="/mail-outline.svg" />
          <div className="rakigmailcom8">January</div>
        </div>
        <img className="date-range-icon" alt="" src="/calender-today.svg" />
        <div className="input-fieldtype1-child14" />
      </div>
    
    

      
      <AdditionalInformation onRectangleContainer1Click={onRectangleContainer1Click} />
      <NextStepButton nextRoute="/investor" />
      <Prev onPrevClick={onPrevTextClick}/>
    </div>
  );
};

export default CultivationCrop;
