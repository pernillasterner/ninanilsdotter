import "./About.scss";
import aboutNinaImage from "/nina_point_w800-752x1024.jpg";
import signatureImage from "/logo.svg";
import { AboutBanner } from "./AboutBanner";

export const About = () => {
  return (
    <section id="about" className="about-container">
      <div className="about-img">
        <img src={aboutNinaImage} alt="Nina Nilsdotter" />
      </div>
      <div className="about-content">
        <h2>Det är du som står i fokus!</h2>
        <p>
          Ibland måste man även stanna upp för att låta både kropp och själ
          återhämta sig. Min ambition är att Du skall uppnå denna balans och
          harmoni. Jag arbetar med en helhetssyn, detta innebär att
          behandlingar, produkter och information om hur man på bästa sätt
          vårdar sig hemma skall samspela för att uppnå bästa resultat.
        </p>
        <div className="signature">
          <img src={signatureImage} alt="Signature" width={174} height={81} />
        </div>
      </div>
      {/* <AboutBanner /> */}
    </section>
  );
};
