import { TitleLogo } from "../TitleLogo/TitleLogo";
import "./NavBar.scss";

export const NavBar = () => {
  return (
    <header>
      <div className="header-container">
        <div className="header-display-desktop" data-content-field="site-title">
          <TitleLogo />
        </div>
        {/* <div
          className="header-display-mobile"
          data-content-field="site-title"
        ></div> */}
      </div>
    </header>
  );
};
