import "./Hero.scss";
import heroImage from "/hero-molecular.jpg";
import heroVideo from "/hero.mp4";

export const Hero = () => {
  return (
    // <section
    //   className="hero-container"
    //   style={{
    //     backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url(${heroImage})`,
    //   }}
    // >
    //   <div className="hero-content">
    //     <h1 className="hero-title">Välbefinnande och balans</h1>
    //     <p className="hero-text">
    //       För mig innebär bra hud- och kroppsvård en bit på vägen till
    //       välbefinnande och att känna sig i balans och lycklig med sig själv.
    //     </p>
    //     <button className="hero-btn">boka en tid</button>
    //   </div>
    // </section>

    <section className="hero-container">
      <video
        className="hero-video"
        src={heroVideo}
        autoPlay
        loop
        playsinline
      ></video>
      <div className="hero-content">
        <h1 className="hero-title">Välbefinnande och balans</h1>
        <p className="hero-text">
          För mig innebär bra hud- och kroppsvård en bit på vägen till
          välbefinnande och att känna sig i balans och lycklig med sig själv.
        </p>
        <button className="hero-btn">boka en tid</button>
      </div>
    </section>
  );
};
