export const projectsData = [
    {
      id: 1,
      name: "Automated Data Pipeline Builder",
      description:
        "Developed a complete web application that allows users to design, trigger, and visualize automated data pipelines through a simple configuration interface. Implemented an event-driven architecture using Kafka and Debezium to trigger pipelines upon new data or updates. Built two integrated ingest–transform systems: a Meltano-based stack and a high-performance dlt + SQLMesh version. Added AI-powered adaptive transformations using Gemini 2.0 and n8n. Integrated Apache Superset for real-time visualization and implemented authentication using Keycloak.",
      tools: [
        "Apache Kafka",
        "Debezium",
        "Meltano",
        "dlt",
        "SQLMesh",
        "FastAPI",
        "React",
        "Apache Superset",
        "Gemini 2.0",
        "n8n",
        "Keycloak"
      ],
      role: "Data Engineering Intern",
      code: "https://github.com/wissemhammoudi/even-driven-pipeline-builder",
      demo: "",
    },
  
    {
      id: 2,
      name: "Resume Screening & RAG Fusion Chatbot",
      description:
        "Developed an AI agent capable of extracting key information from résumés using the LlamaParse API. Implemented a RAG Fusion–based chatbot to match candidates to complex job descriptions. Collected over 100 CVs through web scraping using BeautifulSoup and Selenium. Designed and deployed a full-stack application integrating these features using FastAPI for the backend and React.js for the frontend.",
      tools: [
        "Python",
        "LlamaParse API",
        "BeautifulSoup",
        "Selenium",
        "FastAPI",
        "React.js",
        "Docker",
        "Large Language Models"
      ],
      role: "AI & Data Engineering Intern",
      code: "https://github.com/wissemhammoudi/RH-chabot-using-RAG-Fusion",
      demo: "",
    },
  
    {
      id: 3,
      name: "SQL Server Change Data Capture Benchmark",
      description:
        "Implemented and benchmarked log-based and trigger-based Change Data Capture (CDC) using SQL Server. Executed 100,000 update queries using SQLQueryStress, demonstrating that log-based CDC is 55 seconds faster and more resource-efficient. Created dashboards to visualize user behavior and system metrics.",
      tools: ["SQL Server", "SQLQueryStress", "Power BI"],
      role: "Data Engineering Intern",
      code: "",
      demo: "",
    },
  
    {
      id: 4,
      name: "Fantasy Premier League Analytics Dashboard",
      description:
        "Designed and developed an interactive Power BI dashboard that analyzes Fantasy Premier League player performance, highlights top selections, and provides real-time insights through automated data refresh.",
      tools: ["Power BI", "FPL API"],
      role: "Data Analyst / BI Developer",
      code: "https://github.com/wissemhammoudi/Fantazy-Premier-League-Power-Bi-dashboard",
      demo: "",
    },
  
    {
      id: 5,
      name: "ETL Pipeline with dbt and DuckDB",
      description:
        "Built a complete ETL pipeline using dbt and DuckDB to transform raw data into a clean star schema. Added testing, documentation, and modular SQL models to ensure reliability and maintainability.",
      tools: ["dbt", "DuckDB", "SQL"],
      role: "Data Engineer",
      code: "https://github.com/wissemhammoudi/etl-using-Dbt-and-DuckDB.git",
      demo: "",
    },
  
    {
      id: 6,
      name: "Real-Time Weather Data Streaming",
      description:
        "Simulated real-time weather data from five stations and streamed it using Apache Kafka. Processed the data using Apache Spark for transformation and aggregation. Built a live dashboard with Dash to visualize weather trends and KPIs.",
      tools: ["Apache Kafka", "Apache Spark", "Dash", "Python"],
      role: "Data Engineer",
      code: "https://github.com/wissemhammoudi/Spark",
      demo: "",
    },
  
    {
      id: 7,
      name: "ENET’Com Forum Website",
      description:
        "Developed the official website for the ENET’Com Forum event, providing information about speakers, partners, schedules, and registration.",
      tools: ["HTML", "CSS", "JavaScript"],
      role: "Frontend Developer",
      code: "https://github.com/wissemhammoudi/Site-Web-Dynamique-Mental-Health-Blog--MERN-",
      demo: "https://site-web-statique-forum-enetcom-2023.onrender.com/",
    },
  
    {
      id: 8,
      name: "Mental Health Blog Website",
      description:
        "Built a dynamic blog platform focusing on mental health awareness, featuring articles, recommendations, and a clean, responsive UI.",
      tools: ["Node.js", "Express", "MongoDB", "EJS"],
      role: "Full Stack Developer",
      code: "https://github.com/wissemhammoudi/Site-Web-Statique-Forum-Enetcom-2023",
      demo: "https://site-web-dynamique-mental-health-blog.onrender.com/",
    }
  ];
  