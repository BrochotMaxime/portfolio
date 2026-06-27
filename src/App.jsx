import { Route, Routes } from "react-router-dom";

import Layout from "./components/layout/Layout";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import LegalNoticePage from "./pages/LegalNoticePage";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="legal-notice" element={<LegalNoticePage />} />
      </Route>
    </Routes>
  );
}

export default App;