import React from "react";
import { Link, useLocation } from "react-router-dom";

interface NavItemProps {
  text: string;
  path: string;
}

const navItems: NavItemProps[] = [
  { text: "HOME", path: "/" },
  { text: "PROJECTS", path: "/projects" },
  { text: "SKILLS", path: "/skills" },
  { text: "ABOUT", path: "/about" },
];

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 h-16  z-10">
      <div className="container mx-auto h-full flex justify-between items-center px-4">
        <div className="text-green-500 font-bold text-xl">Abhiram</div>
        <div className="flex items-center space-x-6">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <NavItem
                key={item.text}
                {...item}
                currentPath={location.pathname}
              />
            ))}
          </ul>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-cyan-400 transition-colors duration-200"
          ></a>
        </div>
      </div>
    </nav>
  );
};

interface NavItemPropsWithCurrentPath extends NavItemProps {
  currentPath: string;
}

const NavItem: React.FC<NavItemPropsWithCurrentPath> = ({
  text,
  path,
  currentPath,
}) => {
  const isActive = currentPath === path;

  return (
    <li>
      <Link
        to={path}
        className={`text-green-500 hover:text-cyan-400 transition-colors duration-200 ${
          isActive ? "text-cyan-400" : ""
        }`}
      >
        {text}
      </Link>
    </li>
  );
};

export default Navbar;
