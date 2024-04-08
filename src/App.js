import { useState, useEffect } from "react";
import {
  
  useLocation,
} from "react-router-dom";
import StartDesktop from "./pages/StartDesktop/StartDesktop";
import NameInfo from "./pages/NameInfo/NameInfo";
import ContactLocation from "./pages/ContactLocation/ContactLocation";
import CultivationCrop from "./pages/CultivationCrop/CultivationCrop";
import DragDrop from "./pages/DragDrop/DragDrop";
import FarmInfoExp from "./pages/FarmInfoExp/FarmInfoExp";
import InvestmentStorage from "./pages/InvestmentStorage/InvestmentStorage";
import Last from "./pages/Last/Last";
import LocationSoilType from "./pages/LocationSoilType/LocationSoilType";
import UploadPic from "./pages/UploadPic/UploadPic";
import Mid from "./pages/Mid/Mid";
import UpdatedNameInfo from "./pages/UpdatedNameInfo/UpdatedNameInfo";



function App() {
  const [currentComponent, setCurrentComponent] = useState(null);
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    switch (pathname) {
      case "/":
        setCurrentComponent(<StartDesktop />);
        break;
      case "/nameinfo":
        setCurrentComponent(<NameInfo />);
        break;
      case "/mid":
        setCurrentComponent(<Mid />);
        break;
      case "/contactloc":
        setCurrentComponent(<ContactLocation />);
        break;
      case "/culcrop":
        setCurrentComponent(<CultivationCrop />);
        break;
      case "/dragdrop":
        setCurrentComponent(<DragDrop />);
        break;
      case "/farminfo":
        setCurrentComponent(<FarmInfoExp />);
        break;
      case "/investor":
        setCurrentComponent(<InvestmentStorage />);
        break;
      case "/last":
        setCurrentComponent(<Last />);
        break;
      case "/locsoiltyp":
        setCurrentComponent(<LocationSoilType />);
        break;
      case "/uploadpic":
        setCurrentComponent(<UploadPic />);
        break;
      case "/updtaedname":
        setCurrentComponent(<UpdatedNameInfo />);
        break;
      default:
        setCurrentComponent(null);
    }
  }, [pathname]);

  return (
    <>
      {currentComponent}
     
      
    </>
  );
}

export default App;
