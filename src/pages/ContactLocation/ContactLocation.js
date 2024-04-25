import React, { useState } from "react";
import styles from "../StartDesktop/StartDesktop.module.css";
import FarmerProfileFollow from "../FarmerProfileFollow"; // Import the new component
import AdditionalInformation from "../AdditionalInformation";
import NextStepButton from "../NextStepButton";
import { useNavigate } from "react-router-dom";
import Prev from "../Prev";
import "../../global.css"

const ContactLocation = () => {
   const navigate = useNavigate();

   const [email, setEmail] = useState("raki@gmail.com");
   const [phone, setPhone] = useState("9949XXXXXX");
   const [location, setLocation] = useState("26/328 Moscow");

   const onPrevTextClick = () => {
      navigate("/nameinfo");
   };
  
   const onRectangleContainer1Click = () => {
      // Please sync "Name info (Desktop)" to the project
   };

   return (
      <div className={styles.startDesktop}>
         <FarmerProfileFollow /> 
         <div className="input-fieldtype1">
            <div className="error">*error</div>
            <div className="label">Email</div>
            <div className="input-fieldtype1-child" />
            <div className="mail-outline-parent">
               <img className="mail-outline-icon" alt="" src="/mail-outline.svg" />
               <input className="rakigmailcom" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <img className="add-icon" alt="" src="/add.svg" />
            <div className="input-fieldtype1-item" />
         </div>
         <div className="input-fieldtype11">
            <div className="error">*error</div>
            <div className="label">Phone</div>
            <div className="input-fieldtype1-child" />
            <div className="mail-outline-parent">
               <img className="mail-outline-icon" alt="" src="/phone.svg" />
               <input className="rakigmailcom" type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <img className="add-icon" alt="" src="/add.svg" />
            <div className="input-fieldtype1-item" />
         </div>
         <div className="input-fieldtype12">
            <div className="error">*error</div>
            <div className="label">Location</div>
            <div className="input-fieldtype1-child" />
            <div className="mail-outline-parent">
               <img className="mail-outline-icon" alt="" src="/location-on.svg" />
               <input className="rakigmailcom" type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
            </div>
            <img className="add-icon" alt="" src="/add.svg" />
            <div className="input-fieldtype1-item" />
         </div>
         <div className="contact-information">Contact information</div>
         <div className="location-information">Location information</div>
         <div className="dropdownmedium">
            <div className="dropdown-title">State</div>
            <div className="input-field">
               <div className="text">
                  <div className="dropdown-option">Dropdown option</div>
                  <img className="mail-outline-icon" alt="" src="/icon.svg" />
               </div>
            </div>
         </div>
         <div className="dropdownmedium1">
            <div className="dropdown-title">Mandal</div>
            <div className="input-field">
               <div className="text">
                  <div className="dropdown-option">Dropdown option</div>
                  <img className="mail-outline-icon" alt="" src="/icon.svg" />
               </div>
            </div>
         </div>
         <div className="dropdownmedium2">
            <div className="dropdown-title">District</div>
            <div className="input-field">
               <div className="text">
                  <div className="dropdown-option">Dropdown option</div>
                  <img className="mail-outline-icon" alt="" src="/icon.svg" />
               </div>
            </div>
         </div>
         <div className="inputs-dropdowns-wrapper">
            <div className="inputs-dropdowns">
               <div className="pincode">Pincode</div>
               <div className="input-field3">
                  <div className="rakigmailcom">516XXX</div>
               </div>
            </div>
         </div>
      
         <AdditionalInformation onRectangleContainer1Click={onRectangleContainer1Click} />
         <NextStepButton nextRoute="/mid" />
         <Prev onPrevClick={onPrevTextClick}/>
      </div>
   );
};

export default ContactLocation;
