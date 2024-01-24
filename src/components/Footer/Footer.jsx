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
            <button>Kontakt</button>
          </div>
          <div className="adress-info">
            {/* <p className="mail">info@ninanilsdotter.se</p> */}
            <p className="adress">Luntmakargatan 70, 111 51 Stockholm</p>
            <p className="telefon">08 - 540 88 88</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
