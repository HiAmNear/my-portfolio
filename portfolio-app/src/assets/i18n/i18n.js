import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpApi) // load translation files
  .use(LanguageDetector) // detect language (localStorage, navigator, querystring...)
  .use(initReactI18next)
  .init({
    fallbackLng: "vi",
    supportedLngs: ["en", "vi","jp"],
    // namespace có thể là components/footer, pages/home, ...
    // ns: ["common"],
    defaultNS: "common",
    debug: false, // true khi dev
    interpolation: {
      escapeValue: false // React đã escape
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json"
    },
    detection: {
      // tùy chỉnh: localStorage, cookie, navigator...
      order: ["localStorage", "navigator", "querystring", "cookie"],
      caches: ["localStorage"]
    },
    react: {
      useSuspense: true // hoặc false nếu bạn không dùng Suspense
    }
  });

export default i18n;
