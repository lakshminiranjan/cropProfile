import { memo, useMemo } from "react";
import "../global.css";

const InputFieldtype = memo(
  ({
    label,
    mailOutline,
    rakigmailcom,
    propWidth,
    propFlex,
    propMinWidth,
    propFlex1,
  }) => {
    const dropdownMediumInstanceStyle = useMemo(() => {
      return {
        width: propWidth,
      };
    }, [propWidth]);

    const frameDivStyle = useMemo(() => {
      return {
        flex: propFlex,
      };
    }, [propFlex]);

    const rakigmailcomStyle = useMemo(() => {
      return {
        minWidth: propMinWidth,
        flex: propFlex1,
      };
    }, [propMinWidth, propFlex1]);

    return (
      <div className="input-fieldtype113">
        <div className="error21">*error</div>
        <div className="label13">{label}</div>
        <input className="rectangle-input" type="text" />
        <div
          className="dropdown-medium-instance"
          style={dropdownMediumInstanceStyle}
        >
          <div
            className="contact-or-phone-or-location-i-parent"
            style={frameDivStyle}
          >
            <div className="contact-or-phone-or-location-i">
              <img
                className="mail-outline-icon9"
                loading="lazy"
                alt=""
                src={mailOutline}
              />
            </div>
            <div className="rakigmailcom13" style={rakigmailcomStyle}>
              {rakigmailcom}
            </div>
          </div>
        </div>
        <img className="add-icon9" alt="" src="/add.svg" />
        <div className="input-fieldtype1-child23" />
      </div>
    );
  }
);

export default InputFieldtype;
