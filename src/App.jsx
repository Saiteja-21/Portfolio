import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home-page";
import ContactPage from "./pages/contact-page";
import SkillsPage from "./pages/skills-page";
import ProjectsPage from "./pages/projects-page";
import Navbar from "./components/navbar";
import { useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();


  return (
    <>
      
        <Navbar />
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>

    </>
  );
};

export default App;
