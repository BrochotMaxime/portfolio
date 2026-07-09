import { Route, Routes } from "react-router-dom";

import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectPage from "./pages/ProjectPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ResumePage from "./pages/ResumePage";
import ResumePrintPage from "./pages/ResumePrintPage";
import LegalNoticePage from "./pages/LegalNoticePage";

import ScrollToTop from "./components/utilities/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="projects/:slug" element={<ProjectPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="resume" element={<ResumePage />} />
          <Route path="resume/print" element={<ResumePrintPage />} />
          <Route path="legal-notice" element={<LegalNoticePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
