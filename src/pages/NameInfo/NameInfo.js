import React, { useCallback, useContext, useEffect, useState } from "react";
import styles from "../StartDesktop/StartDesktop.module.css";
import FarmerProfileFollow from "../FarmerProfileFollow";
import AdditionalInformation from "../AdditionalInformation";
import NextStepButton from "../NextStepButton";
import { useNavigate } from "react-router-dom";
import Prev from "../Prev";
import "../../global.css";

const InputDataContext = React.createContext();

const NameInfo = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const storedFirstName = localStorage.getItem("firstName");
    const storedMiddleName = localStorage.getItem("middleName");
    const storedLastName = localStorage.getItem("lastName");
    if (storedFirstName) setFirstName(storedFirstName);
    if (storedMiddleName) setMiddleName(storedMiddleName);
    if (storedLastName) setLastName(storedLastName);

    const storedUploadedImageUrl = localStorage.getItem("uploadedImageUrl");
    if (storedUploadedImageUrl) {
      setUploadedImageUrl(storedUploadedImageUrl);
    }
      localStorage.removeItem('uploadedImageUrl');

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    return () => {
      localStorage.setItem("firstName", firstName);
      localStorage.setItem("middleName", middleName);
      localStorage.setItem("lastName", lastName);
    };
  }, [firstName, middleName, lastName]);

  const onPrevTextClick = useCallback(() => {
    localStorage.setItem("uploadedImageUrl", uploadedImageUrl);
    navigate("/");
  }, [navigate, uploadedImageUrl]);

  const onAdduploadAPicClick = useCallback(() => {
    navigate("/dragdrop");
  }, [navigate]);

  const onRectangleContainer1Click = useCallback(() => {}, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("uploadedImageUrl", uploadedImageUrl);
    navigate("/contactloc");
  };
  

  return (
    <InputDataContext.Provider
      value={{ firstName, setFirstName, middleName, setMiddleName, lastName, setLastName }}
    >
      <form className={styles.startDesktop} onSubmit={handleSubmit}>
        {windowWidth >= 600 && windowWidth <= 865 ? null : <FarmerProfileFollow />}
        <div className={styles.of2}>1 of 2</div>
        <div className={styles.containerProfilePhoto}>
          <div className={styles.containerProfilePhotoChild} />
          {uploadedImageUrl ? (
            <img src={uploadedImageUrl} alt="Uploaded" className={styles.uploadedImage} />
          ) : (
            <div className={styles.containerProfilePhotoChild} />
          )}
          <div className={styles.rectangleParent12}>
            {uploadedImageUrl ? null : <div className={styles.groupChild12} />}
            <div className={styles.adduploadAPic} onClick={onAdduploadAPicClick}>
              {uploadedImageUrl ? "" : "Add/upload a pic"}
            </div>
            <div className={styles.profilePhoto}>Profile photo</div>
          </div>
        </div>
        <div className={styles.textInputTypephone}>
          <div className={styles.inputLabel}>First name</div>
          <div className={styles.enterInputWrapper}>
            <input
              type="text"
              className={styles.enterInput}
              placeholder="Enter Input"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.textInputTypephone1}>
          <div className={styles.inputLabel}>Middle name</div>
          <div className={styles.enterInputWrapper}>
            <input
              type="text"
              className={styles.enterInput}
              placeholder="Enter Input"
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.textInputTypephone2}>
          <div className={styles.inputLabel}>Last name</div>
          <div className={styles.enterInputWrapper}>
            <input
              type="text"
              className={styles.enterInput}
              placeholder="Enter Input"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.nameInformation}>Name information</div>
        <AdditionalInformation onRectangleContainer1Click={onRectangleContainer1Click} />
        <NextStepButton nextRoute="/contactloc" />
        <Prev onPrevClick={onPrevTextClick} />
        
      </form>
    </InputDataContext.Provider>
  );
};

const useInputDataContext = () => useContext(InputDataContext);

export { NameInfo, useInputDataContext };
export default NameInfo;
