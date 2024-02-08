import "./Product.scss";
import prodImg from "/ocean.jpg";
import iconArrowUp from "../../../assets/icon_arrow-up.svg";
import iconArrowDown from "../../../assets/icon_arrow-down.svg";
import { useState } from "react";
import products from "../../../data/products.json";

/*
productInfo.json

title
info
link to page Läs mer!


*/
export const Product = () => {
  const [activeDropdown, setActiveDropdown] = useState(false);

  const handleDropdown = (key) => {
    // Lägga till active classen
    setActiveDropdown((prev) => (prev === key ? null : key));
  };

  return (
    <section className="product-container">
      <div
        className="left-box"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url(${prodImg})`,
        }}
      ></div>
      <div className="right-box">
        <h3>Produkter</h3>
        <div className="product-list">
          {products.map((product) => (
            <div
              key={product.key}
              className="product-item"
              onClick={() => handleDropdown(product.key)}
            >
              <button className="product-btn" type="button">
                <h4 className="product-title">{product.title}</h4>
                <img
                  src={
                    activeDropdown === product.key ? iconArrowUp : iconArrowDown
                  }
                  alt="Icon Contact"
                />
              </button>
              <div
                className={`product-information ${
                  activeDropdown === product.key ? "active" : ""
                }`}
              >
                {product.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
