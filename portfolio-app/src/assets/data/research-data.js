export const researchData = [
  {
    id: "soiea",
    title: "research.soiea.title",
    date: "7/2024 - {{now}}",
    // 👇 Chưa có bài báo -> để null
    citation: null,
    description: [
      "research.soiea.desc_1",
      "research.soiea.desc_2",
      "research.soiea.desc_3",
      "research.soiea.desc_4"
    ],
    techGroups: [
      {
        title: "research.groups.pipeline",
        skills: ["Python", "Selenium", "YouTube Data API", "PySpark", "Web Scraping"]
      },
      {
        title: "research.groups.model_deploy",
        skills: ["Transformers", "Kafka", "WebSockets"]
      }
    ]
  },
  {
    id: "viisa",
    title: "research.viisa.title",
    date: "12/2024 - 7/2025",
    // // 👇 CÓ BÀI BÁO -> Điền text chuẩn hội nghị vào đây
    // citation: "Ma, H. N.; et al. 2025. ViISA: A Novel Benchmark for Implicit Sentiment Analysis in Vietnamese. In Proceedings of the AAAI Conference on Artificial Intelligence (Under Review).",
    description: [
      // Lưu ý: Dùng HTML string cho link Hugging Face
      "research.viisa.desc_1",
      "research.viisa.desc_2",
      "research.viisa.desc_3",
      "research.viisa.desc_4",
      "research.viisa.desc_5",
      "research.viisa.desc_6"
    ],
    techGroups: [
      {
        title: "research.groups.pipeline",
        skills: ["Python", "Selenium", "Hugging Face", "underthesea", "Scikit-learn"]
      },
      {
        title: "research.groups.llm_validation",
        skills: ["GPT-4 (API)", "Gemini-Flash (API)", "Cohen's Kappa", "WF1 & MF1 & Accuracy"]
      },
      {
        title: "research.groups.benchmark",
        skills: ["LSTM / BiLSTM", "ELMoForManyLangs", "mBERT", "XLM-RoBERTa", "PhoBERT", "CafeBERT", "viBERT", "vELECTRA", "ViDeBERTa"]
      }
    ]
  }
];