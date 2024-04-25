import React, { useCallback, useRef, useState, useEffect } from "react";
import styles from "../StartDesktop/StartDesktop.module.css";
import FarmerProfileFollow from "../FarmerProfileFollow";
import AdditionalInformation from "../AdditionalInformation";
import NextStepButton from "../NextStepButton";
import Prev from "../Prev";
import { useNavigate } from "react-router-dom";

const DragDrop = () => {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const fileInputRef = useRef(null);

  const onPrevTextClick = useCallback(() => {
    navigate("/nameinfo");
  }, [navigate]);

  const onDrop = useCallback((event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    handleFileUpload(files);
  }, []);

  const onDragOver = useCallback((event) => {
    event.preventDefault();
  }, []);

  const handleSelectFile = useCallback(() => {
    fileInputRef.current.click();
  }, []);

  const handleFileInputChange = useCallback((event) => {
    const files = event.target.files;
    handleFileUpload(files);
  }, []);

  const handleFileUpload = useCallback((files) => {
    // Assuming only one file is uploaded
    const file = files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageUrl = event.target.result;
        localStorage.setItem('uploadedImageUrl', imageUrl);
        navigate("/nameinfo"); // Move this line here
      };
      reader.readAsDataURL(file);
    }
  }, [navigate]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.startDesktop} onDrop={onDrop} onDragOver={onDragOver}>
      {windowWidth >= 600 && windowWidth <= 865 ? null : <FarmerProfileFollow  />}
      <div className={styles.of2}>1 of 2</div>
      <div className={styles.uploadingAPicDesktopItem} />
      <div className={styles.or}>or</div>
      <img className={styles.clouduploadIcon} alt="" src="/cloudupload.svg" />
      <div className={styles.dragAndDrop}>Drag and drop here</div>
      <div className={styles.vectorGroup}>
        <button className={styles.selectFile} onClick={handleSelectFile}>Select file</button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileInputChange}
        />
      </div>
      
      <AdditionalInformation />
      <NextStepButton nextRoute="/contactloc" />
      <Prev onPrevClick={onPrevTextClick}/>
    </div>
  );
};

export default DragDrop;


// https://builder.io/fiddle/7c89563a2f32486eb7d42b6024e1044b?utm_source=figma&utm_content=import&utm_medium=figma