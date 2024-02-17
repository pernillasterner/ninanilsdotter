import "./Hero.scss";
import heroImage from "/hero-molecular.jpg";
import heroVideo from "/hero.mp4";

export const Hero = () => {
  return (
    <section className="hero-container">
      <video
        width={1411}
        height={731}
        className="hero-video"
        src={heroVideo}
        poster={heroImage}
        autoPlay
        loop
        playsInline
      >
        <source src={heroVideo} type="video/mp4"></source>
      </video>
      <video
        width={1411}
        height={731}
        className="hero-video mobile"
        src={heroVideo}
        poster={heroImage}
        autoPlay
        loop
        playsInline
      >
        <source src={heroVideo} type="video/mp4"></source>
      </video>
      <div className="hero-content">
        <h1 className="hero-title">Välbefinnande och balans</h1>
        <p className="hero-text">
          För mig innebär bra hud- och kroppsvård en bit på vägen till
          välbefinnande och att känna sig i balans och lycklig med sig själv.
        </p>
        <button className="hero-btn" aria-label="Boka Nu">
          <a href="mailto:info@ninanilsdotter.se">kontakt</a>
        </button>
      </div>
    </section>
  );
};
