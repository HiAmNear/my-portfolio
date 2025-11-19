export const overviewData = {
  // 1. Thông tin cơ bản
  basicInfo: {
    name: "overview.basicInfo.private-name",
    location: "overview.basicInfo.location",
    email: "mahainhat@gmail.com",
    links: [
      { label: "LinkedIn", text: "Mã Hải Nhật", url: "https://www.linkedin.com/in/nh%E1%BA%ADt-m%C3%A3-h%E1%BA%A3i-43b3a7255/" },
      { label: "Github", text: "HiAmNear", url: "https://github.com/HiAmNear" }
    ]
  },

    skills: [
        // 1. NGÔN NGỮ (CORE) - Để lên đầu tiên
        {
        title: "overview.skills.core",
        items: [
            "Python",       // Ngôn ngữ chính
            "Golang",  // Backend startup
            "JavaScript",   // Frontend
            "SQL",          // Data
            "C# / .NET",    // Kinh nghiệm cũ
            "HTML / CSS / SCSS",
            "PostgreSQL",
            "Git / GitHub",
            "Docker",
        ]
        },
        
        // 2. AI & NLP (Các thư viện/tools chuyên dụng)
        {
        title: "overview.skills.ai",
        items: [
            "PyTorch", 
            "Transformers (HuggingFace)",
            "OpenCV",
            "Scikit-learn",
            "LLM APIs (GPT-4, Gemini)",
            "UnderTheSea"
        ]
        },

        // 3. DATA ENGINEERING (Các tool xử lý dữ liệu lớn)
        {
        title: "overview.skills.data-engineering",
        items: [
            "Selenium (Crawling)",
            "Apache Kafka",
            "PySpark",
            "Airflow",
        ]
        },

        // 4. WEB DEVELOPMENT (Frameworks & DevOps)
        {
        title: "overview.skills.web",
        items: [
            "ReactJS + Vite", 
            "react-i18next",
            "Django",
            "Unit Testing",
            "Robot Framework (Testing)",
            "Pylint / JSLint",
            "ESLint",
        ]
        }
    ],


  // 3. Giáo dục
  education: {
    languages: [
      "overview.edu.jp_n3",
      "overview.edu.english",
      "overview.edu.vietnamese"
    ],
    degrees: [
      {
        id: "master",
        level: "overview.edu.master_level",
        school: "overview.edu.school_uit",
        date: "12/2024 - {{now}}",
        details: ["overview.edu.master_thesis"]
      },
      {
        id: "bachelor",
        level: "overview.edu.bachelor_level",
        school: "overview.edu.school_uit",
        date: "08/2019 - 12/2023",
        details: ["overview.edu.gpa"]
      }
    ]
  }
};