// educationData.js
import NUSLogo from "../../../assets/NUS-logo.png";
import UCLLogo from "../../../assets/ucl.png";
import ChungLing from "../../../assets/chungling.png";
import Gamuda from "../../../assets/gamuda.png";

export const educationData = [
  {
    id: "gamuda",
    title: "AI & Software Engineer Apprentice",
    subtitle: "Gamuda AI Academy",
    calendar: "Jan 2025 - Mar 2025",
    position: "right", // or "left"
    logo: Gamuda,
    modalTitle: "Gamuda AI Academy",
    modalDescription:
      "Selected as a student in Cohort 2 for specialised training and development in Artificial Intelligence (AI) & Machine Learning",
    modalDetails: [
      "Developed <strong>Bon AI-Petit</strong>, a LLM integrated web application using <strong>Vue.js and Vuetify</strong> for the frontend, and <strong>FastAPI, Google Cloud Services, PostgreSQL, and MongoDB</strong> for the backend.",
      "Utilized <strong>Vertex AI, MongoDB, and Gemini Pro</strong> to implement a <strong>RAG (Retrieval-Augmented Generation)</strong> architecture for accurate and personalized recipe recommendations.",
    ],
  },
  {
    id: "nus_bza",
    title: "BSc in Business Analytics",
    subtitle: "National University of Singapore (NUS)",
    calendar: "Aug 2021 - Dec 2025",
    position: "left",
    logo: NUSLogo,
    modalTitle: "National University of Singapore (NUS)",
    modalDescription: "BSc. in Business Analytics & Second Major in Economics",
    modalDetails: [
      "<strong>Academics:</strong> Second Major in Economics & Specialized in Machine Learning-based Analytics",
      "<strong>Awards:</strong> Certificate of Distinction in Analytics Techniques Knowledge Area, Financial Analytics Specialisation & Machine Learning Analytics Specialisation, ASEAN Undergraduate Scholarships",
      "CAP: 4.33/5.0",
    ],
  },
  {
    id: "ucl",
    title: "Data Analysis & Big Data Analytics",
    subtitle: "University College London (UCL)",
    calendar: "May 2024 - Aug 2024",
    position: "right",
    logo: UCLLogo,
    modalTitle: "University College London (UCL)",
    modalDescription:
      "Enrolled as Summer School student at UCL, taking up courses in Big Data Analytics and Data-Driven Application Development",
    modalDetails: [
      "Identified project requirements, developed Entity-Relational Diagrams, and implemented normalisation to come up with a final database system for a film agency to store data accurately and securely",
      "Performed exploratory data analysis (EDA), regression analysis and modelling on London Residential Real Estate data, accomplishing a final R-squared value of 83% and identifying actionable insights for the market.",
    ],
  },
  {
    id: "chungling",
    title: "High School Diploma (UEC)",
    subtitle: "Chung Ling Private High School",
    calendar: "Jan 2015 - Dec 2020",
    position: "left",
    logo: ChungLing,
    modalTitle: "Chung Ling Private High School",
    modalDescription: "High School Diploma (UEC)",
    modalDetails: [
      "<strong>UEC 7A1, 1A2</strong> - A1 (Advanced Mathematics II, Chemistry, Biology, Physics, Chinese, English, Malay), A2 (Advanced Mathematics I)",
      "<strong>SPM 9As, 1B+</strong> - A (Chinese, English, Malay, Physics, Biology, History, Math, Additional Math, Ethics), B+ (Chemistry)",
      "Elected President of St. John Ambulance in 2019, hosted and facilitated weekly and special event with regards to first-aide and teamwork for 50+ club members during the period",
    ],
  },
];
