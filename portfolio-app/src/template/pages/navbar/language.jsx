import "@Assets/scss/navbar/language.scss";
import { LanguageIcon , VietNamFlagIcon , EnglishFlagIcon , JapanFlagIcon , CloseIcon } from "@Icon";
import useWindowWidth from "@WindowWidth";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useTranslation as useTranslationLocal } from "@Translation";
export default function Language() {
    const windowWidth = useWindowWidth();
    const isSmall = typeof windowWidth === "number" ? windowWidth <= 1023 : false;
    const [open, setOpen] = useState(false);
    const { i18n } = useTranslation();
    const changeLang = (lng) => {
    i18n.changeLanguage(lng);
    // i18next sẽ lưu vào cache (localStorage) nếu detection.caches cấu hình sẵn
    };
    const { t: translate } = useTranslationLocal("@Template/navbar/language");


  return (
    <>
    <div className="language-wrapper">
      {isSmall ? (
        <div 
          className="icon-small-container flex-row" 
          onClick={() => setOpen(!open)}
        >
          <div className="header_text hover">{translate("language-title")}</div>
          <LanguageIcon className="icon-feature cursor icon-languge" />
        </div>
      ) : (
        <LanguageIcon 
          className="icon-feature cursor hover icon-languge" 
          onClick={() => setOpen(!open)} 
        />
      )}
      <div className={`language-dropdown ${open ? "show" : ""}`}>
        <div className="header-language header_text">
          {translate("language-title")}

        {isSmall && (
            <div className="close-button">
                <CloseIcon className="icon-feature cursor"
                    onClick={(e) => {
                        e.stopPropagation();
                        setOpen(false);;
                    }}/>
            </div>
        )}
        </div>
        <div className="language-container">
          <div 
          className="language-items hover cursor"
          onClick={() => changeLang("vi")}>
            <VietNamFlagIcon/> Tiếng Việt
          </div>
          <div 
          className="language-items hover cursor"
          onClick={() => changeLang("en")}>
            <EnglishFlagIcon/> English
          </div>
          <div 
          className="language-items hover cursor"
          onClick={() => changeLang("jp")}>
            <JapanFlagIcon/>  日本語
          </div>
        </div>
      </div>
    </div>
    </>
  );
}