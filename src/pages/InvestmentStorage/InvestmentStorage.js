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
   const startDesktopStyle = {
        overflow: 'hidden',
         overflowY: 'auto'
         
    };
  

  const onRectangleContainer1Click = useCallback(() => {
   
  }, []);

  return (
    <div className={styles.startDesktop} style={startDesktopStyle}>
      <FarmerProfileFollow /> 
      <div className="investment1">Investment</div>
      <div className="storage-capacity">Storage capacity</div>
      <div className="investment-and-storage-capacit-item" />
      <div className="investment-and-storage-capacit-inner" />
      <div className="yearly-investment1">Yearly investment</div>
      <div className="what-is-the">What is the storage capcity?</div>
      <div className="text-values20">
        <div className="text-values-child18" />
        <div className="div24">100000-200000</div>
        <img className="check-circle-icon5" alt="" src="/check-circle.svg" />
      </div>
      <div className="text-values21">
        <div className="text-values-child18" />
        <div className="div24">100000-200000</div>
      </div>
      <div className="text-values22">
        <div className="text-values-child18" />
        <div className="div24">100000-200000</div>
      </div>
      <div className="text-values23">
        <div className="text-values-child18" />
        <div className="div24">100000-200000</div>
      </div>
      <div className="text-values24">
        <div className="text-values-child18" />
        <div className="div24">400-600 sqft</div>
        <img className="check-circle-icon5" alt="" src="/check-circle.svg" />
      </div>
      <div className="text-values25">
        <div className="text-values-child18" />
        <div className="div24">0-200 sqft</div>
      </div>
      <div className="text-values26">
        <div className="text-values-child18" />
        <div className="div24">200-400 sqft</div>
      </div>
      <div className="text-values27">
        <div className="text-values-child18" />
        <div className="div24">600-800 sqft</div>
      </div>
    
      <AdditionalInformation onRectangleContainer1Click={onRectangleContainer1Click} />
      <NextStepButton nextRoute="/last" />
      <Prev onPrevClick={onPrevTextClick}/>
    </div>
  );
};

export default InvestmentStorage