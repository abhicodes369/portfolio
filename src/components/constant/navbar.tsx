import { FaHome, FaProjectDiagram, FaBlog, FaUser } from "react-icons/fa";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "blogs", "about"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "home", icon: FaHome, label: "Home" },
    { id: "projects", icon: FaProjectDiagram, label: "Projects" },
    { id: "blogs", icon: FaBlog, label: "Blogs" },
    { id: "about", icon: FaUser, label: "About" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800 text-white py-4">
      <ul className="flex justify-center space-x-6">
        {navItems.map((item) => (
          <li key={item.id}>
            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
            <button
              onClick={() => scrollToSection(item.id)}
              className={`flex items-center transition-colors duration-200 ${
                activeSection === item.id
                  ? "text-cyan-400"
                  : "hover:text-cyan-400"
              }`}
            >
              <item.icon className="mr-2" />
              <span>{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
