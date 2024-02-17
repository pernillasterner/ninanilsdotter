import "./TitleLogo.scss";
import headerLogo from "/logo.svg";
import scrolledLogo from "/logo-dark.svg";

export const TitleLogo = ({ isScrolled }) => {
  console.log(isScrolled);
  return (
    <div className={`header-title ${isScrolled ? "scrolled" : ""}`}>
      {/* Title */}
      <div className="header-title-logo">
        <a href="/">
          <img
            src={isScrolled ? scrolledLogo : headerLogo}
            alt="Nina Nilsdotter"
          />
          {/* ninanilsdotter */}
        </a>
      </div>
    </div>
  );
};
