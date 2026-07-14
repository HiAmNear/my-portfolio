import "@Assets/scss/navbar/navbar.scss";
import { Link } from "react-router-dom";
import { DownloadIcon, MenuIcon, HomeIcon, WorkIcon, ReasearchIcon } from '@Icon';
import useWindowWidth from "@WindowWidth";
import Language from './language';
import { useRef, useState } from "react";
import { useTranslation as useTranslationLocal } from "@Translation";

// // 1. Import hook chuẩn
// import { useTranslation } from "react-i18next";

// // 2. Import PDF libs
// import { PDFDownloadLink } from '@react-pdf/renderer';
// import CVPdfDocument from '@Template/components/CVPdf';

// // 3. Import Data
// import { overviewData } from '@Data/overview-data.js';
// import { workData } from "@Data/work-data.js";
// import { researchData } from '@Data/research-data.js';

// ✨ COMPONENT RIÊNG: Giúp nút Download ổn định, hiện Icon đúng lúc
// const CVDownloadButton = ({ ready, t_data, translateLocal }) => {
//     // Chỉ hiện loading nếu chưa tải xong ngôn ngữ
//     if (!ready) {
//         return (
//             <span className="loading-text" style={{ fontSize: '12px', color: '#888' }}>
//                 Loading...
//             </span>
//         );
//     }

//     return (
//         <PDFDownloadLink
//             document={
//                 <CVPdfDocument 
//                     overview={overviewData}
//                     work={workData}
//                     research={researchData}
//                     t={t_data} 
//                 />
//             }
//             fileName="Ma_Hai_Nhat_CV.pdf"
//             style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}
//         >
//             {({ loading }) => 
//                 loading ? (
//                     <span>Generating...</span>
//                 ) : (
//                     <div className="flex-row" style={{ display: 'flex', alignItems: 'center' }}>
//                         <span style={{ marginRight: 5 }}>{translateLocal("download")}</span> 
//                         <DownloadIcon />
//                     </div>
//                 )
//             }
//         </PDFDownloadLink>
//     );
// };

export default function NavBar() {
    const { t: translate } = useTranslationLocal("@Template/navbar/navbar");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const windowWidth = useWindowWidth();
    const isSmall = typeof windowWidth === "number" ? windowWidth <= 1023 : false;


    const iframeRef = useRef(null);

    const handlePrintCV = () => {
        const iframe = iframeRef.current;
        if (!iframe) return;

        // Thiết lập nguồn cho iframe là trang CV của bạn
        iframe.src = "/cv-pdf";

        // Đợi iframe tải xong nội dung thì kích hoạt lệnh in
        iframe.onload = () => {
        // 3. Chờ thêm 800ms để React inside iframe kịp render giao diện
        setTimeout(() => {
            try {
                iframe.contentWindow.focus();
                iframe.contentWindow.print();
            } catch (error) {
                console.error("Lỗi khi in dữ liệu từ iframe:", error);
            }
        }, 800); // 800ms là khoảng thời gian vừa đẹp cho React render
    };
    };
    return ( 
        <>
            <div className="navbar-container">
                <nav className="navbar">
                    <div className="navbar-header">
                        <div className={`nav-links ${isMenuOpen ? "show" : ""}`}>
                            {isSmall ? (
                                <>
                                    <Link className="title-text header-text hover" to="/">
                                        {translate("overview")} <HomeIcon />
                                    </Link>
                                    <Link className="title-text header-text hover" to="/work-experiment">
                                        {translate("work-experiment")} <WorkIcon />
                                    </Link> 
                                    <Link className="title-text header-text hover" to="/research-experiment">
                                        {translate("research-experiment")} <ReasearchIcon />
                                    </Link>
                                    <div className="title-text header-text cursor">
                                        <Language />
                                    </div>
                                    
                                    {/* Mobile */}
                                    <Link className="title-text header-text hover" to="/cv-pdf"
                                    onClick={() => window.print()}>
                                            <DownloadIcon />
                                    </Link>
                                    <div className="title-text header-text hover cursor flex-row">
                                        {/* <CVDownloadButton 
                                            ready={ready} 
                                            t_data={t_data} 
                                            translateLocal={translate}
                                            // ✨ KEY QUAN TRỌNG: Buộc nút render lại khi đổi ngôn ngữ
                                            key={i18n.language} 
                                        /> */}
                                    </div>
                                </>
                            ) : (
                                <>
                                    <Link className="title-text header-text hover" to="/">
                                        {translate("overview")}
                                    </Link>
                                    <Link className="title-text header-text hover" to="/work-experiment">
                                        {translate("work-experiment")}
                                    </Link> 
                                    <Link className="title-text header-text hover" to="/research-experiment">
                                        {translate("research-experiment")}
                                    </Link>

                                    <div className="icon-gap">
                                        {/* Desktop */}
                                        <Link 
                                            className="title-text header-text hover" 
                                            to="/cv-pdf" 
                                            state={{ triggerPrint: true }} // ✨ Đính kèm trạng thái yêu cầu in ở đây
                                        >
                                            <DownloadIcon />
                                        </Link>
                                        {/* <div className="title-text header-text hover cursor"> */}
                                            {/* <CVDownloadButton 
                                                ready={ready} 
                                                t_data={t_data} 
                                                translateLocal={translate}
                                                // ✨ KEY QUAN TRỌNG
                                                key={i18n.language}
                                            /> */}
                                        {/* </div> */}

                                        <div className="title-text header-text cursor">
                                            <Language />
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </nav>
                <MenuIcon 
                    className='icon-menu cursor'
                    onClick={() => setIsMenuOpen(isOpen => !isOpen)}
                />
            </div>
            {/* Thẻ iframe ẩn, không hiển thị trên giao diện */}
            <iframe 
                ref={iframeRef} 
                style={{ display: 'none' }} 
                title="CV Print Link"
            />
        </>
    );  
}