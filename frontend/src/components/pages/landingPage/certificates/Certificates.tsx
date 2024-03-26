import WrapperComponent from "../../../wrapperComponent/WrapperComponent";
import "./Certificates.scss";
import { CertificateProps } from "../../../../data/landingPageData";

const Certificates: React.FC<{ certifcatesData: CertificateProps[] }> = ({
  certifcatesData,
}) => {
  return (
    <section className="certificates-section">
      <WrapperComponent>
        <div className="certificates-container">
          <h2 className="certificates-header">CERTIFICATES</h2>
          <ul className="certificates-items">
            {certifcatesData.map((data) => (
              <li key={data.id} className="certificates-item">
                <a href="/">
                  <span>{data.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </WrapperComponent>
    </section>
  );
};

export default Certificates;
