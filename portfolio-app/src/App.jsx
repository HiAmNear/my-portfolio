import { Routes, Route } from "react-router-dom";
import OverView from "@Template/pages/overview/overview";
import WorkExperiment from "@Template/pages/work_experiment/work_experiment";
import ResearchExperiment from "@Template/pages/research_experiment/research_experiment";
export default function App() {
  return (
    <div className="app-container">
      <main>
        <Routes>
          <>
            <Route path="/" element={<OverView />} />
            <Route path="/overview" element={<OverView />} />
            <Route path="/work-experiment" element={<WorkExperiment />} />
            <Route path="/research-experiment" element={<ResearchExperiment />} />
          </>
        </Routes>
      </main>
    </div>
  );
}
