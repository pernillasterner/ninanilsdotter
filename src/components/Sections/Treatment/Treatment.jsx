import "./Treatment.scss";
import iconSHR from "../../../assets/SHR-Logga_1.png";
import iconCert from "../../../assets/cert.jpg";

export const Treatment = () => {
  return (
    <section className="treatment-container">
      <div className="text-banner">
        <p>
          Jag använder inga färdiga behandlingskoncept utan utgår istället helt
          från dina individuella behov och önskemål. Varje behandling
          skräddarsys för att säkerställa att du får den bästa och mest
          personliga upplevelsen, anpassad efter just dina förutsättningar och
          önskemål.
        </p>
        <div className="certificate-logo">
          <img
            src={iconSHR}
            alt="Sveriges Hudterapeuters Riksorganisation logo"
            width={489}
            height={345}
          />
          <img
            src={iconCert}
            alt="Sveriges Hudterapeuters Riksorganisation Logo"
            width={200}
            height={200}
          />
        </div>
      </div>

      <div className="treatments"></div>
    </section>
  );
};
