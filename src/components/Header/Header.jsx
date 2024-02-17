import { useState } from "react";
import "./Header.scss";
import { TitleLogo } from "./TitleLogo/TitleLogo";
import { NavBar } from "./NavBar/NavBar";
import { Burger } from "./Burger/Burger";

export const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleBurgerClick = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="header-inner">
          {/* Menu Desktop */}
          <div
            className="header-display-desktop"
            data-content-field="site-title"
          >
            <div className="header-title-nav-wrapper">
              {/* Title and Navigation */}
              <TitleLogo />
              <NavBar />
            </div>
          </div>
          {/* Menu Mobile */}
          <div
            className="header-display-mobile"
            data-content-field="site-title"
          >
            <div className="header-title-nav-wrapper">
              {/* Title and Navigation */}
              <TitleLogo />
            </div>
            <Burger isOpen={isMobileMenuOpen} onClick={handleBurgerClick} />
          </div>
        </div>
      </div>
      {/* (Mobile Menu Navigation) */}
    </header>
  );
};
