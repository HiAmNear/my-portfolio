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
            // "Golang",  // Backend startup (NiaColor)
            "JavaScript",   // Frontend
            "SQL",          // Data
            "C# / .NET",    // Kinh nghiệm cũ
            "C++",          // DXC - backend server
            "Java",         // DXC - web
            "Visual Basic / VBA",
            // "HTML / CSS / SCSS", // SCSS dùng cho NiaColor
            "HTML / CSS",
            "PostgreSQL",
            "Git / GitHub",
            "Docker",
            "Makefile",
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
            // "LLM APIs (GPT-4, Gemini)",
            "Together AI APIs",
            "UnderTheSea",
            "Devin AI (AI-assisted development)",
            "GitHub Copilot / Copilot Chat",
            "Claude",
        ]
        },

        // 3. DATA ENGINEERING (Các tool xử lý dữ liệu lớn)
        {
        title: "overview.skills.data-engineering",
        items: [
            "Selenium (Crawling)",
            "Apache Kafka",
            "PySpark",
            // "Airflow", // chưa có dự án minh chứng
        ]
        },

        // 4. WEB DEVELOPMENT (Frameworks & DevOps)
        {
        title: "overview.skills.web",
        items: [
            // "ReactJS + Vite", // NiaColor
            // "react-i18next", // NiaColor
            "Django",
            // "Unit Testing", // là quy trình (process), không phải công cụ
            "Robot Framework (Testing)",
            "Pylint / JSLint",
            // "ESLint", // chưa có dự án minh chứng
            "WebSocket",
            "GrapeCity Spread / InputMan",
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