export interface Projects {
  id: string | number;
  title: string;
  used: string;
  desc: string;
}

export interface ProjectDataProps {
  title: string;
  desc: string;
  projectList: Projects[];
}

const projectPageData = {
  title: "PROJECT PAGE",
  desc: `Here you will find all different types of project I have done in
  my free time. You explore more on frontend skills. Hope you learn
  something!`,
  projectList: [
    {
      id: 1,
      title: "React Project",
      used: "HTML, CSS, and Javascript",
      desc: "Over A Four-Year Program, I Earned Certification As A Top-Ranking Student, Successfully Completing A Rigorous Curriculum Of 32 Subjects,",
    },
    {
      id: 2,
      title: "React Project",
      used: "HTML, CSS, and Javascript",
      desc: "Over A Four-Year Program, I Earned Certification As A Top-Ranking Student, Successfully Completing A Rigorous Curriculum Of 32 Subjects,",
    },
    {
      id: 3,
      title: "React Project",
      used: "HTML, CSS, and Javascript",
      desc: "Over A Four-Year Program, I Earned Certification As A Top-Ranking Student, Successfully Completing A Rigorous Curriculum Of 32 Subjects,",
    },
    {
      id: 4,
      title: "Vanilla Project",
      used: "HTML, CSS, and JS",
      desc: "Over Aleting A Rigorous Curriculum Of 32 Subjects,",
    },
  ],
};

export default projectPageData;
