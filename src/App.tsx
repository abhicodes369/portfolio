import About from "./app/about";
import Home from "./app/home";
import Projects from "./app/project";
import Blogs from "./app/blogs";
import Footer from "./components/constant/footer";
import Navbar from "./components/constant/navbar";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="blogs">
        <Blogs />
      </div>

      <div id="about">
        <About />
      </div>
      <Footer />
    </div>
  );
}
