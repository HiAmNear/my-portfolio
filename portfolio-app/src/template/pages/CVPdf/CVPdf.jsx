// CVPdf.jsx

import "@Assets/scss/CVPdf/CVPdf.scss";
import Navbar from "@NavigationBar";
import Footer from "@FooterBar";
import Avatar from "@Assets/image/avatar/avatar.png";
import { overviewData } from '@Data/overview-data.js';
import { useTranslation as useTranslationLocal } from "@Translation";
import { CursorIcon } from "@Icon";
import JobDetail from "./../work_experiment/job_detail";
import { workData } from "@Data/work-data.js";
import { researchData } from '@Data/research-data.js'; // Import data
import ResearchDetail from './../research_experiment/research_detail'; // Import component


import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function CVPdfDocument() {
    const { basicInfo, skills, education } = overviewData; // Destructuring cho gọn
    const { t: translate_overview } = useTranslationLocal("@Template/overview/overview");
    const { t: translate_work_experiment } = useTranslationLocal("@Template/work_experiment/work_experiment");
    const { t: translate_research_experiment } = useTranslationLocal("@Template/research_experiment/research_experiment");

    const navigate = useNavigate();
    const location = useLocation(); // 2. Lấy trạng thái được truyền từ NavBar

    useEffect(() => {
        // Kiểm tra xem có đúng là chuyển sang từ nút Download hay không
        if (location.state?.triggerPrint) {
            
            // Chờ 400ms để React vẽ xong chữ nghĩa, hình ảnh (tránh trang trắng)
            const timer = setTimeout(() => {
                window.focus();
                window.print(); // 🖨️ Mở hộp thoại in PDF (Hàm này sẽ CHẶN code chạy tiếp)
                
                // ⏬ Đoạn code dưới này CHỈ chạy sau khi người dùng bấm Lưu hoặc Hủy trên hộp thoại PDF
                navigate(-1); // Quay về màn hình hiện tại ngay lập tức
            }, 400);

            return () => clearTimeout(timer);
        }
    }, [location.state, navigate]);

    
  return (
    <>
        <div className="page-container"> {/* Giữ layout shell */}
        
            {/* --- AVATAR --- */}
            {/* <div className="avatar-container">
                <img src={Avatar} alt="User Avatar" />
            </div> */}
            {/* --- 1. THÔNG TIN CƠ BẢN --- */}
            <div className="information-container">
                <h1 className="header-text">{translate_overview("overview.basicInfo.title")}</h1>
                <div className="information-layout">
                {/* Hàng 1 */}
                <strong>{translate_overview("overview.basicInfo.name")} : </strong>
                <span>{translate_overview(basicInfo.name)}</span>

                {/* Hàng 2 */}
                <strong>{translate_overview("overview.basicInfo.location-title")} : </strong>
                <span>{translate_overview(basicInfo.location)}</span>

                {/* Hàng 3 */}
                <strong>Email :</strong>
                <a className="url-text hover" href={`mailto:${basicInfo.email}`}>
                    {translate_overview(basicInfo.email)}
                </a>
                </div>
            </div>

            <div className="information-container">
                <h1 className="header-text padding-header-text">
                    {translate_work_experiment("work.title_page")}
                </h1>
        
                {/* 3. Dùng vòng lặp .map() */}
                {workData.map(job => (
                    <JobDetail key={job.id} job={job} />
                ))}
            </div>

            <div className="information-container">
                <h1 className="header-text padding-header-text">
                    {translate_research_experiment("research.title_page")}
                </h1>

                {/* Vòng lặp render */}
                {researchData.map(item => (
                    <ResearchDetail key={item.id} research={item} />
                ))}
            </div>
            {/* --- 2. KỸ NĂNG --- */}
            <div className="information-container">
                <h1 className="header-text">{translate_overview("overview.skills.title")}</h1>
                <div className="skill-information-layout">
                {skills.map((group, idx) => (
                    <div key={idx}>
                    {/* Logic: Nếu không phải nhóm đầu tiên thì thêm border-top */}
                    {idx > 0 && (
                        <div className="border-top">
                            <div className="margin-top">
                            <strong>{translate_overview(group.title)}</strong>
                            </div>
                        </div>
                    )}
                    {/* Nếu là nhóm đầu tiên thì hiện title bình thường */}
                    {idx === 0 && <strong>{translate_overview(group.title)}</strong>}

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
                <h1 className="header-text">{translate_overview("overview.edu.title")}</h1>
                <div className="education-information-layout">
                
                {/* Ngôn Ngữ */}
                <div className="skill-information-layout">
                    <strong>{translate_overview("overview.edu.nature_language")}</strong>
                    <div className="language-detail">
                    {education.languages.map((lang, idx) => (
                        <span key={idx}>{translate_overview(lang)}</span>
                    ))}
                    </div>
                </div>

                {/* Bằng cấp (Degrees) */}
                {education.degrees.map((degree) => (
                    <div key={degree.id}>
                    <div className="border-top">
                        <div className="margin-top">
                        <strong>{translate_overview(degree.level)}</strong>
                        </div>
                    </div>
                    <div className="job-detail">
                        <div className="job-title-date">
                        <strong>{translate_overview(degree.school)}</strong>
                        <strong>{translate_overview(degree.date, { now: translate_overview("present") })}</strong>
                        </div>
                        <div>
                        {degree.details.map((detail, dIdx) => (
                            <div key={dIdx}>{translate_overview(detail)}</div>
                        ))}
                        </div>
                    </div>
                    </div>
                ))}

                </div>
            </div>

        </div>
    </>
  ); 
}