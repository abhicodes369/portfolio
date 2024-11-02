import { FaHome, FaProjectDiagram, FaTools, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom"; 

const Navigation = () => {
  return (
    <nav className=" text-white py-4">
      <ul className="flex justify-center space-x-6">
        <li>
          <Link to="/" className="flex items-center hover:text-cyan-400">
            <FaHome className="mr-2" />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className="flex items-center hover:text-cyan-400"
          >
            <FaProjectDiagram className="mr-2" />
            <span>Projects</span>
          </Link>
        </li>
        <li>
          <Link to="/skills" className="flex items-center hover:text-cyan-400">
            <FaTools className="mr-2" />
            <span>Skills</span>
          </Link>
        </li>
        <li>
          <Link to="/about" className="flex items-center hover:text-cyan-400">
            <FaUser className="mr-2" />
            <span>About</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
