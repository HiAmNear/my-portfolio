// import { useTranslation as useI18nTranslation } from "react-i18next";
import { useTranslation as useOriginalTranslation } from "react-i18next";

const namespaceAlias = {
  "@Template": "pages",
};
// this is a mistake when i name namespaceAlias @Template is complix with Alias of App.jsx, i must be @Pages, but i will keep it for now, because i have already use it in many places, and i will fix it later


export function useTranslation(path) {
  let resolvedNs = path;

    // Logic thay thế Alias
    if (path) {
      for (const [alias, realPath] of Object.entries(namespaceAlias)) {
        if (path.startsWith(alias)) {
          // Thay thế "@Template" thành "pages"
          resolvedNs = path.replace(alias, realPath);
          break; 
        }
      }
    }

    // 2. Bây giờ hàm này đã được define nhờ dòng import ở trên
    return useOriginalTranslation(resolvedNs);
}
