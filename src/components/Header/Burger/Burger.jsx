import "./Burger.scss";

export const Burger = () => {
  return (
    <div className="header-burger">
      <button className="header-burger-btn burger">
        <div className="burger-box">
          <div className="burger-inner">
            <div className="top-bun"></div>
            <div className="patty"></div>
            <div className="bottom-bun"></div>
          </div>
        </div>
      </button>
    </div>
  );
};
