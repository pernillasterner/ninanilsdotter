import "./NavBar.scss";

export const NavBar = () => {
  return (
    <div className="header-nav">
      {/* Nav */}
      <div className="header-nav-wrapper">
        <nav className="header-nav-list">
          <div className="header-nav-item">
            <a href="#about">Om Nina</a>
          </div>
          <div className="header-nav-item">
            <a href="#product">Produkter</a>
          </div>
          <div className="header-nav-item">
            <a href="#treatment">Behandlingar</a>
          </div>
          <div className="header-nav-item">
            <a href="#">
              <strong>070-881 98 18</strong>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};
