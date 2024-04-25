import { memo, useMemo } from "react";
import "../global.css";


const DropdownMedium = memo(
  ({
    dropdownTitle,
    dropdownOption,
    propWidth,
    propAlignSelf,
    propFlex,
    propMinWidth,
  }) => {
    const dropdownMediumStyle = useMemo(() => {
      return {
        width: propWidth,
        alignSelf: propAlignSelf,
        flex: propFlex,
        minWidth: propMinWidth,
      };
    }, [propWidth, propAlignSelf, propFlex, propMinWidth]);

    return (
      <div className="dropdownmedium3" style={dropdownMediumStyle}>
        <div className="dropdown-title4">{dropdownTitle}</div>
        <div className="input-field7">
          <div className="text4">
            <div className="dropdown-option4">{dropdownOption}</div>
            <img className="icon4" alt="" src="/icon.svg" />
          </div>
        </div>
      </div>
    );
  }
);

export default DropdownMedium;
