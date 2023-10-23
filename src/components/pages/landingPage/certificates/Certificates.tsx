import WrapperComponent from "../../../wrapperComponent/WrapperComponent";
import "./Certificates.scss";
import meta from "../../../../assets/images/meta-symbol.jpg";
const Certificates: React.FC = () => {
  const certificatesData = [
    {
      id: 1,
      title: "Version Control",
      img: meta,
    },
    {
      id: 2,
      title: "Advanced React",
      img: meta,
    },
    {
      id: 3,
      title: "Principles of UX/UI Design",
      img: meta,
    },
    {
      id: 4,
      title: "React Basics",
      img: meta,
    },
    {
      id: 5,
      title: "Programming with JavaScript",
      img: meta,
    },
    {
      id: 6,
      title: "HTML and CSS in depth",
      img: meta,
    },
    {
      id: 7,
      title: "Front-End Developer Capstone",
      img: meta,
    },
    {
      id: 8,
      title: "Introduction to Front-End Development",
      img: meta,
    },
  ];
  return (
    <section className="certificates-section">
      <WrapperComponent>
        <div className="certificates-container">
          <h2 className="certificates-header">Certificates</h2>
          <ul className="certificates-all-cards">
            {certificatesData.map((data) => (
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
