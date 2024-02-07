import "./TitleLogo.scss";
import headerLogo from "/logo.svg";

export const TitleLogo = () => {
  return (
    <div className="header-title">
      {/* Title */}
      <div className="header-title-logo">
        <a href="/">
          <img src={headerLogo} alt="Nina Nilsdotter" />
          {/* ninanilsdotter */}
        </a>
      </div>
    </div>
  );
};
