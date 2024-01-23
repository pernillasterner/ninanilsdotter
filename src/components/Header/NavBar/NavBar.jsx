import "./NavBar.scss";

export const NavBar = () => {
  return (
    <div className="header-nav">
      {/* Nav */}
      <div className="header-nav-wrapper">
        <nav className="header-nav-list">
          <div className="header-nav-item">
            <a href="#produkter">Produkter</a>
          </div>
          <div className="header-nav-item">
            <a href="#behandlingar">Behandlingar</a>
          </div>
          <div className="header-nav-item">
            <a href="#erbjudanden">Erbjudanden</a>
          </div>
          <div className="header-nav-item">
            <a href="#kontakt">Kontakt</a>
          </div>
        </nav>
      </div>
    </div>
  );
};
