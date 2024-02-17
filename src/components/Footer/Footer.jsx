import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* <div className="message">Det är du som är i fokus!</div> */}
        <div className="contact">
          {/* <div className="info">
            <p>Hör av dig text.</p>
          </div> */}
          <div className="contact-btn">
            <button>
              <a href="mailto:info@ninanilsdotter.se">kontakt</a>
            </button>
          </div>
          <div className="adress-info">
            {/* <p className="mail">info@ninanilsdotter.se</p> */}
            <h3 className="adress">Luntmakargatan 70, 113 51 Stockholm</h3>
            <h3 className="telefon">070 - 881 98 18</h3>
            <p>
              Nina Nilsdotter | All rights reserved. Site build and designed by{" "}
              <a href="https://pernillasterner.se/" target="_blank">
                Pernilla Sterner
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
