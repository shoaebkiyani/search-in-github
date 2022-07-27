import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex mx-auto">
      <div className="flex-col">
        <h1 className="text-6xl mb-1">Shoaib Kiyani</h1>
        <h4 className="text-xl pl-2 mb-2 rounded-lg shadow-xl">
          Front-end Web Developer
        </h4>
        <div className="inline-flex text-5xl">
          <a
            href="https://www.linkedin.com/in/shoaib-kiyani-aa30b759/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="px-2 hover:scale-105" />
          </a>
          <a
            href="https://github.com/shoaebkiyani"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="px-2 hover:scale-105" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
