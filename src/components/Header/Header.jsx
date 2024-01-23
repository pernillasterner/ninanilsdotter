import "./Header.scss";
import { TitleLogo } from "./TitleLogo/TitleLogo";
import { NavBar } from "./NavBar/NavBar";

export const Header = () => {
  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="header-inner">
          {/* Menu Desktop */}
          <div
            className="header-display-desktop"
            data-content-field="site-title"
          >
            <TitleLogo />
            <NavBar />
          </div>
          {/* Menu Mobile */}
          <div
            className="header-display-mobile"
            data-content-field="site-title"
          >
            <TitleLogo />
            <NavBar />
          </div>
        </div>
      </div>
    </header>
  );
};
