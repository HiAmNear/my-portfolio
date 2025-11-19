// import { useTranslation as useI18nTranslation } from "react-i18next";
import { useTranslation as useOriginalTranslation } from "react-i18next";

const namespaceAlias = {
  "@Template": "pages",
};

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
