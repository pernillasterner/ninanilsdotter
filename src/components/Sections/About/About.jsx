import "./About.scss";
import aboutNinaImage from "/nina_nilsdotter_w800h1132-724x1024.jpg";
import signatureImage from "/nina_nilsdotter_signature_small.png";
import { AboutBanner } from "./AboutBanner";

export const About = () => {
  return (
    <section className="about-container">
      <div className="about-img">
        <img src={aboutNinaImage} alt="Nina Nilsdotter" />
      </div>
      <div className="about-content">
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor.
        </p>
        <div className="signature">
          <img src={signatureImage} alt="Signature" />
        </div>
      </div>
      <AboutBanner />
    </section>
  );
};
