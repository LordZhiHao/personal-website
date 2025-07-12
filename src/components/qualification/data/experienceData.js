// experienceData.js
import NUSLogo from "../../../assets/NUS-logo.png";
import whollyGreen from "../../../assets/whollyGreen.png";
import azureTide from "../../../assets/azt.png";
import continental from "../../../assets/continental.png";
import jtc from "../../../assets/jtc.png";
import munichRe from "../../../assets/munich-re.png";

export const experienceData = [
  {
    id: "munich_re",
    title: "Data Science Intern",
    subtitle: "Munich Re",
    calendar: "May 2025 - Dec 2025",
    position: "left",
    logo: munichRe,
    modalTitle: "Munich Re",
    modalDescription: "<strong>Data Science Intern</strong>",
    modalDetails: [
      "Designed an OCR evaluation framework for underwriting documents (checkboxes, handwriting, tables, multi-doc formats); adopted across the department for GenAI solution benchmarking.",
      "Built and deployed a document classifier for underwriting documents (11 classes), achieving 90% accuracy and 92% weighted F1-score using a LLaMA 3.3-based LLM model.",
      "Exploring and comparing alternative document classification approaches, including Visual-Language Models (VLMs) with Mistral (68% accuracy) and fine-tuned LayoutLM (92% accuracy).",
      "Developed ensemble model using both LLaMa 3.3-based LLM model and fine-tuned LayoutLM to deliver high confidence predictions and highlight ambiguous files for review.",
    ],
  },
  {
    id: "wholly_green",
    title: "Data Scientist Intern",
    subtitle: "Wholly Greens Pte. Ltd.",
    calendar: "Jan 2025 - May 2025",
    position: "right",
    logo: whollyGreen,
    modalTitle: "Wholly Greens Pte. Ltd.",
    modalDescription: "<strong>Data Scientist Intern</strong>",
    modalDetails: [
      "Developed object identification and classification model using YOLO model and CVAT platform, creating a robust data pipeline to accurately identify objects retrieved by users from vending machines.",
      "Conducted time series analysis to perform demand forecasting for over 40 SKUs across 400+ vending machine locations, reducing waste and improving profit margins.",
      "Delivered PowerBI dashboard to visualize forecasted demand for each vending machine and SKU, enabling accurate daily restocking decisions and optimizing inventory management.",
    ],
  },
  {
    id: "azure_tide",
    title: "Data Analyst Intern",
    subtitle: "Azure Tide Holdings Pte. Ltd.",
    calendar: "Aug 2024 - Jan 2025",
    position: "left",
    logo: azureTide,
    modalTitle: "Azure Tide Holdings Pte. Ltd.",
    modalDescription: "<strong>Data Analyst Intern</strong>",
    modalDetails: [
      "Utilized Python to integrate with 5+ APIs (CoinMarketCap, CoinGecko, Debank, Binance, Blockchain.com) to collect and process data for over 20+ cryptocurrencies and wallets",
      "Automated daily updates of cryptocurrency prices and conducted due diligence on counterparties' financial situations, reducing manual workload by 90% per day and improving data accuracy",
      "Streamlined the distribution of financial and market updates to 10+ stakeholders via Sheety, Slack, and Telegram APIs, reducing the update time by 80% and ensuring real-time communication",
    ],
  },
  {
    id: "continental",
    title: "Data Analytics Intern",
    subtitle: "Continental AG",
    calendar: "Jan 2024 - Jun 2024",
    position: "right",
    logo: continental,
    modalTitle: "Continental AG",
    modalDescription: "<strong>Data Analytics Intern</strong>",
    modalDetails: [
      "Designed and implemented a PowerBI dashboard to compare and filter similar projects, aiding project managers in identifying past project details and costs",
      "Proposed and executed a redesign of the data relationships between 20+ tables in the project details management dashboard, streamlining data flows and improving efficiency",
      "Employed PowerQuery for data cleaning and manipulation, and leveraged DAX measures to calculate key metrics (mean, median, standard deviation) for real-time project cost management",
    ],
  },
  {
    id: "jtc",
    title: "Data Science Intern",
    subtitle: "Jurong Town Corporation (JTC)",
    calendar: "May 2023 - Aug 2023",
    position: "left",
    logo: jtc,
    modalTitle: "Jurong Town Corporation (JTC)",
    modalDescription: "<strong>Data Science Intern</strong>",
    modalDetails: [
      "Conducted data cleansing, preprocessing, feature engineering, and developed machine learning models to accurately predict the occupancy rate of sub-segments within the industrial property sector",
      "Improved Mean Absolute Error of model predictions to 0.21% quarterly hence reducing the number of occupancy rate surveys needed by the company from 4 to 2 times per year",
      "Identified and visualized key factors that significantly contribute to higher premiums observed in both food and generic industrial space",
    ],
  },
  {
    id: "ta",
    title: "Teaching Assistant",
    subtitle: "National University of Singapore (School of Computing)",
    calendar: "Jan 2023 - Dec 2023",
    position: "right",
    logo: NUSLogo,
    modalTitle: "National University of Singapore (School of Computing)",
    modalDescription: "<strong>Teaching Assistant</strong>",
    modalDetails: [
      "Facilitated a 25-student tutorial class to conduct discussion and learning on computing ethics and data privacy challenges in contemporary culture",
      "Collaborated with another Teaching Assistant to grade and review assignments for course participants",
    ],
  },
];
