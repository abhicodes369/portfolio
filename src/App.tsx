import About from "./app/about";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./app/home";
import Skill from "./app/skill";
import Projects from "./app/project";
import Footer from "./components/constant/footer";
import Navbar from "./components/constant/navbar";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="skills" element={<Skill />} />
            <Route path="projects" element={<Projects />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}
