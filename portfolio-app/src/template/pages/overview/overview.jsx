import "@Assets/scss/overview/overview.scss";
import Navbar from "@NavigationBar";
import Footer from "@FooterBar";
import Avatar from "@Assets/image/avatar/avatar.png";
import { overviewData } from '@Data/overview-data.js';
import { useTranslation as useTranslationLocal } from "@Translation";
import { CursorIcon } from "@Icon";

export default function OverView() {
    const { basicInfo, skills, education } = overviewData; // Destructuring cho gọn
    const { t: translate } = useTranslationLocal("@Template/overview/overview");

  return (
    <>
        <div className="page-container"> {/* Giữ layout shell */}
        
            {/* --- AVATAR --- */}
            <div className="avatar-container">
                <img src={Avatar} alt="User Avatar" />
            </div>
            <Navbar />
            {/* --- 1. THÔNG TIN CƠ BẢN --- */}
            <div className="information-container">
                <h1 className="header-text">{translate("overview.basicInfo.title")}</h1>
                <div className="information-layout">
                {/* Hàng 1 */}
                <strong>{translate("overview.basicInfo.name")} : </strong>
                <span>{translate(basicInfo.name)}</span>
                <strong>{basicInfo.links[0].label} :</strong>
                <a className="url-text hover" href={basicInfo.links[0].url} target="_blank" rel="noreferrer">
                    {basicInfo.links[0].text} <CursorIcon/>
                </a>

                {/* Hàng 2 */}
                <strong>{translate("overview.basicInfo.location-title")} : </strong>
                <span>{translate(basicInfo.location)}</span>
                <strong>{basicInfo.links[1].label} :</strong>
                <a className="url-text hover" href={basicInfo.links[1].url} target="_blank" rel="noreferrer">
                    {basicInfo.links[1].text} <CursorIcon/>
                </a>

                {/* Hàng 3 */}
                <strong></strong> <a></a> {/* Placeholder cho grid */}
                <strong>Email :</strong>
                <a className="url-text hover" href={`mailto:${basicInfo.email}`}>
                    {basicInfo.email} <CursorIcon/>
                </a>
                </div>
            </div>

            {/* --- 2. KỸ NĂNG --- */}
            <div className="information-container">
                <h1 className="header-text">{translate("overview.skills.title")}</h1>
                <div className="skill-information-layout">
                {skills.map((group, idx) => (
                    <div key={idx}>
                    {/* Logic: Nếu không phải nhóm đầu tiên thì thêm border-top */}
                    {idx > 0 && (
                        <div className="border-top">
                            <div className="margin-top">
                            <strong>{translate(group.title)}</strong>
                            </div>
                        </div>
                    )}
                    {/* Nếu là nhóm đầu tiên thì hiện title bình thường */}
                    {idx === 0 && <strong>{translate(group.title)}</strong>}

                    <div className="skill-detail">
                        {group.items.map((skill, sIdx) => (
                        <span key={sIdx}>{skill}</span>
                        ))}
                    </div>
                    </div>
                ))}
                </div>
            </div>

            {/* --- 3. GIÁO DỤC --- */}
            <div className="information-container">
                <h1 className="header-text">{translate("overview.edu.title")}</h1>
                <div className="education-information-layout">
                
                {/* Ngôn Ngữ */}
                <div className="skill-information-layout">
                    <strong>{translate("overview.edu.nature_language")}</strong>
                    <div className="language-detail">
                    {education.languages.map((lang, idx) => (
                        <span key={idx}>{translate(lang)}</span>
                    ))}
                    </div>
                </div>

                {/* Bằng cấp (Degrees) */}
                {education.degrees.map((degree) => (
                    <div key={degree.id}>
                    <div className="border-top">
                        <div className="margin-top">
                        <strong>{translate(degree.level)}</strong>
                        </div>
                    </div>
                    <div className="job-detail">
                        <div className="job-title-date">
                        <strong>{translate(degree.school)}</strong>
                        <strong>{translate(degree.date, { now: translate("present") })}</strong>
                        </div>
                        <div>
                        {degree.details.map((detail, dIdx) => (
                            <div key={dIdx}>{translate(detail)}</div>
                        ))}
                        </div>
                    </div>
                    </div>
                ))}

                </div>
            </div>

        </div>
        <Footer />
    </>
  ); 
}
