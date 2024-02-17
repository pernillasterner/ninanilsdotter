import "./Product.scss";
// import prodImg from "/ocean.jpg";
import offerImg from "../../../assets/offers/phformula-feb.png";
import iconArrowUp from "../../../assets/icon_arrow-up.svg";
import iconArrowDown from "../../../assets/icon_arrow-down.svg";
import { useState } from "react";
import products from "../../../data/products.json";

export const Product = () => {
  const [activeDropdown, setActiveDropdown] = useState(false);

  const handleDropdown = (key) => {
    setActiveDropdown((prev) => (prev === key ? null : key));
  };

  return (
    <section id="product" className="product-container">
      <div
        className="left-box"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url(${offerImg})`,
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
                {product.description.split("\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
                <a href={product.link} target="__blank">
                  Läs mer
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
