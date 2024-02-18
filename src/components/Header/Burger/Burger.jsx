import "./Burger.scss";

export const Burger = ({ isOpen, onClick }) => {
  return (
    <div className={`header-burger ${isOpen ? "open" : ""}`} onClick={onClick}>
      <button className="header-burger-btn burger">
        <div className="burger-box  burger">
          <div className={`burger-inner ${isOpen ? "cross" : ""}`}>
            <div className="top-bun"></div>
            <div className="patty"></div>
            <div className="bottom-bun"></div>
          </div>
        </div>
      </button>

      {/* Render navigation items only when the burger menu is open */}
      {isOpen && (
        <nav className="header-nav-list">
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
              <strong>070-881 98 18</strong>
            </a>
          </div>
        </nav>
      )}
    </div>
  );
};
