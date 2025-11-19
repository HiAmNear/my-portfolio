import "@Assets/scss/overview/overview.scss";
import Navbar from "@NavigationBar";
import Footer from "@FooterBar";
import { workData } from "@Data/work-data.js";
import JobDetail from "./job_detail";
import { useTranslation as useTranslationLocal } from "@Translation";

export default function WorkExperiment() {
  const { t: translate } = useTranslationLocal("@Template/work_experiment/work_experiment");

  return ( 
    <>
        <Navbar />
        <div className="page-container">
        <h1 className="header-text padding-header-text">
            {translate("work.title_page")}
        </h1>

        {/* 3. Dùng vòng lặp .map() */}
        {workData.map(job => (
            <JobDetail key={job.id} job={job} />
        ))}
        
        </div>
        <Footer />
    </>
  ); 
}