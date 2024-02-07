import "./Product.scss";
import prodImg from "/ocean.jpg";
import iconArrowUp from "../../../assets/icon_arrow-up.svg";
import iconArrowDown from "../../../assets/icon_arrow-down.svg";

export const Product = () => {
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
          {/* Nimue */}
          <div className="product-item">
            <button className="product-btn" type="button">
              <div className="product-title">Nimue</div>
              <img src={iconArrowUp} alt="Icon Contact" />
            </button>
            <div className="">
              Den nya generationens derma cosmeceutical. NIMUE motarbetar hudens
              biologiska nedbrytning genom att arbeta med den rätta
              koncentrationen i de rätta kombinationerna och i de rätta
              styrkorna av Alpha Hydroxy Syror, C- o E-vitamin- estrar och Alpha
              Lipoic Syra. Nimue lär huden använda sina egna naturliga
              funktioner för att återställa och bibehålla en hälsosam balans.
            </div>
          </div>
          {/* pHformula */}
          <div className="product-item">
            <button className="product-btn" type="button">
              <div className="product-title">pHformula</div>
              <img src={iconArrowDown} alt="Icon Contact" />
            </button>
            <div className="overflow-hidden">
              pHformula – är en pharma-cosmeceutical vilken är i gränslandet
              mellan den nya generationen av cosmeceuticals och läkemedel. Denna
              dermatologiska teknologi återskapar en optimalt välmående hud och
              fokuserar på ett antal olika hudtillstånd, t.ex. för tidigt
              åldrande, känslig hud, rosacea, acne och hyperpigmenterad hud.
            </div>
          </div>
          {/* DrK Dermal Health Care*/}
          <div className="product-item">
            <button className="product-btn" type="button">
              <div className="product-title">DrK Dermal Health Care</div>
              <img src={iconArrowDown} alt="Icon Contact" />
            </button>
            <div className="overflow-hidden"></div>
          </div>
          {/* Happy Paul */}
          <div className="product-item">
            <button className="product-btn" type="button">
              <div className="product-title">Happy Paul</div>
              <img src={iconArrowDown} alt="Icon Contact" />
            </button>
            <div className="overflow-hidden"></div>
          </div>
          {/* Dermapen*/}
          <div className="product-item">
            <button className="product-btn" type="button">
              <div className="product-title">Dermapen</div>
              <img src={iconArrowDown} alt="Icon Contact" />
            </button>
            <div className="overflow-hidden"></div>
          </div>
          {/* Selahatin */}
          <div className="product-item">
            <button className="product-btn" type="button">
              <div className="product-title">Selahatin</div>
              <img src={iconArrowDown} alt="Icon Contact" />
            </button>
            <div className="overflow-hidden"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
