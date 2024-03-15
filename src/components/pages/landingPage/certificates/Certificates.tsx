import WrapperComponent from "../../../wrapperComponent/WrapperComponent";
import "./Certificates.scss";
import { CertificateProps } from "../../../../data/landingPageData";

interface CertificatesSecProps {
  certifcatesData: CertificateProps[];
}
const Certificates: React.FC<CertificatesSecProps> = ({ certifcatesData }) => {
  return (
    <section className="certificates-section">
      <WrapperComponent>
        <div className="certificates-container">
          <h2 className="certificates-header">Certificates</h2>
          <ul className="certificates-all-cards">
            {certifcatesData.map((data) => (
              <li key={data.id} className="certificates-card">
                <img src={data.img} alt="card-img" />
                <h3>{data.title}</h3>
              </li>
            ))}
          </ul>
        </div>
      </WrapperComponent>
    </section>
  );
};

export default Certificates;
