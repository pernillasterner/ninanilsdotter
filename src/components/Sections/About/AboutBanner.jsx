import "./AboutBanner.scss";
import iconLocation from "../../../assets/icon_location.svg";
import iconContact from "../../../assets/icon_phone.svg";

export const AboutBanner = () => {
  return (
    <div className="banner-container">
      <div className="left-box"></div>
      <div className="right-box">
        <div className="location">
          {/* <img src={iconLocation} alt="Icon Location" /> */}
          <h4>Location</h4>
          <p>Luntmakargatan 73</p>
          <p>111 51 Stockholm</p>
        </div>
        <div className="contact">
          {/* <img src={iconContact} alt="Icon Contact" /> */}
          <h4>Kontakt</h4>
          <p>T: 08-650 88 88</p>
          <p>info@ninanilsdotter.se</p>
        </div>
      </div>
    </div>
  );
};
