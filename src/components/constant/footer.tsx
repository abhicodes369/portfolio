import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";

const Footer = () => {
  return (
    <footer className=" text-gray-400 py-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <div className="flex flex-col items-center space-y-6">
            {[
              {
                icon: FaGithub,
                href: "https://github.com/abhicodes369",
                label: "GitHub",
              },
              {
                icon: FaLinkedin,
                href: "https://www.linkedin.com/in/abhiram-sharma-panthula-602401228/",
                label: "LinkedIn",
              },
              {
                icon: FaEnvelope,
                href: "mailto:abhiramsharma369@gmail.com",
                label: "Email",
              },
              {
                icon: SiDevpost,
                href: "https://devpost.com/abhiramsharma369",
                label: "Devpost",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                aria-label={item.label}
              >
                <item.icon className="w-6 h-6 text-gray-500 group-hover:text-cyan-400 transition-colors duration-300" />
                <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs text-cyan-400">
                  {item.label}
                </span>
              </a>
            ))}
          </div>

          <div className="text-center">
            <p className="mb-2 font-bold text-sm text-gray-500 hover:text-gray-400 transition-colors duration-300">
              No rights reserved. Feel free to use this website
            </p>
            <p className="text-xs font-bold text-gray-600 hover:text-gray-500 transition-colors duration-300">
              Made with{" "}
              <span className="text-red-500 animate-pulse inline-block">
                ❤️
              </span>{" "}
              by Abhi
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-800 to-transparent"></div>

      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-cyan-500 rounded-full opacity-5 animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 4 + 1}px`,
            height: `${Math.random() * 4 + 1}px`,
            animationDuration: `${Math.random() * 4 + 2}s`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        ></div>
      ))}
    </footer>
  );
};

export default Footer;
