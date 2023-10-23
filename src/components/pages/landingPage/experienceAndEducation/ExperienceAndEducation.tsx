import React from "react";
import "../experienceAndEducation/ExperienceAndEducation.scss";
import WrapperComponent from "../../../wrapperComponent/WrapperComponent";

const ExperienceEducation: React.FC = () => {
  const combinedExperienceAndEducationData = {
    items: [
      {
        id: "ee-1",
        type: "experience",
        title: "Frontend Engineer",
        dates: "2009-present",
        location: "USA",
        description:
          "Experienced frontend engineer specializing in web development, with a focus on enhancing accessibility and web performance. Passionate about delivering seamless user experiences and driving growth through cutting-edge technologies and innovative solutions.",
      },
      {
        id: "ee-2",
        type: "experience",
        title: "SDE 1",
        dates: "2022-2023",
        location: "USA",
        description:
          "Dedicated Software Development Engineer (SDEU) at AWS Amazon, with a focus on customer-centric features and optimizing the AWS Athena serverless query system. Committed to quality, performance, and security, while actively participating in feature projects and delivering results on time.",
      },
      {
        id: "ee-3",
        type: "experience",
        title: "Software Engineer Intern",
        dates: "2021-2022",
        location: "USA",
        description:
          "Enthusiastic Software Engineer Intern, specializing in user interface development. Proficient in ReactJS, React Native, and TypeScript. Played a key role in migrating legacy applications to ReactJS and improving user experiences through responsive design techniques.",
      },

      {
        id: "ee-4",
        type: "education",
        degree: "Master of Science in Computer Science",
        dates: "2021-2022",
        location: "USA",
        description:
          "Studied and delved deep into computer science, successfully completing ten subjects, and acquiring a wealth of knowledge in the field. GPA: 3.5/4",
      },
      {
        id: "ee-5",
        type: "experience",
        title: "Software Engineer",
        location: "India",
        description:
          "Experienced professional with a focus on developing and optimizing frontend components for single-page applications, enhancing user interactions and experiences. Proficient in improving application responsiveness and enabling dynamic user interface customization based on i",
      },
      {
        id: "ee-6",
        type: "education",
        degree: "Bachelor in Computer Science",
        dates: "2015-2019",
        location: "India",
        description:
          "Over a four-year program, I earned certification as a top-ranking student, successfully completing a rigorous curriculum of 32 subjects, which included hands-on computer labs and four distinct projects, demonstrating my commitment to academic excellence and practical application of knowledge.",
      },
    ],
  };

  return (
    <section className="ee-container">
      <WrapperComponent>
        <div className="ee-section">
          <div className="ee-titles">
            <h3 className="ee-title ">Experience</h3>
            <h3 className="ee-title ee-title-mobile">Education</h3>
          </div>
          <div className="ee-details">
            {combinedExperienceAndEducationData.items.map((item) => (
              <div key={item.id} className={`ee-entry-outer ${item.type}`}>
                <div className="ee-entry-inner">
                  <div className="ee-job-header">
                    <div className="ee-job-title">
                      {item.degree || item.title}
                    </div>
                    <div className="ee-job-details">{`${item.dates}, ${item.location}`}</div>
                  </div>
                  <div className="ee-description">{item.description}</div>
                </div>
              </div>
            ))}

            <div className="ee-titles">
              <h3 className="ee-title ee-title-seperate">Education</h3>
            </div>
          </div>
        </div>
      </WrapperComponent>
    </section>
  );
};

export default ExperienceEducation;
