import "./NavBar.scss";

export const NavBar = ({ isOpen }) => {
  return (
    <div className="header-nav">
      {/* Nav */}
      <div className="header-nav-wrapper">
        <nav className={`header-nav-list ${isOpen ? "open" : ""}`}>
          <div className="header-nav-item">
            <a href="#about">Om Nina</a>
          </div>
          <div className="header-nav-item">
            <a href="#product">Varumärken</a>
          </div>
          <div className="header-nav-item">
            <a href="#treatment">Behandlingar</a>
          </div>
          <div className="header-nav-item">
            <a href="#">
              <span>Messa mig!</span>
              <strong>070-881 98 18</strong>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};
