import React, { useCallback, useState, useEffect, useRef } from "react";
import styles from "./StartDesktop.module.css";
import { useNavigate } from "react-router-dom";
import FarmerProfileFollow from "../FarmerProfileFollow";
import AdditionalInformation from "../AdditionalInformation";
import NextStepButton from "../NextStepButton";
import DatePicker from 'react-datepicker';



import "../../global.css";



const StartDesktop = () => {

   const navigate = useNavigate();
  const [selectedSoilType, setSelectedSoilType] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedYearlyInvestment, setSelectedYearlyInvestment] = useState(null);
  const [selectedStorageCapacity, setSelectedStorageCapacity] = useState(null);


const handleYearlyInvestmentSelect = (option) => {
    setSelectedYearlyInvestment(option);
  };

  const handleStorageCapacitySelect = (option) => {
    setSelectedStorageCapacity(option);
  };

  const onLocationOnIconClick = () => {
    const anchor = document.querySelector("[data-scroll-to='rectangleImage']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };

  const handleSoilTypeSelect = (soilType) => {
    setSelectedSoilType(soilType);
  };

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  

  
  const handleMonthChange = (date) => {
    
    const monthName = date.toLocaleString('default', { month: 'long' });
   
    document.getElementById('monthOutput').innerText = monthName;
    
    setSelectedDate2(date);
  };

  const handleDateChange = (date) => {
   
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    
    document.getElementById('dateOutput').innerText = formattedDate;
    
    setSelectedDate1(date);
  };

  const [showDatePicker1, setShowDatePicker1] = useState(false);
  const [showDatePicker2, setShowDatePicker2] = useState(false);
  const [selectedDate1, setSelectedDate1] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);

  const handleDateRangeClick = () => {
    setShowDatePicker1(!showDatePicker1);
  };

  const handleCalendarTodayClick = () => {
    setShowDatePicker2(!showDatePicker2);
  };
  

  const [showNameInfo, setShowNameInfo] = useState(false);
  const [showDragDropContent, setShowDragDropContent] = useState(false);
  const [showContactLocation, setShowContactLocation] = useState(false);
  const [showMid, setShowMid] = useState(false);
  const [showFarmInfoExp, setShowFarmInfoExp] = useState(false);
  const [showLocationSoilType, setShowLocationSoilType] = useState(false);
  const [showCultivationCrop, setShowCultivationCrop] = useState(false);
  const [showInvestmentStrorage, setShowInvestmentStrorage] = useState(false);
  const [showLast, setShowLast] = useState(false);
  const [showFIETab, setshowFIETab] = useState(false);
  const [showLocationSoilTypeTab,setshowLocationSoilTypeTab ] = useState(false);
  const [showCCTab,setshowCCTab ] = useState(false);
  const [showInvst1,setshowInvst1Tab] = useState(false);
  const [showInvst2,setshowInvst2Tab] = useState(false);
  const [showCLTab,setshowCLTab] = useState(false);
  const [showNFMob1,setshowNFMob1Tab] = useState(false);
  const [showNFMob2,setshowNFMob2Tab] = useState(false);
  const [showCLMob1,setshowCLMob1] = useState(false);
  const [showCLMob2, setShowCLMob2] = useState(false);
  const [showFIMob1, setShowFIMob1] = useState(false);
  const [showFIMob2, setShowFIMob2] = useState(false);
  const [showCCMob1, setShowCCMob1] = useState(false);
  const [showCCMob2, setShowCCMob2] = useState(false);
  const [showLSMob1, setShowLSMob1] = useState(false);
  const [showLSMob2, setShowLSMob2] = useState(false);
  const [showISMob1, setShowISMob1] = useState(false);
  const [showISMob2, setShowISMob2] = useState(false);
  

  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [acres, setAcres] = useState(0);
  const [pincode, setPincode] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [imageUploaded, setImageUploaded] = useState(false);
  const fileInputRef = useRef(null);
   const incrementAcres = () => {
    setAcres(prevAcres => prevAcres + 1);
  };

  const decrementAcres = () => {
    if (acres > 0) {
      setAcres(prevAcres => prevAcres - 1);
    }
  };

  const onNextStepClick = useCallback(() => {
    setShowNameInfo(true);
    setShowDragDropContent(false);
    setShowContactLocation(false);
    setShowMid(false);
    setShowFarmInfoExp(false);
    setShowLocationSoilType(false);
    setShowCultivationCrop(false);
    setShowInvestmentStrorage(false);
    setShowLast(false);
     setshowFIETab(false);
     setshowLocationSoilTypeTab(false);
     setshowCCTab(false);
     setshowInvst1Tab(false);
     setshowInvst2Tab(false);
     setshowCLTab(false);
     setshowNFMob1Tab(false);
      setshowCLMob1(false);
    setShowCLMob2(false);
     setShowISMob2(false);
        setShowISMob1(false);
    
  }, []);

   const onNextStepISMob1 = useCallback(() => {
    setShowNameInfo(false);
    setShowDragDropContent(false);
    setShowContactLocation(false);
    setShowMid(false);
    setShowFarmInfoExp(false);
    setShowLocationSoilType(false);
    setShowCultivationCrop(false);
    setShowInvestmentStrorage(false);
    setShowLast(false);
     setshowFIETab(false);
     setshowLocationSoilTypeTab(false);
     setshowCCTab(false);
     setshowInvst1Tab(false);
     setshowInvst2Tab(false);
     setshowCLTab(false);
     setshowNFMob1Tab(false);
      setshowCLMob1(false);
    setShowCLMob2(false);
     setShowISMob2(false);
     setShowCCMob1(false);
    setShowCCMob2(false);
        setShowISMob1(true);
        setShowISMob2(false);
    
  }, []);

  const onNextStepISMob2 = useCallback(() => {
    setShowNameInfo(false);
    setShowDragDropContent(false);
    setShowContactLocation(false);
    setShowMid(false);
    setShowFarmInfoExp(false);
    setShowLocationSoilType(false);
    setShowCultivationCrop(false);
    setShowInvestmentStrorage(false);
    setShowLast(false);
     setshowFIETab(false);
     setshowLocationSoilTypeTab(false);
     setshowCCTab(false);
     setshowInvst1Tab(false);
     setshowInvst2Tab(false);
     setshowCLTab(false);
     setshowNFMob1Tab(false);
      setshowCLMob1(false);
    setShowCLMob2(false);
     setShowISMob2(false);
     setShowCCMob1(false);
    setShowCCMob2(false);
        setShowISMob1(false);
        setShowISMob2(true);
    
  }, []);

   const onNextStepFIMob1 = useCallback(() => {
        setShowFIMob1(true);
        setShowNameInfo(false);
    setShowDragDropContent(false);
    setShowContactLocation(false);
    setShowMid(false);
    setShowFarmInfoExp(false);
    setShowLocationSoilType(false);
    setShowCultivationCrop(false);
    setShowInvestmentStrorage(false);
    setShowLast(false);
     setshowFIETab(false);
     setshowLocationSoilTypeTab(false);
     setshowCCTab(false);
     setshowInvst1Tab(false);
     setshowInvst2Tab(false);
     setshowCLTab(false);
     setshowNFMob1Tab(false);
      setshowCLMob1(false);
    setShowCLMob2(false);
     setShowISMob2(false);
        setShowISMob1(false);
   }, []);

   const onNextStepFIMob2 = useCallback(() => {
        setShowFIMob2(true);
        setShowFIMob1(false);
        setShowNameInfo(false);
    setShowDragDropContent(false);
    setShowContactLocation(false);
    setShowMid(false);
    setShowFarmInfoExp(false);
    setShowLocationSoilType(false);
    setShowCultivationCrop(false);
    setShowInvestmentStrorage(false);
    setShowLast(false);
     setshowFIETab(false);
     setshowLocationSoilTypeTab(false);
     setshowCCTab(false);
     setshowInvst1Tab(false);
     setshowInvst2Tab(false);
     setshowCLTab(false);
     setshowNFMob1Tab(false);
      setshowCLMob1(false);
    setShowCLMob2(false);
     setShowISMob2(false);
        setShowISMob1(false);
   }, []);

   

   const onNextStepCCMob1 = useCallback(() => {
        setShowCCMob1(true);
        setShowFIMob2(false);
        setShowFIMob1(false);
        setShowLSMob1(false);
        setShowLSMob2(false);
        setShowISMob2(false);
        setShowISMob1(false);
        setShowNameInfo(false);
    setShowDragDropContent(false);
    setShowContactLocation(false);
    setShowMid(false);
    setShowFarmInfoExp(false);
    setShowLocationSoilType(false);
    setShowCultivationCrop(false);
    setShowInvestmentStrorage(false);
    setShowLast(false);
     setshowFIETab(false);
     setshowLocationSoilTypeTab(false);
     setshowCCTab(false);
     setshowInvst1Tab(false);
     setshowInvst2Tab(false);
     setshowCLTab(false);
     setshowNFMob1Tab(false);
      setshowCLMob1(false);
    setShowCLMob2(false);
   }, []);

   

   const onNextStepCCMob2 = useCallback(() => {
        setShowCCMob2(true);
        setShowISMob1(false);
        setShowISMob2(false);
        setShowCCMob1(false);
        setShowFIMob2(false);
        setShowFIMob1(false);
        setShowLSMob1(false);
        setShowLSMob2(false);
        setShowNameInfo(false);
    setShowDragDropContent(false);
    setShowContactLocation(false);
    setShowMid(false);
    setShowFarmInfoExp(false);
    setShowLocationSoilType(false);
    setShowCultivationCrop(false);
    setShowInvestmentStrorage(false);
    setShowLast(false);
     setshowFIETab(false);
     setshowLocationSoilTypeTab(false);
     setshowCCTab(false);
     setshowInvst1Tab(false);
     setshowInvst2Tab(false);
     setshowCLTab(false);
     setshowNFMob1Tab(false);
      setshowCLMob1(false);
    setShowCLMob2(false);
   }, []);

   const onNextStepLSMob1 = useCallback(() => {
        setShowLSMob1(true);
        setShowCCMob2(false);
        setShowCCMob1(false);
        setShowFIMob2(false);
        setShowFIMob1(false);
        setShowLSMob2(false);
        setShowNameInfo(false);
    setShowDragDropContent(false);
    setShowContactLocation(false);
    setShowMid(false);
    setShowFarmInfoExp(false);
    setShowLocationSoilType(false);
    setShowCultivationCrop(false);
    setShowInvestmentStrorage(false);
    setShowLast(false);
     setshowFIETab(false);
     setshowLocationSoilTypeTab(false);
     setshowCCTab(false);
     setshowInvst1Tab(false);
     setshowInvst2Tab(false);
     setshowCLTab(false);
     setshowNFMob1Tab(false);
      setshowCLMob1(false);
    setShowCLMob2(false);
     setShowISMob2(false);
        setShowISMob1(false);
   }, []);

   const onNextStepLSMob2 = useCallback(() => {
        setShowLSMob2(true);
         setShowLSMob1(false);
        setShowCCMob2(false);
        setShowCCMob1(false);
        setShowFIMob2(false);
        setShowFIMob1(false);
        setShowNameInfo(false);
    setShowDragDropContent(false);
    setShowContactLocation(false);
    setShowMid(false);
    setShowFarmInfoExp(false);
    setShowLocationSoilType(false);
    setShowCultivationCrop(false);
    setShowInvestmentStrorage(false);
    setShowLast(false);
     setshowFIETab(false);
     setshowLocationSoilTypeTab(false);
     setshowCCTab(false);
     setshowInvst1Tab(false);
     setshowInvst2Tab(false);
     setshowCLTab(false);
     setshowNFMob1Tab(false);
      setshowCLMob1(false);
    setShowCLMob2(false);
     setShowISMob2(false);
        setShowISMob1(false);
   }, []);

    const onNextStepNFMob2 = useCallback(() => {
    setShowNameInfo(false);
    setShowDragDropContent(false);
    setShowContactLocation(false);
    setShowMid(false);
    setShowFarmInfoExp(false);
    setShowLocationSoilType(false);
    setShowCultivationCrop(false);
    setShowInvestmentStrorage(false);
    setShowLast(false);
     setshowFIETab(false);
     setshowLocationSoilTypeTab(false);
     setshowCCTab(false);
     setshowInvst1Tab(false);
     setshowInvst2Tab(false);
     setshowCLTab(false);
     setshowNFMob1Tab(false);
     setshowNFMob2Tab(true);
      setshowCLMob1(false);
    setShowCLMob2(false);
     setShowISMob2(false);
        setShowISMob1(false);
  }, []);

   const onNextStepCLMob1 = useCallback(() => {
    setShowNameInfo(false);
    setshowCLMob1(true);
   
    setShowCLMob2(false);
    setShowDragDropContent(false);
    setShowContactLocation(false);
    setShowMid(false);
    setShowFarmInfoExp(false);
    setShowLocationSoilType(false);
    setShowCultivationCrop(false);
    setShowInvestmentStrorage(false);
    setShowLast(false);
     setshowFIETab(false);
     setshowLocationSoilTypeTab(false);
     setshowCCTab(false);
     setshowInvst1Tab(false);
     setshowInvst2Tab(false);
     setshowCLTab(false);
     setshowNFMob1Tab(false);
      setShowISMob2(false);
        setShowISMob1(false);
  }, []);

  const onNextStepCLMob2 = useCallback(() => {
    setShowNameInfo(false);
    setshowCLMob1(false);
    setShowCLMob2(true);
    setShowDragDropContent(false);
    setShowContactLocation(false);
    setShowMid(false);
    setShowFarmInfoExp(false);
    setShowLocationSoilType(false);
    setShowCultivationCrop(false);
    setShowInvestmentStrorage(false);
    setShowLast(false);
     setshowFIETab(false);
     setshowLocationSoilTypeTab(false);
     setshowCCTab(false);
     setshowInvst1Tab(false);
     setshowInvst2Tab(false);
     setshowCLTab(false);
     setshowNFMob1Tab(false);
      setShowISMob2(false);
        setShowISMob1(false);
  }, []);

   const onNextStepNFMob1 = useCallback(() => {
    setShowNameInfo(false);
    setShowDragDropContent(false);
    setShowContactLocation(false);
    setShowMid(false);
    setShowFarmInfoExp(false);
    setShowLocationSoilType(false);
    setShowCultivationCrop(false);
    setShowInvestmentStrorage(false);
    setShowLast(false);
     setshowFIETab(false);
     setshowLocationSoilTypeTab(false);
     setshowCCTab(false);
     setshowInvst1Tab(false);
     setshowInvst2Tab(false);
     setshowCLTab(false);
     setshowNFMob1Tab(true);
     setshowCLMob1(false);
    setShowCLMob2(false);
     setShowISMob2(false);
        setShowISMob1(false);
  }, []);

  const onNextSTepInvst1 = useCallback(() => {
    setshowInvst1Tab(true);
     setShowNameInfo(false);
    setShowDragDropContent(false);
    setShowContactLocation(false);
    setShowMid(false);
    setShowFarmInfoExp(false);
    setShowLocationSoilType(false);
    setShowCultivationCrop(false);
    setShowInvestmentStrorage(false);
    setShowLast(false);
     setshowFIETab(false);
     setshowLocationSoilTypeTab(false);
     setshowCCTab(false);
     setshowInvst2Tab(false);
     setshowCLTab(false);
      setshowNFMob1Tab(false);
      setshowCLMob1(false);
    setShowCLMob2(false);
     setShowISMob2(false);
        setShowISMob1(false);
  })
   const onNextSTepInvst2 = useCallback(() => {
    setshowInvst1Tab(false);
    setshowInvst2Tab(true);
     setShowNameInfo(false);
    setShowDragDropContent(false);
    setShowContactLocation(false);
    setShowMid(false);
    setShowFarmInfoExp(false);
    setShowLocationSoilType(false);
    setShowCultivationCrop(false);
    setShowInvestmentStrorage(false);
    setShowLast(false);
     setshowFIETab(false);
     setshowLocationSoilTypeTab(false);
     setshowCCTab(false);
     setshowCLTab(false);
      setshowNFMob1Tab(false);
      setshowCLMob1(false);
    setShowCLMob2(false);
     setShowISMob2(false);
        setShowISMob1(false);
  })

  const onNextshowFIETab = useCallback(() => {
    setShowNameInfo(false);
    setShowDragDropContent(false);
    setShowContactLocation(false);
    setShowMid(false);
    setShowFarmInfoExp(false);
    setShowLocationSoilType(false);
    setShowCultivationCrop(false);
    setShowInvestmentStrorage(false);
    setShowLast(false);
    setshowFIETab(true);
    setshowInvst1Tab(false);
    setshowInvst2Tab(false);
    setshowCLTab(false);
     setshowNFMob1Tab(false);
     setshowCLMob1(false);
    setShowCLMob2(false);
     setShowISMob2(false);
        setShowISMob1(false);
  })

  const onNextSTepLocTab = useCallback(() => {
    setShowNameInfo(false);
    setShowDragDropContent(false);
    setShowContactLocation(false);
    setShowMid(false);
    setShowFarmInfoExp(false);
    setShowLocationSoilType(false);
    setShowCultivationCrop(false);
    setShowInvestmentStrorage(false);
    setShowLast(false);
     setshowFIETab(false);
     setshowLocationSoilTypeTab(true);
     setshowCCTab(false);
     setshowInvst1Tab(false);
     setshowInvst2Tab(false);
     setshowCLTab(false);
      setshowNFMob1Tab(false);
      setshowCLMob1(false);
    setShowCLMob2(false);
     setShowISMob2(false);
        setShowISMob1(false);
  })

  const onNextStepCCTab = useCallback(() => {
    setshowCCTab(true);
    setShowNameInfo(false);
    setShowDragDropContent(false);
    setShowContactLocation(false);
    setShowMid(false);
    setShowFarmInfoExp(false);
    setShowLocationSoilType(false);
    setShowCultivationCrop(false);
    setShowInvestmentStrorage(false);
    setShowLast(false);
     setshowFIETab(false);
     setshowLocationSoilTypeTab(false);
     setshowInvst1Tab(false);
     setshowInvst2Tab(false);
     setshowCLTab(false);
      setshowNFMob1Tab(false);
      setshowCLMob1(false);
    setShowCLMob2(false);
     setShowISMob2(false);
        setShowISMob1(false);
  })

const onPrevStepClick = useCallback(() => {
  setShowNameInfo(false);
  setShowDragDropContent(false);
  setShowContactLocation(false);
  setShowMid(false);
  setShowFarmInfoExp(false);
  setShowLocationSoilType(false);
  setShowCultivationCrop(false);
  setShowInvestmentStrorage(false);
  setShowLast(false);
  setshowFIETab(false);
  setshowCCTab(false);
  setshowLocationSoilTypeTab(false);
  setshowInvst1Tab(false);
  setshowInvst2Tab(false);
  setshowCLTab(false);
   setshowNFMob1Tab(false);
   setshowCLMob1(false);
    setShowCLMob2(false);
     setShowISMob2(false);
        setShowISMob1(false);
}, []);






  const onAdduploadAPicClick = useCallback(() => {
    setShowDragDropContent(true);
    setShowNameInfo(false);
  }, []);

  const onNextSstepClickCL = useCallback(() => {
    setShowContactLocation(true);
    setShowNameInfo(false);
    setShowDragDropContent(false);
    setShowMid(false);
    setShowFarmInfoExp(false);
    setShowLocationSoilType(false);
    setShowCultivationCrop(false);
    setShowInvestmentStrorage(false);
    setShowLast(false);
    setshowFIETab(false);
    
  setshowCCTab(false);
  setshowLocationSoilTypeTab(false);
  setshowInvst1Tab(false);
  setshowInvst2Tab(false);
  setshowCLTab(false);
   setshowNFMob1Tab(false);
   setshowCLMob1(false);
    setShowCLMob2(false);
     setShowISMob2(false);
        setShowISMob1(false);
  }, []);

  const onNextSstepClickMID = useCallback(() => {
    setShowMid(true);
    setShowNameInfo(false);
    setShowDragDropContent(false);
    setShowContactLocation(false);
    setShowFarmInfoExp(false);
    setShowLocationSoilType(false);
    setShowCultivationCrop(false);
    setShowInvestmentStrorage(false);
    setShowLast(false);
    setshowFIETab(false);
  setshowCCTab(false);
  setshowLocationSoilTypeTab(false);
  setshowInvst1Tab(false);
  setshowInvst2Tab(false);
  setshowCLTab(false);
   setshowNFMob1Tab(false);
   setshowCLMob1(false);
    setShowCLMob2(false);
     setShowISMob2(false);
        setShowISMob1(false);
  }, []);

  const onNextSstepClickFIE = useCallback(() => {
    setShowFarmInfoExp(true);
    setShowNameInfo(false);
    setShowDragDropContent(false);
    setShowContactLocation(false);
    setShowMid(false);
    setShowLocationSoilType(false);
    setShowCultivationCrop(false);
    setShowInvestmentStrorage(false);
    setShowLast(false);
    setshowFIETab(false);
  setshowCCTab(false);
  setshowLocationSoilTypeTab(false);
  setshowInvst1Tab(false);
  setshowInvst2Tab(false);
  setshowCLTab(false);
   setshowNFMob1Tab(false);
   setshowCLMob1(false);
    setShowCLMob2(false);
     setShowISMob2(false);
        setShowISMob1(false);
  }, []);

  const onNextSstepClickLS = useCallback(() => {
    setShowLocationSoilType(true);
    setShowNameInfo(false);
    setShowDragDropContent(false);
    setShowContactLocation(false);
    setShowMid(false);
    setShowFarmInfoExp(false);
    setShowCultivationCrop(false);
    setShowInvestmentStrorage(false);
    setShowLast(false);
    setshowFIETab(false);
  setshowCCTab(false);
  setshowLocationSoilTypeTab(false);
  setshowInvst1Tab(false);
  setshowInvst2Tab(false);
  setshowCLTab(false);
   setshowNFMob1Tab(false);
   setshowCLMob1(false);
    setShowCLMob2(false);
     setShowISMob2(false);
        setShowISMob1(false);
  }, []);

  const onNextSstepClickCC = useCallback(() => {
    setShowCultivationCrop(true);
    setShowNameInfo(false);
    setShowDragDropContent(false);
    setShowContactLocation(false);
    setShowMid(false);
    setShowFarmInfoExp(false);
    setShowLocationSoilType(false);
    setShowInvestmentStrorage(false);
    setShowLast(false);
    setshowFIETab(false);
  setshowCCTab(false);
  setshowLocationSoilTypeTab(false);
  setshowInvst1Tab(false);
  setshowInvst2Tab(false);
  setshowCLTab(false);
   setshowNFMob1Tab(false);
   setshowCLMob1(false);
    setShowCLMob2(false);
     setShowISMob2(false);
        setShowISMob1(false);
  }, []);

  const onNextSstepClickIS = useCallback(() => {
    setShowInvestmentStrorage(true);
    setShowNameInfo(false);
    setShowDragDropContent(false);
    setShowContactLocation(false);
    setShowMid(false);
    setShowFarmInfoExp(false);
    setShowLocationSoilType(false);
    setShowCultivationCrop(false);
    setShowLast(false);
    setshowFIETab(false);
  setshowCCTab(false);
  setshowLocationSoilTypeTab(false);
  setshowInvst1Tab(false);
  setshowInvst2Tab(false);
  setshowCLTab(false);
   setshowNFMob1Tab(false);
   setshowCLMob1(false);
    setShowCLMob2(false);
     setShowISMob2(false);
        setShowISMob1(false);
  }, []);

   const onNextSstepClickLast = useCallback(() => {
    setShowInvestmentStrorage(false);
    setShowNameInfo(false);
    setShowDragDropContent(false);
    setShowContactLocation(false);
    setShowMid(false);
    setShowFarmInfoExp(false);
    setShowLocationSoilType(false);
    setShowCultivationCrop(false);
    setShowLast(true);
    setshowFIETab(false);
  setshowCCTab(false);
  setshowLocationSoilTypeTab(false);
  setshowInvst1Tab(false);
  setshowInvst2Tab(false);
  setshowCLTab(false);
   setshowNFMob1Tab(false);
   setshowCLMob1(false);
    setShowCLMob2(false);
     setShowISMob2(false);
        setShowISMob1(false);
  }, []);

  const onNextStepCLTab= useCallback(() => {
    setShowInvestmentStrorage(false);
    setShowNameInfo(false);
    setShowDragDropContent(false);
    setShowContactLocation(false);
    setShowMid(false);
    setShowFarmInfoExp(false);
    setShowLocationSoilType(false);
    setShowCultivationCrop(false);
    setShowLast(false);
    setshowFIETab(false);
  setshowCCTab(false);
  setshowLocationSoilTypeTab(false);
  setshowInvst1Tab(false);
  setshowInvst2Tab(false);
  setshowCLTab(true);
   setshowNFMob1Tab(false);
   setshowCLMob1(false);
    setShowCLMob2(false);
     setShowISMob2(false);
        setShowISMob1(false);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  const handleFileInputChange = useCallback((event) => {
    const files = event.target.files;
    handleFileUpload(files);
  }, []);

  const handleSelectFile = useCallback(() => {
    fileInputRef.current.click();
  }, []);

  

  const [selectedFile, setSelectedFile] = useState(null);

  const handleSelectFile1 = useCallback(() => {
    fileInputRef.current.click();
  }, []);

  const handleFileInputChanges = useCallback((event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  }, []);

  


  const handleFileUpload = useCallback((files) => {
    const file = files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageUrl = event.target.result;
        setUploadedImageUrl(imageUrl);
        setImageUploaded(true);
        setShowDragDropContent(false);
        setShowNameInfo(true);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  useEffect(() => {
    setShowNameInfo(false);
    setShowDragDropContent(false);
    setShowContactLocation(false);
    setShowMid(false);
    setShowFarmInfoExp(false);
    setShowLocationSoilType(false);
    setShowCultivationCrop(false);
    setShowInvestmentStrorage(false);
    setShowLast(false);
  }, []);

 

  const onRectangleContainer1Click = () => {
  
  };

  return (
    <div className={styles.startDesktop}>
      {!showNameInfo && !showDragDropContent && !showContactLocation && !showMid && !showFarmInfoExp && !showLocationSoilType && !showCultivationCrop && !showInvestmentStrorage && !showLast && !showFIETab &&!showLocationSoilTypeTab&& !showCCTab&& !showInvst1&&!showInvst2&&!showCLTab&&!showNFMob1&&!showNFMob2&&!showCLMob1&&!showCLMob2&&!showFIMob1&&!showFIMob2&&!showCCMob1&&!showCCMob2&&!showLSMob1&&!showLSMob2&&!showISMob1&&!showISMob2&&(
        <>
          <FarmerProfileFollow />
          <AdditionalInformation />
           {console.log(firstName)}
          <div className={styles.property1defaultParent}>
            <div className={styles.property1default}>
              <div className={styles.rectangleParent}>
                <div className={styles.instanceChild} />
                <div className={styles.loremIpsum}>{"Lorem ipsum "}</div>
                <div className={styles.step1}>Step 1</div>
                <div className={styles.personalInformation}>
                  Personal information
                </div>
                <div
                  className={styles.rectangleGroup}
                  onClick={windowWidth <= 600 ? onNextStepNFMob1 : onNextStepClick}
                >
                  <div className={styles.groupChild} />
                  <div className={styles.start}>Start</div>
                </div>
              </div>
            </div>
            <div className={styles.property1variant2}>
              <div className={styles.rectangleParent}>
                <div className={styles.instanceChild} />
                <div className={styles.loremIpsum}>{"Lorem ipsum "}</div>
                <div className={styles.step1}>Step 2</div>
                <div className={styles.personalInformation}>
                  Agriculture information
                </div>
                <div className={styles.groupDiv}>
                  <div className={styles.groupChild} />
                  <div className={styles.start} onClick={onNextSstepClickMID}>Start</div>
                </div>
              </div>
            </div>
            <NextStepButton onClick={onNextStepClick} />
            

            {/* { windowWidth <= 600 ? <NextStepButton
        onClick={onNextStepNFMob1}
       
      /> : <NextStepButton
        onClick={onNextStepNFMob1}
       
      />} */}
          </div>
        </>
      )}
      {showNameInfo && (
        <form className={styles.startDesktop} onSubmit={handleSubmit}>
          <div className={styles.of2}>1 of 2</div>

           {windowWidth >= 600 && windowWidth <= 865 ? null : <FarmerProfileFollow  />}
          <AdditionalInformation />
          <div className={styles.containerProfilePhoto}>
            <div className={styles.containerProfilePhotoChild} />
            {uploadedImageUrl && (
              <img
                src={uploadedImageUrl}
                alt="Uploaded"
                className={styles.uploadedImage}
              />
            )}
            <div className={styles.rectangleParent12}>
              {imageUploaded ? null : (
                <div className={styles.groupChild12} />
              )}
              <div
                className={styles.adduploadAPic}
                onClick={onAdduploadAPicClick}
              >
                {imageUploaded ? "" : "Add/upload a pic"}
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
          <div
  className={styles.pre}
  onClick={onPrevStepClick}
  style={{
    display: windowWidth >= 600 && windowWidth <= 865 ? 'none' : 'block'
  }}
>
  Prev
</div>

         
          {windowWidth >= 600 && windowWidth <= 865 ? (
  null 
) : (
  <NextStepButton onClick={onNextSstepClickCL} />
  
)}

          
          
        <div
        style={{
          position: "absolute",
          top: "909px",
          left: "198px",
          borderRadius: "8px",
          backgroundColor: "#02044a",
          width: "345px",
          height: "49px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "924px",
          left: "320px",
          fontSize: "14px",
          letterSpacing: "-0.02em",
          lineHeight: "20px",
          fontWeight: "500",
          fontFamily: "Inter",
          color: "#fff",
        }}
         onClick={onNextStepCLTab}
      >
        Next step
      </div>
      <div
        style={{
          position: "absolute",
          top: "986px",
          
          left: "340px",
          letterSpacing: "-0.02em",
          lineHeight: "20px",
          fontWeight: "500",
          fontFamily: "Inter",
        }}
        onClick={onPrevStepClick}
      >
        Prev
      </div>

        </form>
      )}
     {showDragDropContent && (
        <div className={styles.dragDropContent}>
          {windowWidth >= 600 && windowWidth <= 865 ? null : (
            <FarmerProfileFollow />
          )}
          <AdditionalInformation />
          <div className={styles.of2}>1 of 2</div>
          <div className={styles.uploadingAPicDesktopItem} />
          <div className={styles.or}>or</div>
          <img
            className={styles.clouduploadIcon}
            alt=""
            src="/cloudupload.svg"
          />
          <div className={styles.dragAndDrop}>Drag and drop here</div>
          <div className={styles.vectorGroup}>
            <button className={styles.selectFile} onClick={handleSelectFile}>
              Select file
            </button>
            <input
              type="file"
              style={{ display: "none" }}
              accept="image/*"
              className={styles.fileInput}
              ref={fileInputRef}
              onChange={handleFileInputChange}
            />
          </div>
<div
  className={styles.pre}
  onClick={onNextStepClick}
  style={{
    display: windowWidth >= 600 && windowWidth <= 865 ? 'none' : 'block'
  }}
>
  Prev
</div>

         
          {windowWidth >= 600 && windowWidth <= 865 ? (
  null 
) : (
  <NextStepButton onClick={onNextSstepClickCL} />
  
)}
 <div
        style={{
          position: "absolute",
          top: "909px",
          left: "198px",
          borderRadius: "8px",
          backgroundColor: "#02044a",
          width: "345px",
          height: "49px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "924px",
          left: "320px",
          fontSize: "14px",
          letterSpacing: "-0.02em",
          lineHeight: "20px",
          fontWeight: "500",
          fontFamily: "Inter",
          color: "#fff",
        }}
         onClick={onNextStepCLTab}
      >
        Next step
      </div>
      <div
        style={{
          position: "absolute",
          top: "986px",
          
          left: "340px",
          letterSpacing: "-0.02em",
          lineHeight: "20px",
          fontWeight: "500",
          fontFamily: "Inter",
        }}
        onClick={onNextStepClick}
      >
        Prev
      </div>
          
        </div>
      )}


      {showContactLocation && (
        <div
      className={styles.startDesktop}
      style={{
       
        overflowY: "auto"
      }}
    >
          {windowWidth >= 600 && windowWidth <= 865 ? null : <FarmerProfileFollow  />}
          <div className="input-fieldtype1">
            <div className="error">*error</div>
            <div className="label" placeholder="Enter Email">Email</div>
            <div className="input-fieldtype1-child" />
            <div className="mail-outline-parent">
              <img
                className="mail-outline-icon"
                alt=""
                src="/mail-outline.svg"
              />
              <input
                className="rakigmailcom"
                type="text"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <img className="add-icon" alt="" src="/add.svg" />
            <div className="input-fieldtype1-item" />
          </div>
          <div className="input-fieldtype11">
            <div className="error">*error</div>
            <div className="label" >Phone</div>
            <div className="input-fieldtype1-child" />
            <div className="mail-outline-parent">
              <img className="mail-outline-icon" alt="" src="/phone.svg" />
              <input
                className="rakigmailcom"
                type="text"
                placeholder="Enter Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <img className="add-icon" alt="" src="/add.svg" />
            <div className="input-fieldtype1-item" />
          </div>
          <div className="input-fieldtype12">
            <div className="error">*error</div>
            <div className="label" >Location</div>
            <div className="input-fieldtype1-child" />
            <div className="mail-outline-parent">
              <img
                className="mail-outline-icon"
                alt=""
                src="/location-on.svg"
              />
              <input
                className="rakigmailcom"
                type="text"
                placeholder="Enter Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
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
                <select className="dropdown-option">
  <option value="Dropdown option" disabled selected hidden>Dropdown option</option>
  <option value="A">A</option>
  <option value="B">B</option>
  <option value="C">C</option>
</select>



              </div>
            </div>
          </div>
          <div className="dropdownmedium1">
            <div className="dropdown-title">Mandal</div>
            <div className="input-field">
              <div className="text">
                <select className="dropdown-option">
  <option value="Dropdown option" disabled selected hidden>Dropdown option</option>
  <option value="A">A</option>
  <option value="B">B</option>
  <option value="C">C</option>
</select>
              </div>
            </div>
          </div>
          <div className="dropdownmedium2">
            <div className="dropdown-title">District</div>
            <div className="input-field">
              <div className="text">
                <select className="dropdown-option">
  <option value="Dropdown option" disabled selected hidden>Dropdown option</option>
  <option value="A">A</option>
  <option value="B">B</option>
  <option value="C">C</option>
</select>
              </div>
            </div>
          </div>
          <div className="inputs-dropdowns-wrapper">
            <div className="inputs-dropdowns">
              <div className="pincode">Pincode</div>
              <div className="input-field3">
                {/* <input type="text" className="rakigmailcom" defaultValue="516XXX" /> */}
                <input
        type="text"
        placeholder="Pincode"
        className="pin"
        value={pincode}
        onChange={(e) => setPincode(e.target.value)}/>

              </div>
            </div>
          </div>
          <AdditionalInformation
            onRectangleContainer1Click={onRectangleContainer1Click}
          />
          <NextStepButton onClick={onNextSstepClickMID} />
          <div onClick={onNextStepClick} className={styles.pre} >Prev</div>
        </div>
      )}

{showMid && (
  <div className={styles.startDesktop}>
    
    <FarmerProfileFollow  />
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
              onClick={onPrevStepClick}
            >
              <div className={styles.groupChild1} />
              <div className={styles.start1}>Edit</div>
            </div>
             <div className={styles.instanceItem} />
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
 {console.log(firstName,middleName,lastName)}
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
  {windowWidth <= 865 && windowWidth >= 600 ? (
    <div className={styles.start} onClick={onNextshowFIETab}>
      Start
    </div>
  ) : (
    <div className={styles.start} onClick={windowWidth <= 600 ? onNextStepFIMob1 : onNextSstepClickFIE}>
      Start
    </div>
  )}
</div>

          </div>
        </div>
        </div>
        {/* onClick={windowWidth <= 600 ? onNextStepFIMob1 : onNextSstepClickFIE} */}
      <AdditionalInformation onRectangleContainer1Click={onRectangleContainer1Click} />
      
      {/* {windowWidth >= 600 && windowWidth <= 865 ? <NextStepButton
        onClick={onNextshowFIETab}
       
      /> : <NextStepButton
        onClick={onNextSstepClickFIE}
       
      />}
    
     <div onClick={onNextSstepClickCL} className={styles.pre} >Prev</div> */}
   
  </div>
)}

{showFarmInfoExp && (
  <div className={styles.startDesktop}>
   
    {windowWidth >= 600 && windowWidth <= 865 ? null : <FarmerProfileFollow />}
      <div className={styles.landInformation}>Land information</div>
      {windowWidth >= 600 && windowWidth <= 865 && (
  <div className={styles.farmInformation}>Farm information</div>
)}
      <div className={styles.farmInfoAndExperincedesktoItem} />
      {/* <img
        className={styles.farmInfoAndExperincedesktoInner}
        alt=""
        src="/vector-5.svg"
      />
      <img className={styles.iconPlus} alt="" src="/icon--plus.svg" />
      <img className={styles.iconMinus} alt="" src="/icon--minus.svg" />
      <div className={styles.div}>100</div> */}
      <img
        style={{
          position: "absolute",
          top: "308px",
          left: "187px",
          width: "173px",
          height: "29px",
        }}
        alt=""
        src="/vector-5.svg"
      />
      <img
      onClick={incrementAcres}
        style={{
          position: "absolute",
          top: "308px",
          left: "410px",
          width: "24px",
          height: "24px",
        }}
        alt=""
        src="/icon--plus.svg"
      />
      <img
      onClick={decrementAcres}
        style={{
          position: "absolute",
          top: "308px",
          left: "120px",
          width: "24px",
          height: "24px",
        }}
        alt=""
        src="/icon--minus.svg"
      />
      <div
          style={{
            position: "absolute",
            top: "308px",
            left: "238px",
            letterSpacing: "1px",
            lineHeight: "24px",
            fontWeight: "600",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "64px",
            height: "23px",
          }}
        >
          <input
            type="number"
            value={acres}
            onChange={e => setAcres(parseInt(e.target.value))}
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              textAlign: "center",
              outline: "none",
              fontSize: "inherit",
              fontWeight: "inherit",
            }}
          />
        </div>
      <div className={styles.farmingExperience}>Farming experience</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.experienceInFarming}>Experience in farming ?</div>
      <div className={styles.textValues}>
        <div className={styles.textValuesChild} />
        <div className={styles.div1} onClick={() => handleSoilTypeSelect("0-10 years")}>0-10 years
        {selectedSoilType === "0-10 years" && (
            <img
              className={styles.checkCircleIcon}
              alt=""
              src="/check-circle.svg"
            />
          )}
        </div>
      </div>
      <div className={styles.textValues1}>
        <div className={styles.textValuesChild} />
        <div className={styles.div1} onClick={() => handleSoilTypeSelect("10-20 years")}>10-20 years
        {selectedSoilType === "10-20 years" && (
            <img
              className={styles.checkCircleIcon}
              alt=""
              src="/check-circle.svg"
            />
          )}
        </div>
        
      </div>
      <div className={styles.textValues2}>
        <div className={styles.textValuesChild} />
        <div className={styles.div1} onClick={() => handleSoilTypeSelect("30-40 years")}>30-40 years
        {selectedSoilType === "30-40 years" && (
            <img
              className={styles.checkCircleIcon}
              alt=""
              src="/check-circle.svg"
            />
          )}
        </div>
      </div>
      <div className={styles.textValues3}>
        <div className={styles.textValuesChild} />
        <div className={styles.div1} onClick={() => handleSoilTypeSelect("20-30 years")}>20-30 years
        {selectedSoilType === "20-30 years" && (
            <img
              className={styles.checkCircleIcon}
              alt=""
              src="/check-circle.svg"
            />
          )}
        </div>
      </div>

      <AdditionalInformation onRectangleContainer1Click={onRectangleContainer1Click} />
   
     {windowWidth >= 600 && windowWidth <= 865 ? <NextStepButton
        onClick={onNextSTepLocTab}
       
      /> : <NextStepButton
        onClick={onNextSstepClickLS}
       
      />}
    <div onClick={onNextSstepClickMID} className={styles.pre} >Prev</div>
    
  </div>
)}

{showLocationSoilType && (
  <div className={styles.startDesktop}>
    
     {windowWidth >= 600 && windowWidth <= 865 ? null : <FarmerProfileFollow  />}
      <img
        className={styles.locationAndSoilTypeDesktoItem}
        alt=""
        src="/rectangle-55@2x.png"
        data-scroll-to="rectangleImage"
      />
      {windowWidth >= 600 && windowWidth <= 865 && (
  <div className={styles.farmInformation}>Land information</div>
)}
      <div className={styles.locationOfA}>Location of a farm</div>
      <div className={styles.inputFieldtype1}>
        
        <div className={styles.inputFieldtype1Childl} />
        <div className={styles.locationOnParent}>
          <img
            className={styles.locationOnIcon}
            alt=""
            src="/location-on.svg"
          />
          <div className={styles.raki}>26/328 Houston</div>
        </div>
        <img
          className={styles.locationOnIcon1}
          alt=""
          src="/location-on.svg"
          onClick={onRectangleContainer1Click}
        />
        <div className={styles.inputFieldtype1Item} />
      </div>
      <div className={styles.locationAndSoilTypeDesktoInner} />
      <div className={styles.typeOfSoil}>Type of soil ?</div>
      <div className={styles.soilTypeWrapper}>
        <div className={styles.soilType}>Soil type</div>
      </div>
      <div className={styles.textValues}>
        <div className={styles.textValuesChild} />
        <div className={styles.divn} onClick={() => handleSoilTypeSelect("Alluvial soil")}>Alluvial soil
        {selectedSoilType === "Alluvial soil" && (
            <img
              className={styles.checkCircleIcon}
              alt=""
              src="/check-circle.svg"
            />
          )}
        </div>
      </div>
      <div className={styles.textValues1}>
        <div className={styles.textValuesChild} />
        <div className={styles.divn} onClick={() => handleSoilTypeSelect("Red soil")}>Red soil
        {selectedSoilType === "Red soil" && (
            <img
              className={styles.checkCircleIcon}
              alt=""
              src="/check-circle.svg"
            />
          )}
        </div>
        
      </div>
      <div className={styles.textValues2}>
        <div className={styles.textValuesChild} />
        <div className={styles.divn} onClick={() => handleSoilTypeSelect("Black soil")}>Black soil
        {selectedSoilType === "Black soil" && (
            <img
              className={styles.checkCircleIcon}
              alt=""
              src="/check-circle.svg"
            />
          )}
        </div>
        
      </div>
      <div className={styles.textValues3}>
        <div className={styles.textValuesChild} />
        <div className={styles.divn} onClick={() => handleSoilTypeSelect("Sandy soil")}>Sandy soil
        {selectedSoilType === "Sandy soil" && (
            <img
              className={styles.checkCircleIcon}
              alt=""
              src="/check-circle.svg"
            />
          )}
        </div>
      </div>
      <AdditionalInformation onRectangleContainer1Click={onRectangleContainer1Click} />
    
      {windowWidth >= 600 && windowWidth <= 865 ? <NextStepButton
        onClick={onNextStepCCTab}
       
      /> : <NextStepButton
        onClick={onNextSstepClickCC}
       
      />}
     <div onClick={onNextSstepClickFIE} className={styles.pre} >Prev</div>
  </div>
)}

{showCultivationCrop && (
  <div className={styles.startDesktop}>
   
     {windowWidth >= 600 && windowWidth <= 865 ? null : <FarmerProfileFollow  />}
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
    {/* <NextStepButton onClick={onNextSstepClickIS} /> */}
     {windowWidth >= 600 && windowWidth <= 865 ? <NextStepButton
        onClick={onNextSTepInvst1}
       
      /> : <NextStepButton
        onClick={onNextSstepClickIS}
       
      />}
   <div onClick={onNextSstepClickLS} className={styles.pre} >Prev</div>
  </div>
)}

{showInvestmentStrorage && (
  <div className={styles.startDesktop}>
   
           {windowWidth >= 600 && windowWidth <= 865 ? null : <FarmerProfileFollow  />}
      <div className="investment1">Investment</div>
      <div className="storage-capacity">Storage capacity</div>
      <div className="investment-and-storage-capacit-item" />
      <div className="investment-and-storage-capacit-inner" />
      <div className="yearly-investment1">Yearly investment</div>
      <div className="what-is-the">What is the storage capcity?</div>
      <div className="text-values20">
        <div className="text-values-child18" />
       <div
                className={`div24 ${selectedYearlyInvestment === "100000-200000" ? styles.selectedOption : ""}`}
                onClick={() => handleYearlyInvestmentSelect("100000-200000")}
              >
                100000-200000
                {selectedYearlyInvestment === "100000-200000" && (
                  <img
                    className={styles.checkCircleIcon}
                    alt=""
                    src="/check-circle.svg"
                  />
                )}
              </div>
            </div>
            <div className="text-values21">
              <div className="text-values-child18" />
              <div
                className={`div24 ${selectedYearlyInvestment === "200000-300000" ? styles.selectedOption : ""}`}
                onClick={() => handleYearlyInvestmentSelect("200000-300000")}
              >
                200000-300000
                {selectedYearlyInvestment === "200000-300000" && (
                  <img
                    className={styles.checkCircleIcon}
                    alt=""
                    src="/check-circle.svg"
                  />
                )}
              </div>
            </div>
            <div className="text-values22">
              <div className="text-values-child18" />
              <div
                className={`div24 ${selectedYearlyInvestment === "300000-400000" ? styles.selectedOption : ""}`}
                onClick={() => handleYearlyInvestmentSelect("300000-400000")}
              >
                300000-400000
                {selectedYearlyInvestment === "300000-400000" && (
                  <img
                    className={styles.checkCircleIcon}
                    alt=""
                    src="/check-circle.svg"
                  />
                )}
              </div>
            </div>
            <div className="text-values23">
              <div className="text-values-child18" />
              <div
                className={`div24 ${selectedYearlyInvestment === "400000-500000" ? styles.selectedOption : ""}`}
                onClick={() => handleYearlyInvestmentSelect("400000-500000")}
              >
                400000-500000
                {selectedYearlyInvestment === "400000-500000" && (
                  <img
                    className={styles.checkCircleIcon}
                    alt=""
                    src="/check-circle.svg"
                  />
                )}
        </div>
      </div>
      <div className="text-values24">
        <div className="text-values-child18" />
        <div className="div24" onClick={() => handleSoilTypeSelect("400-600 sqft")}>400-600 sqft
        {selectedSoilType === "400-600 sqft" && (
            <img
              className={styles.checkCircleIcon}
              alt=""
              src="/check-circle.svg"
            />
          )}
        </div>
        
      </div>
      <div className="text-values25">
        <div className="text-values-child18" />
        <div className="div24" onClick={() => handleSoilTypeSelect("0-200 sqft")}>0-200 sqft
        {selectedSoilType === "0-200 sqft" && (
            <img
              className={styles.checkCircleIcon}
              alt=""
              src="/check-circle.svg"
            />
          )}
        </div>
      </div>
      <div className="text-values26">
        <div className="text-values-child18" />
        <div className="div24" onClick={() => handleSoilTypeSelect("200-400 sqft")}>200-400 sqft
        {selectedSoilType === "200-400 sqft" && (
            <img
              className={styles.checkCircleIcon}
              alt=""
              src="/check-circle.svg"
            />
          )}
        </div>
      </div>
      <div className="text-values27">
        <div className="text-values-child18" />
        <div className="div24" onClick={() => handleSoilTypeSelect("600-800 sqft")}>600-800 sqft
        {selectedSoilType === "600-800 sqft" && (
            <img
              className={styles.checkCircleIcon}
              alt=""
              src="/check-circle.svg"
            />
          )}
        </div>
      </div>
    
      <AdditionalInformation onRectangleContainer1Click={onRectangleContainer1Click} />

    <NextStepButton onClick={onNextSstepClickLast} />
   <div onClick={onNextSstepClickCC} className={styles.pre} >Prev</div>
  </div>
)}

{showLast && (
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
              onClick={onPrevStepClick}
            >
              <div className={styles.groupChild1} />
              <div className={styles.start1}>Edit</div>
            </div>
            <div className={styles.instanceItem} />
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
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
              <div className={styles.groupChild1} onClick={onNextSstepClickMID} />
              <div className={styles.start1}>Edit</div>
            </div>
            <div className={styles.instanceItem} />
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            </div>
            </div></div>
      <AdditionalInformation onRectangleContainer1Click={onRectangleContainer1Click} />
    
    
  </div>
)}

{showFIETab  && (
   <div
      style={{
        width: "100%",
        position: "relative",
        backgroundColor: "#fff",
        height: "1133px",
        overflow: "hidden",
        textAlign: "center",
        fontSize: "16px",
        color: "#000",
        fontFamily: "Poppins",
      }}
    >
       {windowWidth >= 600 && windowWidth <= 865 ? null : <FarmerProfileFollow  />}
      <div
        style={{
          position: "absolute",
          top: "68.5px",
          left: "-0.5px",
          borderTop: "1px solid #000",
          boxSizing: "border-box",
          width: "745px",
          height: "1px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "24px",
          left: "28px",
          fontSize: "24px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
        }}
      >
        Logo
      </div>
      <div
        style={{
          position: "absolute",
          top: "24px",
          left: "146px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
          textAlign: "left",
        }}
      >
        Personal information
      </div>
      <div
        style={{
          position: "absolute",
          top: "24px",
          left: "369px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
          color: "#1b5bff",
          textAlign: "left",
        }}
      >
        Agriculture information
      </div>
      <img
        style={{
          position: "absolute",
          top: "31px",
          left: "347px",
          width: "12px",
          height: "12px",
          objectFit: "cover",
        }}
        alt=""
        src="/right-arrow@2x.png"
      />
      <div
        style={{
          position: "absolute",
          top: "125px",
          left: "calc(50% - 99px)",
          fontSize: "24px",
          fontWeight: "600",
          fontFamily: "'Noto Sans'",
          textAlign: "left",
        }}
      >
        Farm information
      </div>
      <div
        style={{
          position: "absolute",
          top: "193px",
          left: "199px",
          letterSpacing: "-0.02em",
          lineHeight: "24px",
          fontWeight: "600",
        }}
      >
        Land in acres
      </div>
      <NextStepButton onClick={onNextSTepLocTab}/>
      {/* next step */}
      <div onClick={onNextSstepClickMID} className={styles.pre} >Prev</div>
  
      {/* prev */}
      <div
        style={{
          position: "absolute",
          height: "3.97%",
          width: "46.37%",
          top: "21.54%",
          right: "26.88%",
          bottom: "74.49%",
          left: "26.75%",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0%",
            right: "0%",
            bottom: "0%",
            left: "0%",
            borderRadius: "8px",
            backgroundColor: "#d9d9d9",
            border: "1px solid #000",
            boxSizing: "border-box",
          }}
        />
        <div
          style={{
            position: "absolute",
            height: "50%",
            width: "85.62%",
            top: "25.11%",
            left: "8.06%",
            letterSpacing: "-0.02em",
            lineHeight: "24px",
            fontWeight: "600",
            display: "inline-block",
          }}
        >
          How many acres do you have ?
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "calc(50% - 249.5px)",
          left: "calc(50% - 170px)",
          borderRadius: "8px",
          backgroundColor: "#d9d9d9",
          border: "1px solid #000",
          boxSizing: "border-box",
          width: "342px",
          height: "50px",
        }}
      />
      <img
        style={{
          position: "absolute",
          width: "calc(100% - 571px)",
          top: "calc(50% - 238.5px)",
          left: "289px",
          right:"282px",
          height: "29px",
          maxWidth: "100%",
          overflow: "hidden",
        }}
        alt=""
        src="/vector-5.svg"
      />
      <img
      onClick={incrementAcres}
        style={{
          position: "absolute",
          top: "calc(50% - 237.5px)",
          right:"228px",
          width: "24px",
          height: "24px",
        }}
        alt=""
        src="/icon--plus.svg"
      />
      <img
      onClick={decrementAcres}
        style={{
          position: "absolute",
          top: "calc(50% - 237.5px)",
          left: "239px",
          width: "24px",
          height: "24px",
        }}
        alt=""
        src="/icon--minus.svg"
      />
      <div
          style={{
            position: "absolute",
            width: "calc(100% - 680px)",
            top: "calc(50% - 235.5px)",
            left: "340px",
            letterSpacing: "1px",
            lineHeight: "24px",
            fontWeight: "600",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            
            height: "23px",
          }}
        >
          <input
            type="number"
            value={acres}
            onChange={e => setAcres(parseInt(e.target.value))}
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              textAlign: "center",
              outline: "none",
              fontSize: "inherit",
              fontWeight: "inherit",
            }}
          />
        </div>
      <div
        style={{
          position: "absolute",
          top: "95px",
          left: "640px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "60px",
          height: "16px",
        }}
      >
        1 of 4
      </div>
      <div
        style={{
          position: "absolute",
          top: "442px",
          left: "197px",
          width: "345px",
          height: "45px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            borderRadius: "8px",
            backgroundColor: "#d9d9d9",
            border: "1px solid #000",
            boxSizing: "border-box",
            width: "345px",
            height: "45px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "11.3px",
            left: "65.4px",
            letterSpacing: "-0.02em",
            lineHeight: "24px",
            fontWeight: "600",
            display: "inline-block",
            width: "221.5px",
            height: "22.5px",
          }}
        >
          Experience in farming ?
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "522px",
          left: "calc(50% - 171px)",
          width: "342px",
          height: "48px",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0%",
            right: "0%",
            bottom: "0%",
            left: "0%",
            borderRadius: "8px",
            backgroundColor: "#d9d9d9",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "calc(100% - 134px)",
            top: "calc(50% - 12px)",
            left: "48px",
            letterSpacing: "-0.02em",
            lineHeight: "24px",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "24px",
          }}
          onClick={() => handleSoilTypeSelect("1-10 years")}
        >
          1-10 years
          {selectedSoilType === "1-10 years" && (
            <img
              className={styles.checkCircleIcon}
              alt=""
              src="/check-circle.svg"
            />
          )}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "650px",
          left: "204px",
          width: "342px",
          height: "48px",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0%",
            right: "0%",
            bottom: "0%",
            left: "0%",
            borderRadius: "8px",
            backgroundColor: "#d9d9d9",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "calc(100% - 134px)",
            top: "calc(50% - 12px)",
            left: "48px",
            letterSpacing: "-0.02em",
            lineHeight: "24px",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "24px",
          }}
          onClick={() => handleSoilTypeSelect("15-20 years")}
        >
          15-20 years
          {selectedSoilType === "15-20 years" && (
            <img
              className={styles.checkCircleIcon}
              alt=""
              src="/check-circle.svg"
            />
          )}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "586px",
          left: "204px",
          width: "342px",
          height: "48px",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0%",
            right: "0%",
            bottom: "0%",
            left: "0%",
            borderRadius: "8px",
            backgroundColor: "#d9d9d9",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "calc(100% - 134px)",
            top: "calc(50% - 12px)",
            left: "48px",
            letterSpacing: "-0.02em",
            lineHeight: "24px",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "24px",
          }}
          onClick={() => handleSoilTypeSelect("10-15 years")}
        >
          10-15 years
          {selectedSoilType === "10-15 years" && (
            <img
              className={styles.checkCircleIcon}
              alt=""
              src="/check-circle.svg"
            />
          )}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "712px",
          left: "202px",
          borderRadius: "8px",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          
          boxSizing: "border-box",
          width: "346px",
          height: "52px",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0%",
            right: "0%",
            bottom: "0%",
            left: "0%",
            borderRadius: "8px",
            backgroundColor: "#d9d9d9",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "calc(100% - 134px)",
            top: "calc(50% - 12px)",
            left: "48px",
            letterSpacing: "-0.02em",
            lineHeight: "24px",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "24px",
          }}
          onClick={() => handleSoilTypeSelect("20-25 years")}
        >
          20-25 years
          {selectedSoilType === "20-25 years" && (
            <img
              className={styles.checkCircleIcon}
              alt=""
              src="/check-circle.svg"
            />
          )}
        </div>
        
      </div>
    </div>
)}

{showLocationSoilTypeTab && (
   <div
      style={{
        width: "100%",
        position: "relative",
        backgroundColor: "#fff",
        height: "1133px",
        overflow: "hidden",
        textAlign: "center",
        fontSize: "16px",
        color: "#000",
        fontFamily: "Poppins",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "68.5px",
          left: "-0.5px",
          borderTop: "1px solid #000",
          boxSizing: "border-box",
          width: "745px",
          height: "1px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "24px",
          left: "28px",
          fontSize: "24px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
        }}
      >
        Logo
      </div>
      <div
        style={{
          position: "absolute",
          top: "24px",
          left: "146px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
          textAlign: "left",
        }}
      >
        Personal information
      </div>
      <div
        style={{
          position: "absolute",
          top: "24px",
          left: "369px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
          color: "#1b5bff",
          textAlign: "left",
        }}
      >
        Agriculture information
      </div>
      <img
        style={{
          position: "absolute",
          top: "31px",
          left: "347px",
          width: "12px",
          height: "12px",
          objectFit: "cover",
        }}
        alt=""
        src="/right-arrow@2x.png"
      />
      <div
        style={{
          position: "absolute",
          top: "125px",
          left: "calc(50% - 99px)",
          fontSize: "24px",
          fontWeight: "600",
          fontFamily: "'Noto Sans'",
          textAlign: "left",
        }}
      >
        Farm information
      </div>
      
      <NextStepButton onClick={onNextStepCCTab}/>
      {/* prev */}
      <div onClick={onNextshowFIETab} className={styles.pre} >Prev</div>
      <div
        style={{
          position: "absolute",
          top: "95px",
          left: "640px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "60px",
          height: "16px",
        }}
      >
        1 of 4
      </div>
      <div
        style={{
          position: "absolute",
          top: "193px",
          left: "199px",
          width: "166px",
          height: "24px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            letterSpacing: "1px",
            lineHeight: "24px",
            fontWeight: "600",
          }}
        >{`Location of a farm `}</div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "204px",
          left: "calc(50% - 173px)",
          width: "342px",
          height: "102px",
          fontSize: "12px",
          color: "#d50000",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "74.51%",
            left: "3.63%",
            letterSpacing: "-0.02em",
            lineHeight: "26px",
            fontWeight: "600",
            display: "none",
          }}
        >
          *error
        </div>
        <div
          style={{
            position: "absolute",
            height: "25.49%",
            width: "49.15%",
            top: "0%",
            left: "0.85%",
            letterSpacing: "-0.02em",
            lineHeight: "26px",
            fontWeight: "600",
            color: "#a2a2a2",
            textAlign: "left",
            display: "none",
          }}
        >
          Farm Location
        </div>
        <div
          style={{
            position: "absolute",
            height: "49.02%",
            width: "100%",
            top: "25.49%",
            right: "0%",
            bottom: "25.49%",
            left: "0%",
            borderRadius: "8px",
            backgroundColor: "#fff",
            border: "1px solid #000",
            boxSizing: "border-box",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "calc(50% - 14px)",
            left: "20px",
            width: "166px",
            height: "26px",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "flex-start",
            gap: "12px",
            fontSize: "14px",
            color: "#949494",
            fontFamily: "Inter",
          }}
        >
          <img
            style={{
              width: "24px",
              position: "relative",
              height: "24px",
              overflow: "hidden",
              flexShrink: "0",
              display: "none",
            }}
            alt=""
            src="/location-on.svg"
          />
          <div
            style={{
              position: "relative",
              letterSpacing: "-0.02em",
              lineHeight: "26px",
            }}
          >
            26/328 Houston
          </div>
        </div>
        <img
          style={{
            position: "absolute",
            top: "calc(50% - 12px)",
            right: "13px",
            width: "24px",
            height: "24px",
            overflow: "hidden",
          }}
          alt=""
          src="/location-on.svg"
        />
        <div
          style={{
            position: "absolute",
            height: "calc(100% - 51px)",
            top: "25.5px",
            right: "45.5px",
            bottom: "25.5px",
            borderRight: "1px solid #000",
            boxSizing: "border-box",
            width: "1px",
          }}
        />
      </div>
      <img
        style={{
          position: "absolute",
          top: "311px",
          left: "calc(50% - 173px)",
          width: "342px",
          height: "244px",
          objectFit: "cover",
        }}
        alt=""
        src="/rectangle-55@2x.png"
      />
      <div
        style={{
          position: "absolute",
          top: "592px",
          left: "199px",
          borderRadius: "8px",
          backgroundColor: "#d9d9d9",
          border: "1px solid #000",
          boxSizing: "border-box",
          width: "345px",
          height: "48px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "604px",
          left: "322px",
          letterSpacing: "-0.02em",
          lineHeight: "24px",
          fontWeight: "600",
        }}
      >
        Type of soil ?
      </div>
      <div
        style={{
          position: "absolute",
          top: "653px",
          left: "200px",
          borderRadius: "8px",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          
          boxSizing: "border-box",
          width: "346px",
          height: "52px",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0%",
            right: "0%",
            bottom: "0%",
            left: "0%",
            borderRadius: "8px",
            backgroundColor: "#d9d9d9",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "calc(100% - 134px)",
            top: "calc(50% - 12px)",
            left: "48px",
            letterSpacing: "-0.02em",
            lineHeight: "24px",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "24px",
          }}
          onClick={() => handleSoilTypeSelect("Alluvial soil")}
        >
          Alluvial soil
          {selectedSoilType === "Alluvial soil" && (
            <img
              className={styles.checkCircleIcon}
              alt=""
              src="/check-circle.svg"
            />
          )}
        </div>
        
      </div>
      <div
        style={{
          position: "absolute",
          top: "718px",
          left: "202px",
          width: "342px",
          height: "48px",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0%",
            right: "0%",
            bottom: "0%",
            left: "0%",
            borderRadius: "8px",
            backgroundColor: "#d9d9d9",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "calc(100% - 134px)",
            top: "calc(50% - 12px)",
            left: "48px",
            letterSpacing: "-0.02em",
            lineHeight: "24px",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "24px",
          }}
          onClick={() => handleSoilTypeSelect("Black soil")}
        >
          Black soil
          {selectedSoilType === "Black soil" && (
            <img
              className={styles.checkCircleIcon}
              alt=""
              src="/check-circle.svg"
            />
          )}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "778px",
          left: "202px",
          width: "342px",
          height: "48px",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0%",
            right: "0%",
            bottom: "0%",
            left: "0%",
            borderRadius: "8px",
            backgroundColor: "#d9d9d9",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "calc(100% - 134px)",
            top: "calc(50% - 12px)",
            left: "48px",
            letterSpacing: "-0.02em",
            lineHeight: "24px",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "24px",
          }}
          onClick={() => handleSoilTypeSelect("Red soil")}
        >
          Red soil
          {selectedSoilType === "Red soil" && (
            <img
              className={styles.checkCircleIcon}
              alt=""
              src="/check-circle.svg"
            />
          )}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "838px",
          left: "202px",
          width: "342px",
          height: "48px",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0%",
            right: "0%",
            bottom: "0%",
            left: "0%",
            borderRadius: "8px",
            backgroundColor: "#d9d9d9",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "calc(100% - 134px)",
            top: "calc(50% - 12px)",
            left: "48px",
            letterSpacing: "-0.02em",
            lineHeight: "24px",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "24px",
          }}
          onClick={() => handleSoilTypeSelect("Sand soil")}
        >
          Sand soil
          {selectedSoilType === "Sand soil" && (
            <img
              className={styles.checkCircleIcon}
              alt=""
              src="/check-circle.svg"
            />
          )}
        </div>
      </div>
    </div>
)}

{showCCTab && (
  <div
      style={{
        width: "100%",
        position: "relative",
        backgroundColor: "#fff",
        height: "1133px",
        overflow: "hidden",
        textAlign: "center",
        fontSize: "16px",
        color: "#000",
        fontFamily: "Poppins",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "68.5px",
          left: "-0.5px",
          borderTop: "1px solid #000",
          boxSizing: "border-box",
          width: "745px",
          height: "1px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "24px",
          left: "28px",
          fontSize: "24px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
        }}
      >
        Logo
      </div>
      <div
        style={{
          position: "absolute",
          top: "24px",
          left: "146px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
          textAlign: "left",
        }}
      >
        Personal information
      </div>
      <div
        style={{
          position: "absolute",
          top: "24px",
          left: "369px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
          color: "#1b5bff",
          textAlign: "left",
        }}
      >
        Agriculture information
      </div>
      <img
        style={{
          position: "absolute",
          top: "31px",
          left: "347px",
          width: "12px",
          height: "12px",
          objectFit: "cover",
        }}
        alt=""
        src="/right-arrow@2x.png"
      />
      <div
        style={{
          position: "absolute",
          top: "125px",
          left: "calc(50% - 99px)",
          fontSize: "24px",
          fontWeight: "600",
          fontFamily: "'Noto Sans'",
          textAlign: "left",
        }}
      >
        Farm information
      </div>
      <NextStepButton onClick={onNextSTepInvst1}/>
      {/* prev */}<div onClick={onNextSTepLocTab} className={styles.pre} >Prev</div>
      <div
        style={{
          position: "absolute",
          top: "95px",
          left: "640px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "60px",
          height: "16px",
        }}
      >
        1 of 4
      </div>
      <div
        style={{
          position: "absolute",
          top: "189px",
          left: "201px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "185px",
        }}
      >
        Pre production date
      </div>
      <div
        style={{
          position: "absolute",
          top: "323px",
          left: "202px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
        }}
      >
        Pre production month
      </div>
      <div
        style={{
          position: "absolute",
          top: "207px",
          left: "calc(50% - 170px)",
          width: "336px",
          height: "102px",
          fontSize: "12px",
          color: "#d50000",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "74.51%",
            left: "3.66%",
            letterSpacing: "-0.02em",
            lineHeight: "26px",
            fontWeight: "600",
            display: "none",
          }}
        >
          *error
        </div>
        <div
          style={{
            position: "absolute",
            height: "25.49%",
            width: "49.14%",
            top: "0%",
            left: "0.86%",
            letterSpacing: "-0.02em",
            lineHeight: "26px",
            fontWeight: "600",
            color: "#a2a2a2",
            textAlign: "left",
            display: "none",
          }}
        >
          Label
        </div>
        <div
          style={{
            position: "absolute",
            height: "49.02%",
            width: "100%",
            top: "25.49%",
            right: "0%",
            bottom: "25.49%",
            left: "0%",
            borderRadius: "8px",
            backgroundColor: "#fff",
            border: "1px solid #000",
            boxSizing: "border-box",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "calc(50% - 14px)",
            left: "20px",
            width: "166px",
            height: "26px",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "flex-start",
            gap: "12px",
            fontSize: "14px",
            color: "#949494",
            fontFamily: "Inter",
          }}
        >
          <img
            style={{
              width: "24px",
              position: "relative",
              height: "24px",
              overflow: "hidden",
              flexShrink: "0",
              display: "none",
            }}
            alt=""
            src="/mail-outline.svg"
          />
          <div
            style={{
              position: "relative",
              letterSpacing: "-0.02em",
              lineHeight: "26px",
            }}
          >
            DD/MM/YYYY
          </div>
        </div>
        <img
          style={{
            position: "absolute",
            top: "calc(50% - 12px)",
            right: "13px",
            width: "24px",
            height: "24px",
            overflow: "hidden",
          }}
          alt=""
          src="/calender-today.svg"
        />
        <div
          style={{
            position: "absolute",
            height: "calc(100% - 51px)",
            top: "25.5px",
            right: "45.5px",
            bottom: "25.5px",
            borderRight: "1px solid #000",
            boxSizing: "border-box",
            width: "1px",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "341px",
          left: "calc(50% - 170px)",
          width: "331px",
          height: "102px",
          fontSize: "12px",
          color: "#d50000",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "74.51%",
            left: "3.41%",
            letterSpacing: "-0.02em",
            lineHeight: "26px",
            fontWeight: "600",
            display: "none",
          }}
        >
          *error
        </div>
        <div
          style={{
            position: "absolute",
            height: "25.49%",
            width: "49.12%",
            top: "0%",
            left: "0.88%",
            letterSpacing: "-0.02em",
            lineHeight: "26px",
            fontWeight: "600",
            color: "#a2a2a2",
            textAlign: "left",
            display: "none",
          }}
        >
          Label
        </div>
        <div
          style={{
            position: "absolute",
            height: "49.02%",
            width: "100%",
            top: "25.49%",
            right: "0%",
            bottom: "25.49%",
            left: "0%",
            borderRadius: "8px",
            backgroundColor: "#fff",
            border: "1px solid #000",
            boxSizing: "border-box",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "calc(50% - 14px)",
            left: "20px",
            width: "166px",
            height: "26px",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "flex-start",
            gap: "12px",
            fontSize: "14px",
            color: "#949494",
            fontFamily: "Inter",
          }}
        >
          <img
            style={{
              width: "24px",
              position: "relative",
              height: "24px",
              overflow: "hidden",
              flexShrink: "0",
              display: "none",
            }}
            alt=""
            src="/mail-outline.svg"
          />
          <div
            style={{
              position: "relative",
              letterSpacing: "-0.02em",
              lineHeight: "26px",
            }}
          >
            January
          </div>
        </div>
        <img
          style={{
            position: "absolute",
            top: "calc(50% - 12px)",
            right: "13px",
            width: "24px",
            height: "24px",
            overflow: "hidden",
          }}
          alt=""
          src="/date-range.svg"
        />
        <div
          style={{
            position: "absolute",
            height: "calc(100% - 51px)",
            top: "25.5px",
            right: "45.5px",
            bottom: "25.5px",
            borderRight: "1px solid #000",
            boxSizing: "border-box",
            width: "1px",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "472px",
          left: "202px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
        }}
      >
        Primary crop
      </div>
      <div
        style={{
          position: "absolute",
          top: "490px",
          left: "calc(50% - 170px)",
          width: "345px",
          height: "102px",
          fontSize: "12px",
          color: "#d50000",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "74.51%",
            left: "3.91%",
            letterSpacing: "-0.02em",
            lineHeight: "26px",
            fontWeight: "600",
            display: "none",
          }}
        >
          *error
        </div>
        <div
          style={{
            position: "absolute",
            height: "25.49%",
            width: "49.13%",
            top: "0%",
            left: "0.87%",
            letterSpacing: "-0.02em",
            lineHeight: "26px",
            fontWeight: "600",
            color: "#a2a2a2",
            textAlign: "left",
            display: "none",
          }}
        >
          Label
        </div>
        <div
          style={{
            position: "absolute",
            height: "49.02%",
            width: "100%",
            top: "25.49%",
            right: "0%",
            bottom: "25.49%",
            left: "0%",
            borderRadius: "8px",
            backgroundColor: "#fff",
            border: "1px solid #000",
            boxSizing: "border-box",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "calc(50% - 14px)",
            left: "20px",
            width: "166px",
            height: "26px",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "flex-start",
            gap: "12px",
            fontSize: "14px",
            color: "#949494",
            fontFamily: "Inter",
          }}
        >
          <img
            style={{
              width: "24px",
              position: "relative",
              height: "24px",
              overflow: "hidden",
              flexShrink: "0",
              display: "none",
            }}
            alt=""
            src="/mail-outline.svg"
          />
          <div
            style={{
              position: "relative",
              letterSpacing: "-0.02em",
              lineHeight: "26px",
            }}
          >
            Paddy
          </div>
        </div>
        <img
          style={{
            position: "absolute",
            top: "calc(50% - 12px)",
            right: "13px",
            width: "24px",
            height: "24px",
            overflow: "hidden",
          }}
          alt=""
          src="/add.svg"
        />
        <div
          style={{
            position: "absolute",
            height: "calc(100% - 51px)",
            top: "25.5px",
            right: "45.5px",
            bottom: "25.5px",
            borderRight: "1px solid #000",
            boxSizing: "border-box",
            width: "1px",
            display: "none",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "598px",
          left: "202px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
        }}
      >
        Secondary crop
      </div>
      <div
        style={{
          position: "absolute",
          top: "616px",
          left: "calc(50% - 170px)",
          borderRadius: "8px",
          width: "336px",
          height: "102px",
          fontSize: "12px",
          color: "#d50000",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "74.51%",
            left: "3.66%",
            letterSpacing: "-0.02em",
            lineHeight: "26px",
            fontWeight: "600",
            display: "none",
          }}
        >
          *error
        </div>
        <div
          style={{
            position: "absolute",
            height: "25.49%",
            width: "49.14%",
            top: "0%",
            left: "0.86%",
            letterSpacing: "-0.02em",
            lineHeight: "26px",
            fontWeight: "600",
            color: "#a2a2a2",
            textAlign: "left",
            display: "none",
          }}
        >
          Label
        </div>
        <div
          style={{
            position: "absolute",
            height: "49.02%",
            width: "100%",
            top: "25.49%",
            right: "0%",
            bottom: "25.49%",
            left: "0%",
            borderRadius: "8px",
            backgroundColor: "#fff",
            border: "1px solid #000",
            boxSizing: "border-box",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "calc(50% - 14px)",
            left: "20px",
            width: "166px",
            height: "26px",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "flex-start",
            gap: "12px",
            fontSize: "14px",
            color: "#949494",
            fontFamily: "Inter",
          }}
        >
          <img
            style={{
              width: "24px",
              position: "relative",
              height: "24px",
              overflow: "hidden",
              flexShrink: "0",
              display: "none",
            }}
            alt=""
            src="/mail-outline.svg"
          />
          <div
            style={{
              width: "101px",
              position: "relative",
              letterSpacing: "-0.02em",
              lineHeight: "26px",
              display: "none",
            }}
          >
            raki@gmail.com
          </div>
        </div>
        <img
          style={{
            position: "absolute",
            top: "calc(50% - 12px)",
            right: "13px",
            width: "24px",
            height: "24px",
            overflow: "hidden",
          }}
          alt=""
          src="/add.svg"
        />
        <div
          style={{
            position: "absolute",
            height: "calc(100% - 51px)",
            top: "25.5px",
            right: "45.5px",
            bottom: "25.5px",
            borderRight: "1px solid #000",
            boxSizing: "border-box",
            width: "1px",
            display: "none",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          height: "3.18%",
          width: "13.84%",
          top: "57.28%",
          right: "56.32%",
          bottom: "39.54%",
          left: "29.84%",
          overflow: "hidden",
          textAlign: "left",
          fontSize: "12px",
          fontFamily: "Inter",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            borderRadius: "8px",
            backgroundColor: "#d9d9d9",
            width: "103px",
            height: "36px",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "calc(100% - 65px)",
            top: "calc(50% - 11px)",
            left: "24px",
            letterSpacing: "-0.02em",
            lineHeight: "26px",
            display: "inline-block",
            height: "26px",
          }}
        >
          Paddy
        </div>
        <img
          style={{
            position: "absolute",
            height: "80.83%",
            width: "28.25%",
            top: "9.72%",
            right: "5.92%",
            bottom: "9.44%",
            left: "65.83%",
            maxWidth: "100%",
            overflow: "hidden",
            maxHeight: "100%",
            objectFit: "contain",
          }}
          alt=""
          src="/plus@2x.png"
        />
      </div>
      <div
        style={{
          position: "absolute",
          height: "3.18%",
          width: "13.84%",
          top: "57.28%",
          right: "41.26%",
          bottom: "39.54%",
          left: "44.89%",
          overflow: "hidden",
          textAlign: "left",
          fontSize: "12px",
          fontFamily: "Inter",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            borderRadius: "8px",
            backgroundColor: "#d9d9d9",
            width: "103px",
            height: "36px",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "calc(100% - 65px)",
            top: "calc(50% - 11px)",
            left: "24px",
            letterSpacing: "-0.02em",
            lineHeight: "26px",
            display: "inline-block",
            height: "26px",
          }}
        >
          Wheat
        </div>
        <img
          style={{
            position: "absolute",
            height: "80.83%",
            width: "28.25%",
            top: "9.72%",
            right: "5.92%",
            bottom: "9.44%",
            left: "65.83%",
            maxWidth: "100%",
            overflow: "hidden",
            maxHeight: "100%",
            objectFit: "contain",
          }}
          alt=""
          src="/plus@2x.png"
        />
      </div>
    </div>
)}
{showInvst1 && (
  <div
      style={{
        width: "100%",
        position: "relative",
        backgroundColor: "#fff",
        height: "1133px",
        overflow: "hidden",
        textAlign: "center",
        fontSize: "16px",
        color: "#000",
        fontFamily: "Poppins",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "68.5px",
          left: "-0.5px",
          borderTop: "1px solid #000",
          boxSizing: "border-box",
          width: "745px",
          height: "1px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "193px",
          left: "199px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
        }}
      >
        {" "}
        Investment
      </div>
      <div
        style={{
          position: "absolute",
          top: "24px",
          left: "28px",
          fontSize: "24px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
        }}
      >
        Logo
      </div>
      <div
        style={{
          position: "absolute",
          top: "24px",
          left: "146px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
          textAlign: "left",
        }}
      >
        Personal information
      </div>
      <div
        style={{
          position: "absolute",
          top: "24px",
          left: "369px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
          color: "#1b5bff",
          textAlign: "left",
        }}
      >
        Agriculture information
      </div>
      <img
        style={{
          position: "absolute",
          top: "31px",
          left: "347px",
          width: "12px",
          height: "12px",
          objectFit: "cover",
        }}
        alt=""
        src="/right-arrow@2x.png"
      />
      <div
        style={{
          position: "absolute",
          top: "125px",
          left: "calc(50% - 99px)",
          fontSize: "24px",
          fontWeight: "600",
          fontFamily: "'Noto Sans'",
          textAlign: "left",
        }}
      >
        Farm information
      </div>
      
      <NextStepButton onClick={onNextSTepInvst2}/>
     {/* prev */}<div onClick={onNextStepCCTab} className={styles.pre} >Prev</div>
      <div
        style={{
          position: "absolute",
          top: "232px",
          left: "199px",
          borderRadius: "8px",
          backgroundColor: "#d9d9d9",
          border: "1px solid #000",
          boxSizing: "border-box",
          width: "345px",
          height: "48px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "244px",
          left: "267px",
          letterSpacing: "-0.02em",
          lineHeight: "24px",
          fontWeight: "600",
          display: "inline-block",
          width: "167px",
        }}
      >
        Yearly investment
      </div>
      <div
        style={{
          position: "absolute",
          top: "95px",
          left: "640px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "60px",
          height: "16px",
        }}
      >
        1 of 4
      </div>
      <div
        style={{
          position: "absolute",
          top: "301px",
          left: "201px",
          width: "342px",
          height: "48px",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0%",
            right: "0%",
            bottom: "0%",
            left: "0%",
            borderRadius: "8px",
            backgroundColor: "#d9d9d9",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "calc(100% - 134px)",
            top: "calc(50% - 12px)",
            left: "48px",
            letterSpacing: "-0.02em",
            lineHeight: "24px",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "24px",
          }}
          onClick={() => handleSoilTypeSelect("100000-200000")}
        >
          100000-200000
          {selectedSoilType === "100000-200000" && (
            <img
              className={styles.checkCircleIcon}
              alt=""
              src="/check-circle.svg"
            />
          )}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "364px",
          left: "201px",
          width: "342px",
          height: "48px",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0%",
            right: "0%",
            bottom: "0%",
            left: "0%",
            borderRadius: "8px",
            backgroundColor: "#d9d9d9",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "calc(100% - 134px)",
            top: "calc(50% - 12px)",
            left: "48px",
            letterSpacing: "-0.02em",
            lineHeight: "24px",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "24px",
          }}
          onClick={() => handleSoilTypeSelect("200000-300000")}
        >
          200000-300000
          {selectedSoilType === "200000-300000" && (
            <img
              className={styles.checkCircleIcon}
              alt=""
              src="/check-circle.svg"
            />
          )}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "425px",
          left: "200px",
          borderRadius: "8px",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          
          boxSizing: "border-box",
          width: "346px",
          height: "52px",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0%",
            right: "0%",
            bottom: "0%",
            left: "0%",
            borderRadius: "8px",
            backgroundColor: "#d9d9d9",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "calc(100% - 134px)",
            top: "calc(50% - 12px)",
            left: "48px",
            letterSpacing: "-0.02em",
            lineHeight: "24px",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "24px",
          }}
          onClick={() => handleSoilTypeSelect("300000-400000")}
        >
          300000-400000
          {selectedSoilType === "300000-400000" && (
            <img
              className={styles.checkCircleIcon}
              alt=""
              src="/check-circle.svg"
            />
          )}
        </div>
        
      </div>
      <div
        style={{
          position: "absolute",
          top: "501px",
          left: "202px",
          width: "342px",
          height: "48px",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0%",
            right: "0%",
            bottom: "0%",
            left: "0%",
            borderRadius: "8px",
            backgroundColor: "#d9d9d9",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "calc(100% - 134px)",
            top: "calc(50% - 12px)",
            left: "48px",
            letterSpacing: "-0.02em",
            lineHeight: "24px",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "24px",
          }}
          onClick={() => handleSoilTypeSelect("400000-500000")}
        >
          400000-500000
          {selectedSoilType === "400000-500000" && (
            <img
              className={styles.checkCircleIcon}
              alt=""
              src="/check-circle.svg"
            />
          )}
        </div>
      </div>
    </div>
)}
{showInvst2&& (
  <div
      style={{
        width: "100%",
        position: "relative",
        backgroundColor: "#fff",
        height: "1133px",
        overflow: "hidden",
        textAlign: "center",
        fontSize: "16px",
        color: "#000",
        fontFamily: "Poppins",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "68.5px",
          left: "-0.5px",
          borderTop: "1px solid #000",
          boxSizing: "border-box",
          width: "745px",
          height: "1px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "24px",
          left: "28px",
          fontSize: "24px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
        }}
      >
        Logo
      </div>
      <div
        style={{
          position: "absolute",
          top: "24px",
          left: "146px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
          textAlign: "left",
        }}
      >
        Personal information
      </div>
      <div
        style={{
          position: "absolute",
          top: "24px",
          left: "369px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
          color: "#1b5bff",
          textAlign: "left",
        }}
      >
        Agriculture information
      </div>
      <img
        style={{
          position: "absolute",
          top: "31px",
          left: "347px",
          width: "12px",
          height: "12px",
          objectFit: "cover",
        }}
        alt=""
        src="/right-arrow@2x.png"
      />
      <div
        style={{
          position: "absolute",
          top: "125px",
          left: "273px",
          fontSize: "24px",
          fontWeight: "600",
          fontFamily: "'Noto Sans'",
          textAlign: "left",
        }}
      >
        Farm information
      </div>
      <NextStepButton onClick={onNextSstepClickLast}/>
     {/* prev */}<div onClick={onNextSTepInvst1} className={styles.pre} >Prev</div>
      <div
        style={{
          position: "absolute",
          top: "95px",
          left: "640px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "60px",
          height: "16px",
        }}
      >
        1 of 4
      </div>
      <div
        style={{
          position: "absolute",
          top: "193px",
          left: "199px",
          width: "156px",
          height: "24px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            letterSpacing: "1px",
            lineHeight: "24px",
            fontWeight: "600",
            whiteSpace: "nowrap",
          }}
        >
          Storage capacity
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "243px",
          left: "199px",
          borderRadius: "8px",
          backgroundColor: "#d9d9d9",
          border: "1px solid #000",
          boxSizing: "border-box",
          width: "345px",
          height: "48px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "255px",
          left: "255px",
          letterSpacing: "-0.02em",
          lineHeight: "24px",
          fontWeight: "600",
        }}
      >
        what is the storage capacity?
      </div>
      <div
        style={{
          position: "absolute",
          top: "317px",
          left: "202px",
          width: "342px",
          height: "48px",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0%",
            right: "0%",
            bottom: "0%",
            left: "0%",
            borderRadius: "8px",
            backgroundColor: "#d9d9d9",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "calc(100% - 134px)",
            top: "calc(50% - 12px)",
            left: "48px",
            letterSpacing: "-0.02em",
            lineHeight: "24px",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "24px",
          }}
          onClick={() => handleSoilTypeSelect("100-200 sqft")}
        >
          100-200 sqft
          {selectedSoilType === "100-200 sqft" && (
            <img
              className={styles.checkCircleIcon}
              alt=""
              src="/check-circle.svg"
            />
          )}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "377px",
          left: "200px",
          borderRadius: "8px",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          
          boxSizing: "border-box",
          width: "346px",
          height: "52px",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0%",
            right: "0%",
            bottom: "0%",
            left: "0%",
            borderRadius: "8px",
            backgroundColor: "#d9d9d9",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "calc(100% - 134px)",
            top: "calc(50% - 12px)",
            left: "48px",
            letterSpacing: "-0.02em",
            lineHeight: "24px",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "24px",
          }}
          onClick={() => handleSoilTypeSelect("200-400 sqft")}
        >
          200-400 sqft
          {selectedSoilType === "200-400 sqft" && (
            <img
              className={styles.checkCircleIcon}
              alt=""
              src="/check-circle.svg"
            />
          )}
        </div>
        
      </div>
      <div
        style={{
          position: "absolute",
          top: "443px",
          left: "202px",
          width: "342px",
          height: "48px",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0%",
            right: "0%",
            bottom: "0%",
            left: "0%",
            borderRadius: "8px",
            backgroundColor: "#d9d9d9",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "calc(100% - 134px)",
            top: "calc(50% - 12px)",
            left: "48px",
            letterSpacing: "-0.02em",
            lineHeight: "24px",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "24px",
          }}
          onClick={() => handleSoilTypeSelect("400-600 sqft")}
        >
          400-600 sqft
          {selectedSoilType === "400-600 sqft" && (
            <img
              className={styles.checkCircleIcon}
              alt=""
              src="/check-circle.svg"
            />
          )}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "507px",
          left: "202px",
          width: "342px",
          height: "48px",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0%",
            right: "0%",
            bottom: "0%",
            left: "0%",
            borderRadius: "8px",
            backgroundColor: "#d9d9d9",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "calc(100% - 134px)",
            top: "calc(50% - 12px)",
            left: "48px",
            letterSpacing: "-0.02em",
            lineHeight: "24px",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "24px",
          }}
          onClick={() => handleSoilTypeSelect("600-800 sqft")}
        >
          600-800 sqft
          {selectedSoilType === "600-800 sqft" && (
            <img
              className={styles.checkCircleIcon}
              alt=""
              src="/check-circle.svg"
            />
          )}
        </div>
      </div>
    </div>
)}

{showCLTab && (
  <div
      style={{
        width: "100%",
        position: "relative",
        backgroundColor: "#fff",
        height: "1133px",
        overflow: "hidden",
        textAlign: "left",
        fontSize: "16px",
        color: "#000",
        fontFamily: "Poppins",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "68.5px",
          left: "-0.5px",
          borderTop: "1px solid #000",
          boxSizing: "border-box",
          width: "745px",
          height: "1px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "24px",
          left: "28px",
          fontSize: "24px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
          textAlign: "center",
        }}
      >
        Logo
      </div>
      <div
        style={{
          position: "absolute",
          top: "24px",
          left: "146px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
          color: "#1b5bff",
        }}
      >
        Personal information
      </div>
      <div
        style={{
          position: "absolute",
          top: "24px",
          left: "369px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
        }}
      >
        Agriculture information
      </div>
      <img
        style={{
          position: "absolute",
          top: "31px",
          left: "347px",
          width: "12px",
          height: "12px",
          objectFit: "cover",
        }}
        alt=""
        src="/right-arrow@2x.png"
      />
      <div
        style={{
          position: "absolute",
          top: "138px",
          left: "199px",
          fontWeight: "600",
          fontFamily: "'Noto Sans'",
          
        }}
      >
        Contact information
      </div>
      <div
        style={{
          position: "absolute",
          top: "512px",
          left: "199px",
          fontWeight: "600",
          fontFamily: "'Noto Sans'",
        }}
      >
        Location information
      </div>
      <div
        style={{
          position: "absolute",
          top: "184px",
          left: "199px",
          width: "345px",
          height: "102px",
          textAlign: "center",
          fontSize: "12px",
          color: "#d50000",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "74.51%",
            left: "3.91%",
            letterSpacing: "-0.02em",
            lineHeight: "26px",
            fontWeight: "600",
            display: "none",
          }}
        >
          *error
        </div>
        <div
          style={{
            position: "absolute",
            height: "25.49%",
            width: "49.13%",
            top: "0%",
            left: "0.87%",
            letterSpacing: "-0.02em",
            lineHeight: "26px",
            fontWeight: "600",
            color: "#a2a2a2",
            textAlign: "left",
            display: "inline-block",
          }}
        >
          Email
        </div>
        <div
          style={{
            position: "absolute",
            height: "49.02%",
            width: "100%",
            top: "25.49%",
            right: "0%",
            bottom: "25.49%",
            left: "0%",
            borderRadius: "8px",
            backgroundColor: "#fff",
            border: "1px solid #000",
            boxSizing: "border-box",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "calc(50% - 14px)",
            left: "20px",
            width: "166px",
            height: "26px",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "flex-start",
            gap: "12px",
            fontSize: "14px",
            color: "#949494",
            fontFamily: "Inter",
          }}
        >
          <img
            style={{
              width: "24px",
              position: "relative",
              height: "24px",
              overflow: "hidden",
              flexShrink: "0",
            }}
            alt=""
            src="/mail-outline.svg"
          />
          <input
        type="email"
        placeholder=" Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          position: "absolute",
          top: "calc(50% - 14px)",
          left: "34px",
          width: "166px",
          height: "26px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "flex-start",
          gap: "12px",
          fontSize: "14px",
          color: "#949494",
          fontFamily: "Inter",
          border:"none",
        }}
      />
        </div>
        <img
          style={{
            position: "absolute",
            top: "calc(50% - 12px)",
            right: "13px",
            width: "24px",
            height: "24px",
            overflow: "hidden",
            display: "none",
          }}
          alt=""
          src="/add.svg"
        />
        <div
          style={{
            position: "absolute",
            height: "calc(100% - 51px)",
            top: "25.5px",
            right: "45.5px",
            bottom: "25.5px",
            borderRight: "1px solid #000",
            boxSizing: "border-box",
            width: "1px",
            display: "none",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "286px",
          left: "199px",
          width: "345px",
          height: "102px",
          textAlign: "center",
          fontSize: "12px",
          color: "#d50000",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "74.51%",
            left: "3.91%",
            letterSpacing: "-0.02em",
            lineHeight: "26px",
            fontWeight: "600",
            display: "none",
          }}
        >
          *error
        </div>
        <div
          style={{
            position: "absolute",
            height: "25.49%",
            width: "49.13%",
            top: "0%",
            left: "0.87%",
            letterSpacing: "-0.02em",
            lineHeight: "26px",
            fontWeight: "600",
            color: "#a2a2a2",
            textAlign: "left",
            display: "inline-block",
          }}
        >
          Mobile number
        </div>
        <div
          style={{
            position: "absolute",
            height: "49.02%",
            width: "100%",
            top: "25.49%",
            right: "0%",
            bottom: "25.49%",
            left: "0%",
            borderRadius: "8px",
            backgroundColor: "#fff",
            border: "1px solid #000",
            boxSizing: "border-box",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "calc(50% - 14px)",
            left: "20px",
            width: "166px",
            height: "26px",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "flex-start",
            gap: "12px",
            fontSize: "14px",
            color: "#949494",
            fontFamily: "Inter",
          }}
        >
          <img
            style={{
              width: "24px",
              position: "relative",
              height: "24px",
              overflow: "hidden",
              flexShrink: "0",
            }}
            alt=""
            src="/phone.svg"
          />
          <input
        type="tel"
        placeholder="Mobile Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        style={{
          position: "absolute",
          top: "calc(50% - 14px)",
          left: "34px",
          width: "166px",
          height: "26px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "flex-start",
          gap: "12px",
          fontSize: "14px",
          color: "#949494",
          fontFamily: "Inter",
          border:"none",
        }}
      />
        </div>
        <img
          style={{
            position: "absolute",
            top: "calc(50% - 12px)",
            right: "13px",
            width: "24px",
            height: "24px",
            overflow: "hidden",
            display: "none",
          }}
          alt=""
          src="/add.svg"
        />
        <div
          style={{
            position: "absolute",
            height: "calc(100% - 51px)",
            top: "25.5px",
            right: "45.5px",
            bottom: "25.5px",
            borderRight: "1px solid #000",
            boxSizing: "border-box",
            width: "1px",
            display: "none",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "388px",
          left: "199px",
          width: "345px",
          height: "102px",
          textAlign: "center",
          fontSize: "12px",
          color: "#d50000",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "74.51%",
            left: "3.91%",
            letterSpacing: "-0.02em",
            lineHeight: "26px",
            fontWeight: "600",
            display: "none",
          }}
        >
          *error
        </div>
        <div
          style={{
            position: "absolute",
            height: "25.49%",
            width: "49.13%",
            top: "0%",
            left: "0.87%",
            letterSpacing: "-0.02em",
            lineHeight: "26px",
            fontWeight: "600",
            color: "#a2a2a2",
            textAlign: "left",
            display: "inline-block",
          }}
        >
          Location
        </div>
        <div
          style={{
            position: "absolute",
            height: "49.02%",
            width: "100%",
            top: "25.49%",
            right: "0%",
            bottom: "25.49%",
            left: "0%",
            borderRadius: "8px",
            backgroundColor: "#fff",
            border: "1px solid #000",
            boxSizing: "border-box",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "calc(50% - 14px)",
            left: "20px",
            width: "166px",
            height: "26px",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "flex-start",
            gap: "12px",
            fontSize: "14px",
            color: "#949494",
            fontFamily: "Inter",
          }}
        >
          <img
            style={{
              width: "24px",
              position: "relative",
              height: "24px",
              overflow: "hidden",
              flexShrink: "0",
            }}
            alt=""
            src="/location-on.svg"
          />
          <input
        type="text"
        placeholder="Enter Location"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        style={{
          position: "absolute",
          top: "calc(50% - 14px)",
          left: "34px",
          width: "166px",
          height: "26px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "flex-start",
          gap: "12px",
          fontSize: "14px",
          color: "#949494",
          fontFamily: "Inter",
          border:"none",
        }}
      />
        </div>
        <img
          style={{
            position: "absolute",
            top: "calc(50% - 12px)",
            right: "13px",
            width: "24px",
            height: "24px",
            overflow: "hidden",
            display: "none",
          }}
          alt=""
          src="/add.svg"
        />
        <div
          style={{
            position: "absolute",
            height: "calc(100% - 51px)",
            top: "25.5px",
            right: "45.5px",
            bottom: "25.5px",
            borderRight: "1px solid #000",
            boxSizing: "border-box",
            width: "1px",
            display: "none",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "558px",
          left: "199px",
          width: "345px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "8px",
          fontSize: "12px",
          color: "#666",
          fontFamily: "'Noto Sans'",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            position: "relative",
            lineHeight: "18px",
            fontWeight: "600",
          }}
        >
          State
        </div>
        <div
          style={{
            alignSelf: "stretch",
            borderRadius: "8px",
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            boxSizing: "border-box",
            height: "46px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px",
            fontSize: "16px",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "8px",
            }}
          >
            <select
  defaultValue="default"
  style={{
    width: "254px",
    borderRadius: "8px",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    boxSizing: "border-box",
    height: "45px",
    padding: "12px",
    fontSize: "16px",
    border:"none",
  }}
>
  <option value="default" disabled hidden>
    Dropdown option
  </option>
  <option value="A">A</option>
  <option value="B">B</option>
  <option value="C">C</option>
</select>
            
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "653px",
          left: "199px",
          width: "345px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "8px",
          fontSize: "12px",
          color: "#666",
          fontFamily: "'Noto Sans'",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            position: "relative",
            lineHeight: "18px",
            fontWeight: "600",
          }}
        >
          Mandal
        </div>
        <div
          style={{
            alignSelf: "stretch",
            borderRadius: "8px",
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            boxSizing: "border-box",
            height: "46px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px",
            fontSize: "16px",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "8px",
            }}
          >
             <select
  defaultValue="default"
  style={{
    width: "254px",
    borderRadius: "8px",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    boxSizing: "border-box",
    height: "44px",
    padding: "12px",
    fontSize: "16px",
    border:"none",
  }}
>
  <option value="default" disabled hidden>
    Dropdown option
  </option>
  <option value="A">A</option>
  <option value="B">B</option>
  <option value="C">C</option>
</select>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "748px",
          left: "199px",
          width: "199px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "8px",
          fontSize: "12px",
          color: "#666",
          fontFamily: "'Noto Sans'",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            position: "relative",
            lineHeight: "18px",
            fontWeight: "600",
          }}
        >
          District
        </div>
        <div
          style={{
            alignSelf: "stretch",
            borderRadius: "8px",
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            boxSizing: "border-box",
            height: "46px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px",
            fontSize: "16px",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "8px",
            }}
          >
             <select
  defaultValue="default"
  style={{
    width: "254px",
    borderRadius: "8px",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    boxSizing: "border-box",
    height: "44px",
    padding: "12px",
    fontSize: "16px",
    border:"none",
  }}
>
  <option value="default" disabled hidden>
    option
  </option>
  <option value="A">A</option>
  <option value="B">B</option>
  <option value="C">C</option>
</select>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "739px",
          left: "450px",
          width: "90px",
          height: "80px",
          fontSize: "14px",
          color: "#6d7280",
          fontFamily: "Inter",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "95%",
            width: "100%",
            top: "2.5%",
            right: "0%",
            bottom: "2.5%",
            left: "0%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "6px",
          }}
        >
          <div
            style={{
              position: "relative",
              letterSpacing: "-0.02em",
              lineHeight: "20px",
              fontWeight: "500",
            }}
          >
            Pincode
          </div>
          <div
            style={{
              width: "90px",
              borderRadius: "8px",
              backgroundColor: "#f9fafb",
              border: "1px solid #d2d5da",
              boxSizing: "border-box",
              height: "50px",
              overflow: "hidden",
              flexShrink: "0",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              padding: "0px 12px",
              fontSize: "16px",
            }}
          >
            <input
        type="text"
        placeholder="Pincode"
        value={pincode}
        onChange={(e) => setPincode(e.target.value)}
        style={{
          width: "90px",
          borderRadius: "8px",
          backgroundColor: "#f9fafb",
          border: "1px solid #d2d5da",
          boxSizing: "border-box",
          height: "50px",
          overflow: "hidden",
          fontSize: "16px",
          padding: "0px 1px",
          border:"none",
        }}
      />
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "909px",
          left: "calc(50% - 173px)",
          borderRadius: "8px",
          backgroundColor: "#02044a",
          width: "345px",
          height: "49px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "924px",
          left: "340px",
          fontSize: "14px",
          letterSpacing: "-0.02em",
          lineHeight: "20px",
          fontWeight: "500",
          fontFamily: "Inter",
          color: "#fff",
        }}
         onClick={onNextSstepClickMID}
      >
        Next step
      </div>
      <div
        style={{
          position: "absolute",
          top: "986px",
          
          left: "358px",
          letterSpacing: "-0.02em",
          lineHeight: "20px",
          fontWeight: "500",
          fontFamily: "Inter",
        }}
        onClick={onNextStepClick}
      >
        Prev
      </div>
      {/* <div
        style={{
          position: "absolute",
          top: "705px",
          
          letterSpacing: "-0.02em",
          lineHeight: "20px",
          fontWeight: "500",
          fontFamily: "Inter",
          textAlign: "left",
          cursor: "pointer",
        }}
        onClick={onNextStepLSMob2}
      >
        Prev
      </div> */}
      <div
        style={{
          position: "absolute",
          top: "95px",
          left: "640px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "60px",
          height: "16px",
        }}
      >
        1 of 2
      </div>
    </div>
)}

{showNFMob1 && (
  <div
      style={{
        width: "100%",
        position: "relative",
        backgroundColor: "#fff",
        height: "844px",
        overflow: "hidden",
        textAlign: "center",
        fontSize: "16px",
        color: "#000",
        fontFamily: "Poppins",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "206px",
          left: "35px",
          width: "320px",
          height: "400px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            borderRadius: "16px",
            backgroundColor: "#7b7b7b",
            width: "320px",
            height: "400px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "35px",
            left: "calc(50% - 125px)",
            width: "252px",
            height: "302px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "60px",
              left: "calc(50% - 126px)",
              borderRadius: "16px",
              backgroundColor: "#d9d9d9",
              width: "252px",
              height: "242px",
              cursor: "pointer",
            }}
            onClick={onRectangleContainer1Click}
          />
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "5px",
              letterSpacing: "1px",
              lineHeight: "24px",
              fontWeight: "600",
            }}
          >
            Profile photo
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "98px",
          left: "49px",
          fontSize: "24px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
          textAlign: "left",
        }}
      >
        Personal information
      </div>
      <div
        style={{
          position: "absolute",
          top: "146px",
          left: "266px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "59px",
          height: "16px",
        }}
      >
        1 of 4
      </div>
      <div
        style={{
          position: "absolute",
          top: "705px",
          left: "178px",
          letterSpacing: "-0.02em",
          lineHeight: "20px",
          fontWeight: "500",
          fontFamily: "Inter",
          textAlign: "left",
          cursor: "pointer",
        }}
        onClick={onPrevStepClick}
      >
        Prev
      </div>
      <div
        style={{
          position: "absolute",
          top: "633px",
          left: "35px",
          borderRadius: "8px",
          backgroundColor: "#02044a",
          width: "320px",
          height: "50px",
          cursor: "pointer",
        }}
        onClick={onNextStepCLMob1}
      />
      <div
        style={{
          position: "absolute",
          top: "648px",
          left: "165px",
          fontSize: "14px",
          letterSpacing: "-0.02em",
          lineHeight: "20px",
          fontWeight: "500",
          fontFamily: "Inter",
          color: "#fff",
          textAlign: "left",
        }}
        onClick={onNextStepCLMob1}
      >
        Next step
      </div>
      
        <div
        style={{
          position: "absolute",
          top: "347px",
          left: "125px",
          borderRadius: "9999px",
          backgroundColor: "#477bff",
          width: "150px",
          height: "150px",
          fontSize: "12px",
          color: "#fff",
        }}
      >
       
        {selectedFile ? (
    <img
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        borderRadius: "9999px",
        objectFit: "cover",
      }}
      src={URL.createObjectURL(selectedFile)}
      alt="Selected Profile Pic"
    />
  ) : (
    // If no file is selected, display the "Add/upload a profile pic" text
    <div
      style={{
        position: "absolute",
        top: "calc(50% - 20px)",
        left: "calc(50% - 68.5px)",
        letterSpacing: "1px",
        lineHeight: "20px",
        fontWeight: "500",
      }}
    >
      {/* Single input element */}
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        id="fileInput"
        ref={fileInputRef}
        onChange={handleFileInputChanges}
      />
      
      {/* Single label associated with the input */}
      <label htmlFor="fileInput" style={{ cursor: "pointer" }}>Add/upload a profile pic</label>
    </div>
  )}
</div>

      
      <div
        style={{
          position: "absolute",
          top: "780px",
          left: "34px",
          width: "320px",
          height: "6px",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0%",
            right: "0%",
            bottom: "0%",
            left: "0%",
            borderRadius: "2px",
            backgroundColor: "#d9d9d9",
          }}
        />
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "25%",
            top: "0%",
            right: "75%",
            bottom: "0%",
            left: "0%",
            borderRadius: "2px",
            backgroundColor: "#1b5bff",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "35px",
          left: "35px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
        }}
      >
        Logo
      </div>
    </div>
)}
{showNFMob2 && (
  <div
      style={{
        width: "100%",
        position: "relative",
        backgroundColor: "#fff",
        height: "844px",
        overflow: "hidden",
        textAlign: "left",
        fontSize: "16px",
        color: "#000",
        fontFamily: "Poppins",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "98px",
          left: "49px",
          fontSize: "24px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
        }}
      >
        Personal information
      </div>
      <div
        style={{
          position: "absolute",
          top: "145px",
          left: "266px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "59px",
          height: "16px",
        }}
      >
        1 of 4
      </div>
      <div
        style={{
          position: "absolute",
          top: "206px",
          left: "35px",
          width: "320px",
          height: "400px",
          textAlign: "center",
          fontSize: "14px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            borderRadius: "16px",
            backgroundColor: "#d9d9d9",
            width: "320px",
            height: "400px",
          }}
        />
        <img
          style={{
            position: "absolute",
            top: "80px",
            left: "128px",
            borderRadius: "16px",
            width: "51.2px",
            height: "48px",
            overflow: "hidden",
          }}
          alt=""
          src="/cloudupload.svg"
        />
        <div
          style={{
            position: "absolute",
            top: "147px",
            left: "48px",
            fontSize: "20px",
            letterSpacing: "1px",
            lineHeight: "24px",
            fontWeight: "600",
            whiteSpace: "pre-wrap",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "235.7px",
            cursor: "pointer",
          }}
          onClick={onRectangleContainer1Click}
        >
          Drag and drop here
        </div>
        <div
          style={{
            position: "absolute",
            top: "194px",
            left: "141.9px",
            letterSpacing: "1px",
            lineHeight: "24px",
            fontWeight: "600",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "17.1px",
          }}
        >
          or
        </div>
        <div
          style={{
            position: "absolute",
            top: "241px",
            left: "77.9px",
            borderRadius: "16px",
            width: "153.6px",
            height: "48px",
            cursor: "pointer",
            textAlign: "left",
            color: "#fff",
            fontFamily: "Inter",
          }}
          onClick={onRectangleContainer1Click}
        >
          <img
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              top: "0%",
              right: "0%",
              bottom: "0%",
              left: "0%",
              borderRadius: "8px",
              maxWidth: "100%",
              overflow: "hidden",
              maxHeight: "100%",
            }}
            alt=""
            src="/rectangle-14.svg"
          />
          {/* Replace the existing code for the "Select file" div */}
<div
        style={{
          position: "absolute",
          top: "14px",
          left: "41px",
          letterSpacing: "-0.02em",
          lineHeight: "20px",
          fontWeight: "500",
          cursor: "pointer",
        }}
        onClick={handleSelectFile1}
      >
        Select file
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          className={styles.fileInput}
              ref={fileInputRef}
          onChange={handleFileInputChanges}
        />
      </div>

        </div>
      </div>
      
      <div
        style={{
          position: "absolute",
          top: "780px",
          left: "34px",
          width: "320px",
          height: "6px",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0%",
            right: "0%",
            bottom: "0%",
            left: "0%",
            borderRadius: "2px",
            backgroundColor: "#d9d9d9",
          }}
        />
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "25%",
            top: "0%",
            right: "75%",
            bottom: "0%",
            left: "0%",
            borderRadius: "2px",
            backgroundColor: "#1b5bff",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "35px",
          left: "35px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
          textAlign: "center",
        }}
      >
        Logo
      </div>
    </div>
)}
{showCLMob1 && (
  <div
      style={{
        width: "100%",
        position: "relative",
        backgroundColor: "#fff",
        height: "844px",
        overflow: "hidden",
        textAlign: "center",
        fontSize: "16px",
        color: "#000",
        fontFamily: "Poppins",
        minHeight: "100vh", // Ensure content fills the viewport height
        fontSize: "calc(0.7vw + 8px)", // Responsive font size
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "206px",
          left: "35px",
          width: "320px",
          height: "400px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            borderRadius: "16px",
            backgroundColor: "#dfdfdf",
            width: "320px",
            height: "400px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "35px",
            left: "43px",
            width: "185px",
            height: "24px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              letterSpacing: "1px",
              lineHeight: "24px",
              fontWeight: "600",
              whiteSpace:"nowrap",
            }}
          >
            Contact information
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "98px",
          left: "49px",
          fontSize: "24px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
          textAlign: "left",
        }}
      >
        Personal information
      </div>
      <div
        style={{
          position: "absolute",
          top: "136px",
          left: "263px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "59px",
          height: "16px",
        }}
      >
        3 of 4
      </div>
      <div
        style={{
          position: "absolute",
          top: "278px",
          left: "79px",
          width: "232px",
          height: "102px",
          fontSize: "12px",
          color: "#d50000",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "74.51%",
            left: "1.29%",
            letterSpacing: "-0.02em",
            lineHeight: "26px",
            fontWeight: "600",
            display: "none",
          }}
        >
          *error
        </div>
        <div
          style={{
            position: "absolute",
            height: "25.49%",
            width: "49.14%",
            top: "0%",
            left: "0.86%",
            letterSpacing: "-0.02em",
            lineHeight: "26px",
            fontWeight: "600",
            color: "#a2a2a2",
            textAlign: "left",
            display: "inline-block",
          }}
        >
          Email
        </div>
        <div
          style={{
            position: "absolute",
            height: "49.02%",
            width: "100%",
            top: "25.49%",
            right: "0%",
            bottom: "25.49%",
            left: "0%",
            borderRadius: "8px",
            backgroundColor: "#fff",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "calc(50% - 14px)",
            left: "20px",
            width: "166px",
            height: "26px",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "flex-start",
            gap: "12px",
            fontSize: "14px",
            color: "#949494",
            fontFamily: "Inter",
          }}
        >
          <img
            style={{
              width: "24px",
              position: "relative",
              height: "24px",
              overflow: "hidden",
              flexShrink: "0",
            }}
            alt=""
            src="/mail-outline.svg"
          />
          <input
        type="email"
        placeholder=" Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          position: "absolute",
          top: "calc(50% - 14px)",
          left: "22px",
          width: "166px",
          height: "26px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "flex-start",
          gap: "12px",
          fontSize: "14px",
          color: "#949494",
          fontFamily: "Inter",
          border:"none",
        }}
      />
        </div>
        <img
          style={{
            position: "absolute",
            top: "calc(50% - 12px)",
            right: "13px",
            width: "24px",
            height: "24px",
            overflow: "hidden",
            display: "none",
          }}
          alt=""
          src="/add.svg"
        />
        <div
          style={{
            position: "absolute",
            height: "calc(100% - 51px)",
            top: "25.5px",
            right: "45.5px",
            bottom: "25.5px",
            borderRight: "1px solid #000",
            boxSizing: "border-box",
            width: "1px",
            display: "none",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "382px",
          left: "79px",
          width: "232px",
          height: "102px",
          fontSize: "12px",
          color: "#d50000",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "74.51%",
            left: "1.29%",
            letterSpacing: "-0.02em",
            lineHeight: "26px",
            fontWeight: "600",
            display: "none",
          }}
        >
          *error
        </div>
        <div
          style={{
            position: "absolute",
            height: "25.49%",
            width: "49.14%",
            top: "0%",
            left: "0.86%",
            letterSpacing: "-0.02em",
            lineHeight: "26px",
            fontWeight: "600",
            color: "#a2a2a2",
            textAlign: "left",
            display: "inline-block",
          }}
        >
          Mobile Number
        </div>
        <div
          style={{
            position: "absolute",
            height: "49.02%",
            width: "100%",
            top: "25.49%",
            right: "0%",
            bottom: "25.49%",
            left: "0%",
            borderRadius: "8px",
            backgroundColor: "#fff",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "calc(50% - 14px)",
            left: "20px",
            width: "166px",
            height: "26px",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "flex-start",
            gap: "12px",
            fontSize: "14px",
            color: "#949494",
            fontFamily: "Inter",
          }}
        >
          <img
            style={{
              width: "24px",
              position: "relative",
              height: "24px",
              overflow: "hidden",
              flexShrink: "0",
            }}
            alt=""
            src="/phone.svg"
          />
          <input
        type="tel"
        placeholder="Mobile Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        style={{
          position: "absolute",
          top: "calc(50% - 14px)",
          left: "22px",
          width: "166px",
          height: "26px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "flex-start",
          gap: "12px",
          fontSize: "14px",
          color: "#949494",
          fontFamily: "Inter",
          border:"none",
        }}
      />

        </div>
        <img
          style={{
            position: "absolute",
            top: "calc(50% - 12px)",
            right: "13px",
            width: "24px",
            height: "24px",
            overflow: "hidden",
            display: "none",
          }}
          alt=""
          src="/add.svg"
        />
        <div
          style={{
            position: "absolute",
            height: "calc(100% - 51px)",
            top: "25.5px",
            right: "45.5px",
            bottom: "25.5px",
            borderRight: "1px solid #000",
            boxSizing: "border-box",
            width: "1px",
            display: "none",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "486px",
          left: "78px",
          width: "232px",
          height: "102px",
          fontSize: "12px",
          color: "#d50000",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "74.51%",
            left: "1.29%",
            letterSpacing: "-0.02em",
            lineHeight: "26px",
            fontWeight: "600",
            display: "none",
          }}
        >
          *error
        </div>
        <div
          style={{
            position: "absolute",
            height: "25.49%",
            width: "49.14%",
            top: "0%",
            left: "0.86%",
            letterSpacing: "-0.02em",
            lineHeight: "26px",
            fontWeight: "600",
            color: "#a2a2a2",
            textAlign: "left",
            display: "inline-block",
          }}
        >
          Location
        </div>
        <div
          style={{
            position: "absolute",
            height: "49.02%",
            width: "100%",
            top: "25.49%",
            right: "0%",
            bottom: "25.49%",
            left: "0%",
            borderRadius: "8px",
            backgroundColor: "#fff",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "calc(50% - 14px)",
            left: "20px",
            width: "166px",
            height: "26px",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "flex-start",
            gap: "12px",
            fontSize: "14px",
            color: "#949494",
            fontFamily: "Inter",
          }}
        >
          <img
            style={{
              width: "24px",
              position: "relative",
              height: "24px",
              overflow: "hidden",
              flexShrink: "0",
            }}
            alt=""
            src="/location-on.svg"
          />
          <input
        type="text"
        placeholder="Enter Location"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        style={{
          position: "absolute",
          top: "calc(50% - 14px)",
          left: "22px",
          width: "166px",
          height: "26px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "flex-start",
          gap: "12px",
          fontSize: "14px",
          color: "#949494",
          fontFamily: "Inter",
          border:"none",
        }}
      />
        </div>
        <img
          style={{
            position: "absolute",
            top: "calc(50% - 12px)",
            right: "13px",
            width: "24px",
            height: "24px",
            overflow: "hidden",
            display: "none",
          }}
          alt=""
          src="/add.svg"
        />
        <div
          style={{
            position: "absolute",
            height: "calc(100% - 51px)",
            top: "25.5px",
            right: "45.5px",
            bottom: "25.5px",
            borderRight: "1px solid #000",
            boxSizing: "border-box",
            width: "1px",
            display: "none",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "705px",
          left: "178px",
          letterSpacing: "-0.02em",
          lineHeight: "20px",
          fontWeight: "500",
          fontFamily: "Inter",
          textAlign: "left",
          cursor: "pointer",
          fontSize:"1rem",
        }}
        onClick={onNextStepNFMob1}
      >
        Prev
      </div>
      <div
        style={{
          position: "absolute",
          top: "633px",
          left: "35px",
          borderRadius: "8px",
          backgroundColor: "#02044a",
          width: "320px",
          height: "50px",
          cursor: "pointer",
        }}
        onClick={onNextStepCLMob2}
      />
      <div
        style={{
          position: "absolute",
          top: "648px",
          left: "165px",
          fontSize: "14px",
          letterSpacing: "-0.02em",
          lineHeight: "20px",
          fontWeight: "500",
          fontFamily: "Inter",
          color: "#fff",
          textAlign: "left",
        }}
      >
        Next step
      </div>
      <div
        style={{
          position: "absolute",
          top: "780px",
          left: "35px",
          width: "320px",
          height: "6px",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0%",
            right: "0%",
            bottom: "0%",
            left: "0%",
            borderRadius: "2px",
            backgroundColor: "#d9d9d9",
          }}
        />
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "75%",
            top: "0%",
            right: "25%",
            bottom: "0%",
            left: "0%",
            borderRadius: "2px",
            backgroundColor: "#1b5bff",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "35px",
          left: "35px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
        }}
      >
        Logo
      </div>
    </div>
)}
{showCLMob2 && (
  <div
      style={{
        width: "100%",
        position: "relative",
        backgroundColor: "#fff",
        height: "844px",
        overflow: "hidden",
        textAlign: "left",
        fontSize: "16px",
        color: "#000",
        fontFamily: "Poppins",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "206px",
          left: "35px",
          width: "320px",
          height: "400px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            borderRadius: "16px",
            backgroundColor: "#dfdfdf",
            width: "320px",
            height: "400px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "35px",
            left: "43px",
            width: "189px",
            height: "24px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              letterSpacing: "1px",
              lineHeight: "24px",
              fontWeight: "600",
              whiteSpace:"nowrap",
            }}
          >
            Location information
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "98px",
          left: "49px",
          fontSize: "24px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
        }}
      >
        Personal information
      </div>
      <div
        style={{
          position: "absolute",
          top: "136px",
          left: "263px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "59px",
          height: "16px",
        }}
      >
        4 of 4
      </div>
      <div
        style={{
          position: "absolute",
          top: "278px",
          left: "79px",
          width: "232px",
          height: "80px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "6px",
          fontSize: "12px",
          color: "#666",
          fontFamily: "'Noto Sans'",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            position: "relative",
            lineHeight: "18px",
            fontWeight: "600",
          }}
        >
          State
        </div>
        <div
          style={{
            width: "233px",
            borderRadius: "8px",
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            boxSizing: "border-box",
            height: "51px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px",
            fontSize: "16px",
          }}
        >
          <div
            style={{
              width: "204px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "8px",
            }}
          >
        <select
  defaultValue="default"
  style={{
    width: "254px",
    borderRadius: "8px",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    boxSizing: "border-box",
    height: "47px",
    padding: "12px",
    fontSize: "16px",
    border:"none",
  }}
>
  <option value="default" disabled hidden>
    Dropdown option
  </option>
  <option value="A">A</option>
  <option value="B">B</option>
  <option value="C">C</option>
</select>

           
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "382px",
          left: "79px",
          width: "232px",
          height: "80px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "6px",
          fontSize: "12px",
          color: "#666",
          fontFamily: "'Noto Sans'",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            position: "relative",
            lineHeight: "18px",
            fontWeight: "600",
          }}
        >
          District
        </div>
        <div
          style={{
            width: "233px",
            borderRadius: "8px",
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            boxSizing: "border-box",
            height: "51px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px",
            fontSize: "16px",
          }}
        >
          <div
            style={{
              width: "204px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "8px",
            }}
          >
            <select
  defaultValue="default"
  style={{
    width: "254px",
    borderRadius: "8px",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    boxSizing: "border-box",
    height: "47px",
    padding: "12px",
    fontSize: "16px",
    border:"none",
  }}
>
  <option value="default" disabled hidden>
    Dropdown option
  </option>
  <option value="A">A</option>
  <option value="B">B</option>
  <option value="C">C</option>
</select>
            
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "486px",
          left: "78px",
          width: "122px",
          height: "80px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "10px",
          fontSize: "12px",
          color: "#666",
          fontFamily: "'Noto Sans'",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            position: "relative",
            lineHeight: "18px",
            fontWeight: "600",
          }}
        >
          Mandal
        </div>
        <div
          style={{
            width: "113px",
            borderRadius: "8px",
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            boxSizing: "border-box",
            height: "51px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px 16px 16px 0px",
            textAlign: "center",
            fontSize: "16px",
          }}
        >
          <div
            style={{
              width: "89px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "8px",
            }}
          >
            <select
  defaultValue="default"
  style={{
    width: "254px",
    borderRadius: "8px",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    boxSizing: "border-box",
    height: "47px",
    padding: "12px",
    fontSize: "16px",
    border:"none",
  }}
>
  <option value="default" disabled hidden>
    option
  </option>
  <option value="A">A</option>
  <option value="B">B</option>
  <option value="C">C</option>
</select>
            
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "484px",
          left: "221px",
          width: "90px",
          height: "80px",
          fontSize: "12px",
          color: "#6d7280",
          fontFamily: "Inter",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "95%",
            width: "100%",
            top: "2.5%",
            right: "0%",
            bottom: "2.5%",
            left: "0%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "6px",
          }}
        >
          <div
            style={{
              position: "relative",
              letterSpacing: "-0.02em",
              lineHeight: "20px",
              fontWeight: "600",
            }}
          >
            Pincode
          </div>
          <div
            style={{
              width: "90px",
              borderRadius: "8px",
              backgroundColor: "#f9fafb",
              border: "1px solid #d2d5da",
              boxSizing: "border-box",
              height: "50px",
              overflow: "hidden",
              flexShrink: "0",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              padding: "0px 12px",
              fontSize: "16px",
            }}
          >
            <input
        type="text"
        placeholder="Pincode"
        value={pincode}
        onChange={(e) => setPincode(e.target.value)}
        style={{
          width: "90px",
          borderRadius: "8px",
          backgroundColor: "#f9fafb",
          border: "1px solid #d2d5da",
          boxSizing: "border-box",
          height: "50px",
          overflow: "hidden",
          fontSize: "16px",
          padding: "0px 1px",
          border:"none",
        }}
      />
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "705px",
          left: "178px",
          letterSpacing: "-0.02em",
          lineHeight: "20px",
          fontWeight: "500",
          fontFamily: "Inter",
          cursor: "pointer",
        }}
        onClick={onNextStepCLMob1}
      >
        Prev
      </div>
      <div
        style={{
          position: "absolute",
          top: "633px",
          left: "35px",
          borderRadius: "8px",
          backgroundColor: "#02044a",
          width: "320px",
          height: "50px",
          cursor: "pointer",
        }}
        onClick={onNextSstepClickMID}
      />
      <div
        style={{
          position: "absolute",
          top: "648px",
          left: "165px",
          fontSize: "14px",
          letterSpacing: "-0.02em",
          lineHeight: "20px",
          fontWeight: "500",
          fontFamily: "Inter",
          color: "#fff",
        }}
      >
        Next step
      </div>
      <div
        style={{
          position: "absolute",
          top: "780px",
          left: "35px",
          width: "320px",
          height: "6px",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0%",
            right: "0%",
            bottom: "0%",
            left: "0%",
            borderRadius: "2px",
            backgroundColor: "#d9d9d9",
          }}
        />
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0%",
            right: "0%",
            bottom: "0%",
            left: "0%",
            borderRadius: "2px",
            backgroundColor: "#1b5bff",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "35px",
          left: "35px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
          textAlign: "center",
        }}
      >
        Logo
      </div>
    </div>
)}
{showFIMob1 && (
  <div
      style={{
        width: "100%",
        position: "relative",
        backgroundColor: "#fff",
        height: "844px",
        overflow: "hidden",
        textAlign: "center",
        fontSize: "16px",
        color: "#000",
        fontFamily: "Poppins",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "206px",
          left: "35px",
          width: "320px",
          height: "400px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            borderRadius: "16px",
            backgroundColor: "#dfdfdf",
            width: "320px",
            height: "400px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "35px",
            left: "43px",
            width: "158px",
            height: "24px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              letterSpacing: "1px",
              lineHeight: "24px",
              fontWeight: "600",
              whiteSpace:"nowrap",
            }}
          >
            Farm information
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "98px",
          left: "49px",
          fontSize: "24px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
          textAlign: "left",
        }}
      >
        Agriculture information
      </div>
      <div
        style={{
          position: "absolute",
          top: "145px",
          left: "266px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "59px",
          height: "16px",
        }}
      >
        1 of 8
      </div>
      <div
        style={{
          position: "absolute",
          height: "5.69%",
          width: "73.08%",
          top: "33.65%",
          right: "12.31%",
          bottom: "60.66%",
          left: "14.62%",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0%",
            right: "0%",
            bottom: "0%",
            left: "0%",
            borderRadius: "8px",
            backgroundColor: "#d9d9d9",
            border: "1px solid #000",
            boxSizing: "border-box",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "25%",
            left: "8.07%",
            letterSpacing: "-0.02em",
            lineHeight: "24px",
            fontWeight: "600",
          }}
        >
          How many acres do you have ?
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "378px",
          left: "62px",
          borderRadius: "8px",
          backgroundColor: "#d9d9d9",
          border: "1px solid #000",
          boxSizing: "border-box",
          width: "280px",
          height: "50px",
        }}
      />
      <img
        style={{
          position: "absolute",
          top: "389px",
          left: "117px",
          width: "173px",
          height: "29px",
        }}
        alt=""
        src="/vector-5.svg"
      />
      <img
      onClick={incrementAcres}
        style={{
          position: "absolute",
          top: "390px",
          left: "300px",
          width: "24px",
          height: "24px",
        }}
        alt=""
        src="/icon--plus.svg"
      />
      <img
      onClick={decrementAcres}
        style={{
          position: "absolute",
          top: "390px",
          left: "80px",
          width: "24px",
          height: "24px",
        }}
        alt=""
        src="/icon--minus.svg"
      />
      <div
          style={{
            position: "absolute",
            top: "393px",
            left: "168px",
            letterSpacing: "1px",
            lineHeight: "24px",
            fontWeight: "600",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "64px",
            height: "23px",
          }}
        >
          <input
            type="number"
            value={acres}
            onChange={e => setAcres(parseInt(e.target.value))}
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              textAlign: "center",
              outline: "none",
              fontSize: "inherit",
              fontWeight: "inherit",
            }}
          />
        </div>
      <div
        style={{
          position: "absolute",
          top: "705px",
          left: "178px",
          letterSpacing: "-0.02em",
          lineHeight: "20px",
          fontWeight: "500",
          fontFamily: "Inter",
          textAlign: "left",
        }}
        onClick={onNextSstepClickMID}
      >
        Prev
      </div>
      <div
        style={{
          position: "absolute",
          top: "633px",
          left: "35px",
          borderRadius: "8px",
          backgroundColor: "#02044a",
          width: "320px",
          height: "50px",
          cursor: "pointer",
        }}
        onClick={onNextStepFIMob2}
      />
      <div
        style={{
          position: "absolute",
          top: "648px",
          left: "165px",
          fontSize: "14px",
          letterSpacing: "-0.02em",
          lineHeight: "20px",
          fontWeight: "500",
          fontFamily: "Inter",
          color: "#fff",
          textAlign: "left",
        }}
      >
        Next step
      </div>
      <div
        style={{
          position: "absolute",
          top: "780px",
          left: "35px",
          width: "320px",
          height: "6px",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0%",
            right: "0%",
            bottom: "0%",
            left: "0%",
            borderRadius: "2px",
            backgroundColor: "#d9d9d9",
          }}
        />
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "12.5%",
            top: "0%",
            right: "87.5%",
            bottom: "0%",
            left: "0%",
            borderRadius: "2px",
            backgroundColor: "#1b5bff",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "35px",
          left: "35px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
        }}
      >
        Logo
      </div>
    </div>
)}
{showFIMob2 && (
  <div
      style={{
        width: "100%",
        position: "relative",
        backgroundColor: "#fff",
        height: "844px",
        overflow: "hidden",
        textAlign: "center",
        fontSize: "16px",
        color: "#000",
        fontFamily: "Poppins",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "206px",
          left: "35px",
          width: "320px",
          height: "400px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            borderRadius: "16px",
            backgroundColor: "#dfdfdf",
            width: "320px",
            height: "400px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "35px",
            left: "35px",
            width: "98px",
            height: "24px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              letterSpacing: "1px",
              lineHeight: "24px",
              fontWeight: "600",
            }}
          >
            Experience
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "98px",
          left: "49px",
          fontSize: "24px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
          textAlign: "left",
        }}
      >
        Agriculture information
      </div>
      <div
        style={{
          position: "absolute",
          top: "145px",
          left: "266px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "59px",
          height: "16px",
        }}
      >
        3 of 8
      </div>
      <div
        style={{
          position: "absolute",
          top: "289px",
          left: "53px",
          width: "285px",
          height: "48px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            borderRadius: "8px",
            backgroundColor: "#d9d9d9",
            border: "1px solid #000",
            boxSizing: "border-box",
            width: "285px",
            height: "48px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "12px",
            left: "54px",
            letterSpacing: "-0.02em",
            lineHeight: "24px",
            fontWeight: "600",
          }}
        >
          Experience in farming ?
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "705px",
          left: "178px",
          letterSpacing: "-0.02em",
          lineHeight: "20px",
          fontWeight: "500",
          fontFamily: "Inter",
          textAlign: "left",
          cursor: "pointer",
        }}
        onClick={onNextStepFIMob1}
      >
        Prev
      </div>
      <div
        style={{
          position: "absolute",
          top: "633px",
          left: "35px",
          borderRadius: "8px",
          backgroundColor: "#02044a",
          width: "320px",
          height: "50px",
          cursor: "pointer",
        }}
        onClick={onNextStepLSMob1}
      />
      <div
        style={{
          position: "absolute",
          top: "648px",
          left: "165px",
          fontSize: "14px",
          letterSpacing: "-0.02em",
          lineHeight: "20px",
          fontWeight: "500",
          fontFamily: "Inter",
          color: "#fff",
          textAlign: "left",
        }}
      >
        Next step
      </div>
      <div
        style={{
          position: "absolute",
          top: "780px",
          left: "35px",
          width: "320px",
          height: "6px",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0%",
            right: "0%",
            bottom: "0%",
            left: "0%",
            borderRadius: "2px",
            backgroundColor: "#d9d9d9",
          }}
        />
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "37.5%",
            top: "0%",
            right: "62.5%",
            bottom: "0%",
            left: "0%",
            borderRadius: "2px",
            backgroundColor: "#1b5bff",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "35px",
          left: "35px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
        }}
      >
        Logo
      </div>
      <div
        style={{
          position: "absolute",
          top: "360px",
          left: "56px",
          width: "285px",
          height: "48px",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0%",
            right: "0%",
            bottom: "0%",
            left: "0%",
            borderRadius: "8px",
            backgroundColor: "#d9d9d9",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "calc(100% - 134px)",
            top: "calc(50% - 12px)",
            left: "48px",
            letterSpacing: "-0.02em",
            lineHeight: "24px",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "24px",
          }}
          onClick={() => handleSoilTypeSelect("0-5 years")}
        >
          0-5 years
          {selectedSoilType === "0-5 years" && (
            <img
              className={styles.checkCircleIcon1}
              alt=""
              src="/check-circle.svg"
            />
          )}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "414px",
          left: "54px",
          
          borderRadius: "8px",
          
          boxSizing: "border-box",
          width: "289px",
          height: "52px",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0%",
            right: "0%",
            bottom: "0%",
            left: "0%",
            borderRadius: "8px",
            backgroundColor: "#d9d9d9",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "calc(100% - 134px)",
            top: "calc(50% - 12px)",
            left: "48px",
            letterSpacing: "-0.02em",
            lineHeight: "24px",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "24px",
          }}
          onClick={() => handleSoilTypeSelect("5-10 years")}
        >
          5-10 years
          {selectedSoilType === "5-10 years" && (
            <img
              className={styles.checkCircleIcon1}
              alt=""
              src="/check-circle.svg"
            />
          )}
        </div>
        
      </div>
      <div
        style={{
          position: "absolute",
          top: "472px",
          left: "56px",
          width: "285px",
          height: "48px",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0%",
            right: "0%",
            bottom: "0%",
            left: "0%",
            borderRadius: "8px",
            backgroundColor: "#d9d9d9",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "calc(100% - 134px)",
            top: "calc(50% - 12px)",
            left: "48px",
            letterSpacing: "-0.02em",
            lineHeight: "24px",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "24px",
          }}
          onClick={() => handleSoilTypeSelect("10-15 years")}
        >
          10-15 years
          {selectedSoilType === "10-15 years" && (
            <img
              className={styles.checkCircleIcon1}
              alt=""
              src="/check-circle.svg"
            />
          )}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "528px",
          left: "56px",
          width: "285px",
          height: "48px",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0%",
            right: "0%",
            bottom: "0%",
            left: "0%",
            borderRadius: "8px",
            backgroundColor: "#d9d9d9",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "calc(100% - 134px)",
            top: "calc(50% - 12px)",
            left: "48px",
            letterSpacing: "-0.02em",
            lineHeight: "24px",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "24px",
          }}
          onClick={() => handleSoilTypeSelect("15-20 years")}
        >
          15-20 years
          {selectedSoilType === "15-20 years" && (
            <img
              className={styles.checkCircleIcon1}
              alt=""
              src="/check-circle.svg"
            />
          )}
        </div>
      </div>
    </div>
)}
{showCCMob1 && (
  <div
      style={{
        width: "100%",
        position: "relative",
        backgroundColor: "#fff",
        height: "844px",
        overflow: "hidden",
        textAlign: "center",
        fontSize: "16px",
        color: "#000",
        fontFamily: "Poppins",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "206px",
          left: "35px",
          width: "320px",
          height: "400px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            borderRadius: "16px",
            backgroundColor: "#dfdfdf",
            width: "320px",
            height: "400px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "35px",
            left: "35px",
            width: "101px",
            height: "24px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              letterSpacing: "1px",
              lineHeight: "24px",
              fontWeight: "600",
            }}
          >{`Cultivation `}</div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "98px",
          left: "49px",
          fontSize: "24px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
          textAlign: "left",
        }}
      >
        Agriculture information
      </div>
      <div
        style={{
          position: "absolute",
          top: "145px",
          left: "266px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "59px",
          height: "16px",
        }}
      >
        4 of 8
      </div>
      <div
        style={{
          position: "absolute",
          top: "300px",
          left: "70px",
          fontSize: "12px",
          letterSpacing: "-0.02em",
          lineHeight: "20px",
          fontWeight: "600",
          fontFamily: "Inter",
          textAlign: "left",
        }}
      >
        Start month of cultivation
      </div>
      <div
        style={{
          position: "absolute",
          top: "418px",
          left: "70px",
          fontSize: "12px",
          letterSpacing: "-0.02em",
          lineHeight: "20px",
          fontWeight: "600",
          fontFamily: "Inter",
          textAlign: "left",
        }}
      >
        Pre production month
      </div>
      <div
        style={{
          position: "absolute",
          top: "705px",
          left: "178px",
          letterSpacing: "-0.02em",
          lineHeight: "20px",
          fontWeight: "500",
          fontFamily: "Inter",
          textAlign: "left",
          cursor: "pointer",
        }}
        onClick={onNextStepLSMob2}
      >
        Prev
      </div>
      <div
        style={{
          position: "absolute",
          top: "633px",
          left: "34px",
          borderRadius: "8px",
          backgroundColor: "#02044a",
          width: "320px",
          height: "50px",
          cursor: "pointer",
        }}
        onClick={onNextStepCCMob2}
      />
      <div
        style={{
          position: "absolute",
          top: "648px",
          left: "165px",
          fontSize: "14px",
          letterSpacing: "-0.02em",
          lineHeight: "20px",
          fontWeight: "500",
          fontFamily: "Inter",
          color: "#fff",
          textAlign: "left",
        }}
      >
        Next step
      </div>
      <div
        style={{
          position: "absolute",
          top: "314px",
          left: "70px",
          width: "232px",
          height: "102px",
          fontSize: "12px",
          color: "#d50000",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "74.51%",
            left: "1.29%",
            letterSpacing: "-0.02em",
            lineHeight: "26px",
            fontWeight: "600",
            display: "none",
          }}
        >
          *error
        </div>
        <div
          style={{
            position: "absolute",
            height: "25.49%",
            width: "49.14%",
            top: "0%",
            left: "0.86%",
            letterSpacing: "-0.02em",
            lineHeight: "26px",
            fontWeight: "600",
            color: "#a2a2a2",
            textAlign: "left",
            display: "none",
          }}
        >
          Label
        </div>
        <div
          style={{
            position: "absolute",
            height: "49.02%",
            width: "100%",
            top: "25.49%",
            right: "0%",
            bottom: "25.49%",
            left: "0%",
            borderRadius: "8px",
            backgroundColor: "#fff",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "calc(50% - 14px)",
            left: "20px",
            width: "166px",
            height: "26px",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "flex-start",
            gap: "12px",
            fontSize: "14px",
            color: "#949494",
            fontFamily: "Inter",
          }}
        >
          <img
            style={{
              width: "24px",
              position: "relative",
              height: "24px",
              overflow: "hidden",
              flexShrink: "0",
              display: "none",
            }}
            alt=""
            src="/mail-outline.svg"
          />
          <div
          style={{
            position: "relative",
            letterSpacing: "-0.02em",
            lineHeight: "26px",
          }}
          id="dateOutput" 
        >
          DD/MM/YY
        </div>
      </div>
      <img
        style={{
          position: "absolute",
          top: "calc(50% - 12px)",
          right: "13px",
          width: "24px",
          height: "24px",
          overflow: "hidden",
          cursor: "pointer",
        }}
        alt=""
        src="/date-range.svg"
        onClick={handleDateRangeClick}
      />
      {showDatePicker1 && (
        <DatePicker
          selected={selectedDate1}
          onChange={handleDateChange} 
          dateFormat="dd/MM/yyyy" 
        />
      )}
        <div
          style={{
            position: "absolute",
            height: "calc(100% - 51px)",
            top: "25.5px",
            right: "45.5px",
            bottom: "25.5px",
            borderRight: "1px solid #000",
            boxSizing: "border-box",
            width: "1px",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "440px",
          left: "70px",
          width: "232px",
          height: "102px",
          fontSize: "12px",
          color: "#d50000",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "74.51%",
            left: "1.29%",
            letterSpacing: "-0.02em",
            lineHeight: "26px",
            fontWeight: "600",
            display: "none",
          }}
        >
          *error
        </div>
        <div
          style={{
            position: "absolute",
            height: "25.49%",
            width: "49.14%",
            top: "0%",
            left: "0.86%",
            letterSpacing: "-0.02em",
            lineHeight: "26px",
            fontWeight: "600",
            color: "#a2a2a2",
            textAlign: "left",
            display: "none",
          }}
        >
          Label
        </div>
        <div
          style={{
            position: "absolute",
            height: "49.02%",
            width: "100%",
            top: "25.49%",
            right: "0%",
            bottom: "25.49%",
            left: "0%",
            borderRadius: "8px",
            backgroundColor: "#fff",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "calc(50% - 14px)",
            left: "20px",
            width: "166px",
            height: "26px",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "flex-start",
            gap: "12px",
            fontSize: "14px",
            color: "#949494",
            fontFamily: "Inter",
          }}
        >
          <img
            style={{
              width: "24px",
              position: "relative",
              height: "24px",
              overflow: "hidden",
              flexShrink: "0",
              display: "none",
            }}
            alt=""
            src="/mail-outline.svg"
          />
          <div
          style={{
            position: "relative",
            letterSpacing: "-0.02em",
            lineHeight: "26px",
          }}
          id="monthOutput" 
        >
          January
        </div>
        </div>
        <img
        style={{
          position: "absolute",
          top: "calc(50% - 12px)",
          right: "13px",
          width: "24px",
          height: "24px",
          overflow: "hidden",
          cursor: "pointer",
        }}
        alt=""
        src="/calender-today.svg"
        onClick={handleCalendarTodayClick}
      />
      {showDatePicker2 && (
        <DatePicker
          selected={selectedDate2}
          onChange={handleMonthChange} // Call handleMonthChange on date change
          dateFormat="MMMM yyyy"
          showMonthYearPicker
        />
      )}
        <div
          style={{
            position: "absolute",
            height: "calc(100% - 51px)",
            top: "25.5px",
            right: "45.5px",
            bottom: "25.5px",
            borderRight: "1px solid #000",
            boxSizing: "border-box",
            width: "1px",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "780px",
          left: "35px",
          width: "320px",
          height: "6px",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0%",
            right: "0%",
            bottom: "0%",
            left: "0%",
            borderRadius: "2px",
            backgroundColor: "#d9d9d9",
          }}
        />
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "50%",
            top: "0%",
            right: "50%",
            bottom: "0%",
            left: "0%",
            borderRadius: "2px",
            backgroundColor: "#1b5bff",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "35px",
          left: "35px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
        }}
      >
        Logo
      </div>
    </div>
)}
{showCCMob2 && (
  <div
      style={{
        width: "100%",
        position: "relative",
        backgroundColor: "#fff",
        height: "844px",
        overflow: "hidden",
        textAlign: "center",
        fontSize: "16px",
        color: "#000",
        fontFamily: "Poppins",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "203px",
          left: "35px",
          width: "320px",
          height: "400px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            borderRadius: "16px",
            backgroundColor: "#dfdfdf",
            width: "320px",
            height: "400px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "38px",
            left: "35px",
            width: "89px",
            height: "24px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              letterSpacing: "1px",
              lineHeight: "24px",
              fontWeight: "600",
               whiteSpace:"nowrap",
            }}
          >
            Crop type
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "98px",
          left: "49px",
          fontSize: "24px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
          textAlign: "left",
        }}
      >
        Agriculture information
      </div>
      <div
        style={{
          position: "absolute",
          top: "145px",
          left: "266px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "59px",
          height: "16px",
        }}
      >
        6 of 8
      </div>
      <div
        style={{
          position: "absolute",
          top: "300px",
          left: "70px",
          fontSize: "12px",
          letterSpacing: "-0.02em",
          lineHeight: "24px",
          fontWeight: "600",
        }}
      >
        Primary crop
      </div>
      <div
        style={{
          position: "absolute",
          top: "418px",
          left: "70px",
          fontSize: "12px",
          letterSpacing: "-0.02em",
          lineHeight: "24px",
          fontWeight: "600",
        }}
      >
        Secondary crop
      </div>
      <div
        style={{
          position: "absolute",
          top: "314px",
          left: "70px",
          width: "232px",
          height: "102px",
          fontSize: "12px",
          color: "#d50000",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "74.51%",
            left: "1.29%",
            letterSpacing: "-0.02em",
            lineHeight: "26px",
            fontWeight: "600",
            display: "none",
          }}
        >
          *error
        </div>
        <div
          style={{
            position: "absolute",
            height: "25.49%",
            width: "49.14%",
            top: "0%",
            left: "0.86%",
            letterSpacing: "-0.02em",
            lineHeight: "26px",
            fontWeight: "600",
            color: "#a2a2a2",
            textAlign: "left",
            display: "none",
          }}
        >
          Primary crop
        </div>
        <div
          style={{
            position: "absolute",
            height: "49.02%",
            width: "100%",
            top: "25.49%",
            right: "0%",
            bottom: "25.49%",
            left: "0%",
            borderRadius: "8px",
            backgroundColor: "#fff",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "calc(50% - 14px)",
            left: "20px",
            width: "166px",
            height: "26px",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "flex-start",
            gap: "12px",
            fontSize: "14px",
            color: "#949494",
            fontFamily: "Inter",
          }}
        >
          <img
            style={{
              width: "24px",
              position: "relative",
              height: "24px",
              overflow: "hidden",
              flexShrink: "0",
              display: "none",
            }}
            alt=""
            src="/mail-outline.svg"
          />
          <div
            style={{
              position: "relative",
              letterSpacing: "-0.02em",
              lineHeight: "26px",
            }}
          >
            raki@gmail.com
          </div>
        </div>
        <img
          style={{
            position: "absolute",
            top: "calc(50% - 12px)",
            right: "13px",
            width: "24px",
            height: "24px",
            overflow: "hidden",
          }}
          alt=""
          src="/add.svg"
        />
        <div
          style={{
            position: "absolute",
            height: "calc(100% - 51px)",
            top: "25.5px",
            right: "45.5px",
            bottom: "25.5px",
            borderRight: "1px solid #000",
            boxSizing: "border-box",
            width: "1px",
            display: "none",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "440px",
          left: "70px",
          width: "232px",
          height: "102px",
          fontSize: "12px",
          color: "#d50000",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "232px",
            height: "102px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "74.51%",
              left: "1.29%",
              letterSpacing: "-0.02em",
              lineHeight: "26px",
              fontWeight: "600",
              display: "none",
            }}
          >
            *error
          </div>
          <div
            style={{
              position: "absolute",
              height: "25.49%",
              width: "49.14%",
              top: "0%",
              left: "0.86%",
              letterSpacing: "-0.02em",
              lineHeight: "26px",
              fontWeight: "600",
              color: "#a2a2a2",
              textAlign: "left",
              display: "none",
            }}
          >
            Label
          </div>
          <div
            style={{
              position: "absolute",
              height: "49.02%",
              width: "100%",
              top: "25.49%",
              right: "0%",
              bottom: "25.49%",
              left: "0%",
              borderRadius: "8px",
              backgroundColor: "#fff",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "calc(50% - 14px)",
              left: "20px",
              width: "166px",
              height: "26px",
              display: "none",
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent: "flex-start",
              gap: "12px",
              fontSize: "14px",
              color: "#949494",
              fontFamily: "Inter",
            }}
          >
            <img
              style={{
                width: "24px",
                position: "relative",
                height: "24px",
                overflow: "hidden",
                flexShrink: "0",
                display: "none",
              }}
              alt=""
              src="/mail-outline.svg"
            />
            <div
              style={{
                position: "relative",
                letterSpacing: "-0.02em",
                lineHeight: "26px",
              }}
            >
              raki@gmail.com
            </div>
          </div>
          <img
            style={{
              position: "absolute",
              top: "calc(50% - 12px)",
              right: "13px",
              width: "24px",
              height: "24px",
              overflow: "hidden",
            }}
            alt=""
            src="/add.svg"
          />
          <div
            style={{
              position: "absolute",
              height: "calc(100% - 51px)",
              top: "25.5px",
              right: "45.5px",
              bottom: "25.5px",
              borderRight: "1px solid #000",
              boxSizing: "border-box",
              width: "1px",
              display: "none",
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            height: "35.29%",
            width: "44.4%",
            top: "32.35%",
            right: "50.86%",
            bottom: "32.35%",
            left: "4.74%",
            overflow: "hidden",
            textAlign: "left",
            color: "#000",
            fontFamily: "Inter",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              borderRadius: "8px",
              backgroundColor: "#d9d9d9",
              width: "103px",
              height: "36px",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "calc(100% - 65px)",
              top: "calc(50% - 11px)",
              left: "24px",
              letterSpacing: "-0.02em",
              lineHeight: "26px",
              display: "inline-block",
              height: "26px",
            }}
          >
            Paddy
          </div>
          <img
            style={{
              position: "absolute",
              height: "80.83%",
              width: "28.25%",
              top: "9.72%",
              right: "5.92%",
              bottom: "9.44%",
              left: "65.83%",
              maxWidth: "100%",
              overflow: "hidden",
              maxHeight: "100%",
              objectFit: "contain",
            }}
            alt=""
            src="/plus@2x.png"
          />
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "705px",
          left: "178px",
          letterSpacing: "-0.02em",
          lineHeight: "20px",
          fontWeight: "500",
          fontFamily: "Inter",
          textAlign: "left",
          cursor: "pointer",
        }}
        onClick={onNextStepCCMob1}
      >
        Prev
      </div>
      <div
        style={{
          position: "absolute",
          top: "633px",
          left: "35px",
          borderRadius: "8px",
          backgroundColor: "#02044a",
          width: "320px",
          height: "50px",
          cursor: "pointer",
        }}
        onClick={onNextStepISMob1}
      />
      <div
        style={{
          position: "absolute",
          top: "648px",
          left: "165px",
          fontSize: "14px",
          letterSpacing: "-0.02em",
          lineHeight: "20px",
          fontWeight: "500",
          fontFamily: "Inter",
          color: "#fff",
          textAlign: "left",
        }}
      >
        Next step
      </div>
      <div
        style={{
          position: "absolute",
          top: "780px",
          left: "35px",
          width: "320px",
          height: "6px",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0%",
            right: "0%",
            bottom: "0%",
            left: "0%",
            borderRadius: "2px",
            backgroundColor: "#d9d9d9",
          }}
        />
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "75%",
            top: "0%",
            right: "25%",
            bottom: "0%",
            left: "0%",
            borderRadius: "2px",
            backgroundColor: "#1b5bff",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "35px",
          left: "35px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
        }}
      >
        Logo
      </div>
    </div>
)}
{showLSMob1 && (
  <div
      style={{
        width: "100%",
        position: "relative",
        backgroundColor: "#fff",
        height: "844px",
        overflow: "hidden",
        textAlign: "center",
        fontSize: "16px",
        color: "#000",
        fontFamily: "Poppins",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "206px",
          left: "35px",
          width: "320px",
          height: "400px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            borderRadius: "16px",
            backgroundColor: "#dfdfdf",
            width: "320px",
            height: "400px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "35px",
            left: "35px",
            width: "166px",
            height: "24px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              letterSpacing: "1px",
              lineHeight: "24px",
              fontWeight: "600",
            }}
          >{`Location of a farm `}</div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "98px",
          left: "49px",
          fontSize: "24px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
          textAlign: "left",
          whiteSpace:"nowrap",
        }}
      >
        Agriculture information
      </div>
      <div
        style={{
          position: "absolute",
          top: "145px",
          left: "266px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "59px",
          height: "16px",
        }}
      >
        2 of 8
      </div>
      <div
        style={{
          position: "absolute",
          top: "265px",
          left: "70px",
          width: "232px",
          height: "102px",
          fontSize: "12px",
          color: "#d50000",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "74.51%",
            left: "1.29%",
            letterSpacing: "-0.02em",
            lineHeight: "26px",
            fontWeight: "600",
            display: "none",
          }}
        >
          *error
        </div>
        <div
          style={{
            position: "absolute",
            height: "25.49%",
            width: "49.14%",
            top: "0%",
            left: "0.86%",
            letterSpacing: "-0.02em",
            lineHeight: "26px",
            fontWeight: "600",
            color: "#a2a2a2",
            textAlign: "left",
            display: "none",
          }}
        >
          Farm Location
        </div>
        <div
          style={{
            position: "absolute",
            height: "49.02%",
            width: "100%",
            top: "25.49%",
            right: "0%",
            bottom: "25.49%",
            left: "0%",
            borderRadius: "8px",
            backgroundColor: "#fff",
            border: "1px solid #000",
            boxSizing: "border-box",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "calc(50% - 14px)",
            left: "20px",
            width: "166px",
            height: "26px",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "flex-start",
            gap: "12px",
            fontSize: "14px",
            color: "#949494",
            fontFamily: "Inter",
          }}
        >
          <img
            style={{
              width: "24px",
              position: "relative",
              height: "24px",
              overflow: "hidden",
              flexShrink: "0",
              display: "none",
            }}
            alt=""
            src="/location-on.svg"
          />
          <div
            style={{
              position: "relative",
              letterSpacing: "-0.02em",
              lineHeight: "26px",
            }}
          >
            26/328 Houston
          </div>
        </div>
        <img
          style={{
            position: "absolute",
            top: "calc(50% - 12px)",
            right: "13px",
            width: "24px",
            height: "24px",
            overflow: "hidden",
          }}
          alt=""
          src="/location-on.svg"
        />
        <div
          style={{
            position: "absolute",
            height: "calc(100% - 51px)",
            top: "25.5px",
            right: "45.5px",
            bottom: "25.5px",
            borderRight: "1px solid #000",
            boxSizing: "border-box",
            width: "1px",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "705px",
          left: "178px",
          letterSpacing: "-0.02em",
          lineHeight: "20px",
          fontWeight: "500",
          fontFamily: "Inter",
          textAlign: "left",
          cursor: "pointer",
        }}
        onClick={onNextStepFIMob2}
      >
        Prev
      </div>
      <div
        style={{
          position: "absolute",
          top: "633px",
          left: "35px",
          borderRadius: "8px",
          backgroundColor: "#02044a",
          width: "320px",
          height: "50px",
          cursor: "pointer",
        }}
        onClick={onNextStepLSMob2}
      />
      <div
        style={{
          position: "absolute",
          top: "648px",
          left: "165px",
          fontSize: "14px",
          letterSpacing: "-0.02em",
          lineHeight: "20px",
          fontWeight: "500",
          fontFamily: "Inter",
          color: "#fff",
          textAlign: "left",
        }}
      >
        Next step
      </div>
      <img
        style={{
          position: "absolute",
          top: "367px",
          left: "71px",
          width: "232px",
          height: "215px",
          objectFit: "cover",
        }}
        alt=""
        src="/rectangle-55@2x.png"
      />
      <div
        style={{
          position: "absolute",
          top: "780px",
          left: "35px",
          width: "320px",
          height: "6px",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0%",
            right: "0%",
            bottom: "0%",
            left: "0%",
            borderRadius: "2px",
            backgroundColor: "#d9d9d9",
          }}
        />
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "25%",
            top: "0%",
            right: "75%",
            bottom: "0%",
            left: "0%",
            borderRadius: "2px",
            backgroundColor: "#1b5bff",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "35px",
          left: "35px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
        }}
      >
        Logo
      </div>
    </div>
)}
{showLSMob2 && (
  <div
      style={{
        width: "100%",
        position: "relative",
        backgroundColor: "#fff",
        height: "844px",
        overflow: "hidden",
        textAlign: "center",
        fontSize: "16px",
        color: "#000",
        fontFamily: "Poppins",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "206px",
          left: "35px",
          width: "320px",
          height: "400px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            borderRadius: "16px",
            backgroundColor: "#dfdfdf",
            width: "320px",
            height: "400px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "35px",
            left: "35px",
            width: "78px",
            height: "24px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              letterSpacing: "1px",
              lineHeight: "24px",
              fontWeight: "600",
              whiteSpace:"nowrap",
            }}
          >
            Soil type
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "98px",
          left: "49px",
          fontSize: "24px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
          textAlign: "left",
        }}
      >
        Agriculture information
      </div>
      <div
        style={{
          position: "absolute",
          top: "145px",
          left: "266px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "59px",
          height: "16px",
        }}
      >
        5 of 8
      </div>
      <div
        style={{
          position: "absolute",
          top: "288px",
          left: "53px",
          borderRadius: "8px",
          backgroundColor: "#d9d9d9",
          border: "1px solid #000",
          boxSizing: "border-box",
          width: "285px",
          height: "48px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "300px",
          left: "136px",
          letterSpacing: "-0.02em",
          lineHeight: "24px",
          fontWeight: "600",
        }}
      >
        Type of soil ?
      </div>
      <div
        style={{
          position: "absolute",
          top: "705px",
          left: "178px",
          letterSpacing: "-0.02em",
          lineHeight: "20px",
          fontWeight: "500",
          fontFamily: "Inter",
          textAlign: "left",
          cursor: "pointer",
        }}
        onClick={onNextStepLSMob1}
      >
        Prev
      </div>
      <div
        style={{
          position: "absolute",
          top: "633px",
          left: "35px",
          borderRadius: "8px",
          backgroundColor: "#02044a",
          width: "320px",
          height: "50px",
          cursor: "pointer",
        }}
        onClick={onNextStepCCMob1}
      />
      <div
        style={{
          position: "absolute",
          top: "648px",
          left: "165px",
          fontSize: "14px",
          letterSpacing: "-0.02em",
          lineHeight: "20px",
          fontWeight: "500",
          fontFamily: "Inter",
          color: "#fff",
          textAlign: "left",
        }}
      >
        Next step
      </div>
      <div
        style={{
          position: "absolute",
          top: "780px",
          left: "35px",
          width: "320px",
          height: "6px",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0%",
            right: "0%",
            bottom: "0%",
            left: "0%",
            borderRadius: "2px",
            backgroundColor: "#d9d9d9",
          }}
        />
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "62.5%",
            top: "0%",
            right: "37.5%",
            bottom: "0%",
            left: "0%",
            borderRadius: "2px",
            backgroundColor: "#1b5bff",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "35px",
          left: "35px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
        }}
      >
        Logo
      </div>
      <div
        style={{
          position: "absolute",
          top: "356px",
          left: "56px",
          width: "285px",
          height: "48px",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0%",
            right: "0%",
            bottom: "0%",
            left: "0%",
            borderRadius: "8px",
            backgroundColor: "#d9d9d9",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "calc(100% - 134px)",
            top: "calc(50% - 12px)",
            left: "48px",
            letterSpacing: "-0.02em",
            lineHeight: "24px",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "24px",
          }}
          onClick={() => handleSoilTypeSelect("Alluvial soil")}
        >
          Alluvial soil
          {selectedSoilType === "Alluvial soil" && (
            <img
              className={styles.checkCircleIcon1}
              alt=""
              src="/check-circle.svg"
            />
          )}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "412px",
          left: "56px",
          width: "285px",
          height: "48px",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0%",
            right: "0%",
            bottom: "0%",
            left: "0%",
            borderRadius: "8px",
            backgroundColor: "#d9d9d9",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "calc(100% - 134px)",
            top: "calc(50% - 12px)",
            left: "48px",
            letterSpacing: "-0.02em",
            lineHeight: "24px",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "24px",
          }}
          onClick={() => handleSoilTypeSelect("Red soil")}
        >
          Red soil
          {selectedSoilType === "Red soil" && (
            <img
              className={styles.checkCircleIcon1}
              alt=""
              src="/check-circle.svg"
            />
          )}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "468px",
          left: "56px",
          width: "285px",
          height: "48px",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0%",
            right: "0%",
            bottom: "0%",
            left: "0%",
            borderRadius: "8px",
            backgroundColor: "#d9d9d9",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "calc(100% - 134px)",
            top: "calc(50% - 12px)",
            left: "48px",
            letterSpacing: "-0.02em",
            lineHeight: "24px",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "24px",
          }}
          onClick={() => handleSoilTypeSelect("Black soil")}
        >
          Black soil
          {selectedSoilType === "Black soil" && (
            <img
              className={styles.checkCircleIcon1}
              alt=""
              src="/check-circle.svg"
            />
          )}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "524px",
          left: "56px",
          width: "285px",
          height: "48px",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0%",
            right: "0%",
            bottom: "0%",
            left: "0%",
            borderRadius: "8px",
            backgroundColor: "#d9d9d9",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "calc(100% - 134px)",
            top: "calc(50% - 12px)",
            left: "48px",
            letterSpacing: "-0.02em",
            lineHeight: "24px",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "24px",
          }}
          onClick={() => handleSoilTypeSelect("Sandy soil")}
        >
          Sandy soil
          {selectedSoilType === "Sandy soil" && (
            <img
              className={styles.checkCircleIcon1}
              alt=""
              src="/check-circle.svg"
            />
          )}
        </div>
      </div>
    </div>
)}
{showISMob1 && (
  <div
      style={{
        width: "100%",
        position: "relative",
        backgroundColor: "#fff",
        height: "844px",
        overflow: "hidden",
        textAlign: "center",
        fontSize: "16px",
        color: "#000",
        fontFamily: "Poppins",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "206px",
          left: "35px",
          width: "320px",
          height: "400px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            borderRadius: "16px",
            backgroundColor: "#dfdfdf",
            width: "320px",
            height: "400px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "33px",
            left: "35px",
            width: "102px",
            height: "24px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              letterSpacing: "1px",
              lineHeight: "24px",
              fontWeight: "600",
            }}
          >
            Investment
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "98px",
          left: "49px",
          fontSize: "24px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
          textAlign: "left",
        }}
      >
        Agriculture information
      </div>
      <div
        style={{
          position: "absolute",
          top: "145px",
          left: "266px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "59px",
          height: "16px",
        }}
      >
        7 of 8
      </div>
      <div
        style={{
          position: "absolute",
          top: "288px",
          left: "53px",
          borderRadius: "8px",
          backgroundColor: "#d9d9d9",
          border: "1px solid #000",
          boxSizing: "border-box",
          width: "285px",
          height: "48px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "300px",
          left: "114px",
          letterSpacing: "-0.02em",
          lineHeight: "24px",
          fontWeight: "600",
        }}
      >
        Yearly investment
      </div>
      <div
        style={{
          position: "absolute",
          top: "705px",
          left: "178px",
          letterSpacing: "-0.02em",
          lineHeight: "20px",
          fontWeight: "500",
          fontFamily: "Inter",
          textAlign: "left",
          cursor: "pointer",
        }}
        onClick={onNextStepCCMob2}
      >
        Prev
      </div>
      <div
        style={{
          position: "absolute",
          top: "633px",
          left: "35px",
          borderRadius: "8px",
          backgroundColor: "#02044a",
          width: "320px",
          height: "50px",
          cursor: "pointer",
        }}
        onClick={onNextStepISMob2}
      />
      
      <div
        style={{
          position: "absolute",
          top: "648px",
          left: "165px",
          fontSize: "14px",
          letterSpacing: "-0.02em",
          lineHeight: "20px",
          fontWeight: "500",
          fontFamily: "Inter",
          color: "#fff",
          textAlign: "left",
        }}
      >
        Next step
      </div>
      <div
        style={{
          position: "absolute",
          top: "780px",
          left: "35px",
          width: "320px",
          height: "6px",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0%",
            right: "0%",
            bottom: "0%",
            left: "0%",
            borderRadius: "2px",
            backgroundColor: "#d9d9d9",
          }}
        />
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "87.5%",
            top: "0%",
            right: "12.5%",
            bottom: "0%",
            left: "0%",
            borderRadius: "2px",
            backgroundColor: "#1b5bff",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "35px",
          left: "35px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
        }}
      >
        Logo
      </div>
      <div
        style={{
          position: "absolute",
          top: "350px",
          left: "53px",
          width: "285px",
          height: "48px",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0%",
            right: "0%",
            bottom: "0%",
            left: "0%",
            borderRadius: "8px",
            backgroundColor: "#d9d9d9",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "calc(100% - 134px)",
            top: "calc(50% - 12px)",
            left: "48px",
            letterSpacing: "-0.02em",
            lineHeight: "24px",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "24px",
          }}
          onClick={() => handleSoilTypeSelect("100000-200000")}
        >
          100000-200000
          {selectedSoilType === "100000-200000" && (
            <img
              className={styles.checkCircleIcon1}
              alt=""
              src="/check-circle.svg"
            />
          )}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "404px",
          left: "51px",
          
          borderRadius: "8px",
          
          boxSizing: "border-box",
          width: "289px",
          height: "52px",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0%",
            right: "0%",
            bottom: "0%",
            left: "0%",
            borderRadius: "8px",
            backgroundColor: "#d9d9d9",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "calc(100% - 134px)",
            top: "calc(50% - 12px)",
            left: "48px",
            letterSpacing: "-0.02em",
            lineHeight: "24px",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "24px",
          }}
          onClick={() => handleSoilTypeSelect("300000-400000")}
        >
          300000-400000
          {selectedSoilType === "300000-400000" && (
            <img
              className={styles.checkCircleIcon1}
              alt=""
              src="/check-circle.svg"
            />
          )}
        </div>
        
      </div>
      <div
        style={{
          position: "absolute",
          top: "462px",
          left: "56px",
          width: "285px",
          height: "48px",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0%",
            right: "0%",
            bottom: "0%",
            left: "0%",
            borderRadius: "8px",
            backgroundColor: "#d9d9d9",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "calc(100% - 134px)",
            top: "calc(50% - 12px)",
            left: "48px",
            letterSpacing: "-0.02em",
            lineHeight: "24px",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "24px",
            whiteSpace:"nowrap",
          }}
          onClick={() => handleSoilTypeSelect("400000-500000")}
        >
          400000-500000
          {selectedSoilType === "400000-500000" && (
            <img
              className={styles.checkCircleIcon1}
              alt=""
              src="/check-circle.svg"
            />
          )}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "518px",
          left: "56px",
          width: "285px",
          height: "48px",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0%",
            right: "0%",
            bottom: "0%",
            left: "0%",
            borderRadius: "8px",
            backgroundColor: "#d9d9d9",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "calc(100% - 134px)",
            top: "calc(50% - 12px)",
            left: "48px",
            letterSpacing: "-0.02em",
            lineHeight: "24px",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "24px",
            whiteSpace:"nowrap",
          }}
          onClick={() => handleSoilTypeSelect("500000-600000")}
        >
          500000-600000
          {selectedSoilType === "500000-600000" && (
            <img
              className={styles.checkCircleIcon1}
              alt=""
              src="/check-circle.svg"
            />
          )}
        </div>
      </div>
    </div>
)}
{showISMob2 && (
  <div
      style={{
        width: "100%",
        position: "relative",
        backgroundColor: "#fff",
        height: "844px",
        overflow: "hidden",
        textAlign: "center",
        fontSize: "16px",
        color: "#000",
        fontFamily: "Poppins",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "206px",
          left: "35px",
          width: "320px",
          height: "400px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            borderRadius: "16px",
            backgroundColor: "#dfdfdf",
            width: "320px",
            height: "400px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "35px",
            left: "35px",
            width: "156px",
            height: "24px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              letterSpacing: "1px",
              lineHeight: "24px",
              fontWeight: "600",
               whiteSpace:"nowrap",
            }}
          >
            Storage capacity
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "98px",
          left: "49px",
          fontSize: "24px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
          textAlign: "left",
        }}
      >
        Agriculture information
      </div>
      <div
        style={{
          position: "absolute",
          top: "145px",
          left: "266px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "59px",
          height: "16px",
        }}
      >
        8 of 8
      </div>
      <div
        style={{
          position: "absolute",
          top: "288px",
          left: "53px",
          borderRadius: "8px",
          backgroundColor: "#d9d9d9",
          border: "1px solid #000",
          boxSizing: "border-box",
          width: "285px",
          height: "48px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "300px",
          left: "70px",
          letterSpacing: "-0.02em",
          lineHeight: "24px",
          fontWeight: "600",
        }}
      >
        what is the storage capacity?
      </div>
      <div
        style={{
          position: "absolute",
          top: "705px",
          left: "178px",
          letterSpacing: "-0.02em",
          lineHeight: "20px",
          fontWeight: "500",
          fontFamily: "Inter",
          textAlign: "left",
        }}
        onClick={onNextStepISMob1}
      >
        Prev
      </div>
      <div
        style={{
          position: "absolute",
          top: "633px",
          left: "35px",
          borderRadius: "8px",
          backgroundColor: "#02044a",
          width: "320px",
          height: "50px",
          cursor: "pointer",
        }}
        onClick={onNextSstepClickLast}
      />
      <div
        style={{
          position: "absolute",
          top: "648px",
          left: "165px",
          fontSize: "14px",
          letterSpacing: "-0.02em",
          lineHeight: "20px",
          fontWeight: "500",
          fontFamily: "Inter",
          color: "#fff",
          textAlign: "left",
        }}
      >
        Next step
      </div>
      <div
        style={{
          position: "absolute",
          top: "779px",
          left: "35px",
          width: "320px",
          height: "6px",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0%",
            right: "0%",
            bottom: "0%",
            left: "0%",
            borderRadius: "2px",
            backgroundColor: "#d9d9d9",
          }}
        />
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0%",
            right: "0%",
            bottom: "0%",
            left: "0%",
            borderRadius: "2px",
            backgroundColor: "#1b5bff",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "35px",
          left: "35px",
          letterSpacing: "1px",
          lineHeight: "24px",
          fontWeight: "600",
        }}
      >
        Logo
      </div>
      <div
        style={{
          position: "absolute",
          top: "353px",
          left: "53px",
          width: "285px",
          height: "48px",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0%",
            right: "0%",
            bottom: "0%",
            left: "0%",
            borderRadius: "8px",
            backgroundColor: "#d9d9d9",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "calc(100% - 134px)",
            top: "calc(50% - 12px)",
            left: "48px",
            letterSpacing: "-0.02em",
            lineHeight: "24px",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "24px",
          }}
          onClick={() => handleSoilTypeSelect("100-200 sqft")}
        >
          100-200 sqft
          {selectedSoilType === "100-200 sqft" && (
            <img
              className={styles.checkCircleIcon1}
              alt=""
              src="/check-circle.svg"
            />
          )}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "409px",
          left: "53px",
          width: "285px",
          height: "48px",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0%",
            right: "0%",
            bottom: "0%",
            left: "0%",
            borderRadius: "8px",
            backgroundColor: "#d9d9d9",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "calc(100% - 134px)",
            top: "calc(50% - 12px)",
            left: "48px",
            letterSpacing: "-0.02em",
            lineHeight: "24px",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "24px",
          }}
          onClick={() => handleSoilTypeSelect("200-400 sqft")}
        >
          200-400 sqft
          {selectedSoilType === "200-400 sqft" && (
            <img
              className={styles.checkCircleIcon1}
              alt=""
              src="/check-circle.svg"
            />
          )}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "463px",
          left: "54px",
          
          borderRadius: "8px",
          
          boxSizing: "border-box",
          width: "289px",
          height: "52px",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0%",
            right: "0%",
            bottom: "0%",
            left: "0%",
            
            borderRadius: "8px",
            backgroundColor: "#d9d9d9",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "calc(100% - 134px)",
            top: "calc(50% - 12px)",
            left: "48px",
            letterSpacing: "-0.02em",
            lineHeight: "24px",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "24px",
          }}
          onClick={() => handleSoilTypeSelect("400-600 sqft")}
        >
          400-600 sqft
          {selectedSoilType === "400-600 sqft" && (
            <img
              className={styles.checkCircleIcon1}
              alt=""
              src="/check-circle.svg"
            />
          )}
        </div>
        
      </div>
      <div
        style={{
          position: "absolute",
          top: "521px",
          left: "56px",
          width: "285px",
          height: "48px",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0%",
            right: "0%",
            bottom: "0%",
            left: "0%",
            borderRadius: "8px",
            backgroundColor: "#d9d9d9",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "calc(100% - 134px)",
            top: "calc(50% - 12px)",
            left: "48px",
            letterSpacing: "-0.02em",
            lineHeight: "24px",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "24px",
          }}
          onClick={() => handleSoilTypeSelect("600-800 sqft")}
        >
          600-800 sqft
          {selectedSoilType === "600-800 sqft" && (
            <img
              className={styles.checkCircleIcon1}
              alt=""
              src="/check-circle.svg"
            />
          )}
        </div>
      </div>
    </div>
)}
    </div>

      

  );
};

export default StartDesktop;
