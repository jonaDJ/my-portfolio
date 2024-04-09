import WrapperComponent from "../../../wrapperComponent/WrapperComponent";
import "./Certificates.scss";
import { CertificateProps } from "../landingPageData";

const Certificates: React.FC<{ certificates: CertificateProps[] }> = ({
  certificates,
}) => {
  return (
    <section className="certificates-section">
      <WrapperComponent>
        <div className="certificates-container">
          <h2 className="certificates-header">CERTIFICATES</h2>
          <ul className="certificates-items">
            {certificates.map((data) => (
              <li key={data._id} className="certificates-item">
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
