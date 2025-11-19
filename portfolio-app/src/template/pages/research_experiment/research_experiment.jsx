import Navbar from "@NavigationBar";
import Footer from "@FooterBar";

import { researchData } from '@Data/research-data.js'; // Import data
import ResearchDetail from './research_detail'; // Import component

import { useTranslation as useTranslationLocal } from "@Translation";

export default function ResearchExperiment() {
  const { t: translate } = useTranslationLocal("@Template/research_experiment/research_experiment");

  return ( 
    <>
        <Navbar />
          <div className="page-container">
            <h1 className="header-text padding-header-text">
              {translate("research.title_page")}
            </h1>

            {/* Vòng lặp render */}
            {researchData.map(item => (
              <ResearchDetail key={item.id} research={item} />
            ))}
            
          </div> 
        <Footer />
    </>
  ); 
}