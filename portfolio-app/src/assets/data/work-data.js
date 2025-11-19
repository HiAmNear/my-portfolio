export const workData = [
  {
    id: "mec-infotech",
    company: "MEC INFOTECH VIETNAM",
    date: "5/2023 - 7/2025",
    primaryRole: "work.mec.role",
    roles: [
      {
        id: "mec-dev",
        title: "work.mec.roles.dev_title",
        points: [
            "work.mec.roles.dev_p1",
            "work.mec.roles.dev_p2",
            "work.mec.roles.dev_p3",
            "work.mec.roles.dev_p4"
        ]
      },
      {
        id: "mec-tester",
        title: "work.mec.roles.test_title",
        points: [
            "work.mec.roles.test_p1",
            "work.mec.roles.test_p2",
            "work.mec.roles.test_p3",
            "work.mec.roles.test_p4"
        ]
      },
      {
        id: "mec-VBA-maintenance",
        title: "work.mec.roles.vba_title",
        points: [
            "work.mec.roles.vba_p1",
            "work.mec.roles.vba_p2",
            "work.mec.roles.vba_p3",
            "work.mec.roles.vba_p4"
        ]
      },
        {
        id: "mec-ai",
        title: "work.mec.roles.ai_title",
        points: [
            "work.mec.roles.ai_p1",
        ]
      },
    ],
    technologies: [
      "Python", "Django", "HTML/CSS/JS", "PostgreSQL", "Robot Framework",
      "Pylint/JSLint","SonarQube","Visual Basic",
      "MS Access",".NET","HOS.net","OpenCV","CNN"
    ]
  },
  {
    id: "nia-color",
    company: "work.nia.company",
    date: "07/2025 - {{now}}",
    primaryRole: "work.nia.role",
    roles: [
      {
        id: "nia-lead",
        title: null, // Không cần tiêu đề phụ, chỉ cần list
        points: [
          "work.nia.roles.lead_p1",
          "work.nia.roles.lead_p2",
          "work.nia.roles.lead_p3",
          "work.nia.roles.lead_p4",
          "work.nia.roles.lead_p5"
        ]
      }
    ],
    techGroups: [ // Chia nhóm tech cho dự án này
      {
        id: "nia-fe",
        title: "work.nia.groups.fe",
        skills: ["ReactJS", "SCSS", "Vite", "react-i18next"]
      },
      {
        id: "nia-be",
        title: "work.nia.groups.be",
        skills: ["Go", "PostgreSQL (Schema Design)"]
      }
    ]
  }
];