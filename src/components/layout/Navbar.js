import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({ title }) => {
  return (
    <nav className="navbar bg-gradient-to-b from-stone-900 to-red-900 ...">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2 my-2">
          <FaGithub className="inline pr-2 text-4xl" />
          <Link to="/" className="font-bold text-lg align-middle">
            {title}
          </Link>
        </div>

        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
              Home
            </Link>
            <Link to="/projects" className="btn btn-ghost btn-sm rounded-btn">
              Projects
            </Link>
            <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Search Github",
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
