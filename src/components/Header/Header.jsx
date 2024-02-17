import { useState, useEffect, useRef } from "react";
import "./Header.scss";
import { TitleLogo } from "./TitleLogo/TitleLogo";
import { NavBar } from "./NavBar/NavBar";
import { Burger } from "./Burger/Burger";

export const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const heroRef = useRef(null);

  const handleBurgerClick = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = heroRef.current.clientHeight;
      const threshold = heroHeight * 9; // Adjust the multiplier based on your needs

      setIsScrolled(scrollPosition > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div ref={heroRef} className="hero">
        <div className="header-wrapper">
          <div className="header-inner">
            {/* Menu Desktop */}
            <div
              className="header-display-desktop"
              data-content-field="site-title"
            >
              <div className="header-title-nav-wrapper">
                {/* Title and Navigation */}
                <TitleLogo isScrolled={isScrolled} />
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
                <TitleLogo isScrolled={isScrolled} />
              </div>
              <Burger isOpen={isMobileMenuOpen} onClick={handleBurgerClick} />
            </div>
          </div>
        </div>
        {/* (Mobile Menu Navigation) */}
      </div>
    </header>
  );
};
