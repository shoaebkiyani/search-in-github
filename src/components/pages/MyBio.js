import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import FiTech from "../layout/assets/images/fitech_logo.png";
import OpiFrame from "../layout/assets/images/opiframe.png";
import Integrify from "../layout/assets/images/Integrify_logo_old.jpg"

const Contact = () => {
  return (
    <div className="absolute top-60 flex items-center mx-auto">
      <div className="flex-col">
        <h1 className="text-5xl xl:text-6xl lg:text-6xl mb-1">
          Shoaib <span className="text-yellow-600">Kiyani</span>
        </h1>
        <h4 className="text-lg font-semibold text-yellow-600 xl:text-xl lg:text-xl pl-2 mt-4 mb-2 rounded-lg shadow-xl underline">
        Certifications:
        </h4>
        <div className="flex flex-col flex-wrap">
          <div className="hover:text-yellow-600">
            <a
              href="https://www.dropbox.com/scl/fi/qn3d0sxqxum2z7fgpxvgz/Shoaib-Kiyani-Integrify.pdf?rlkey=t46zql55wuabzw8gv8l0eq8lw&dl=0"
              target="_blank"
              rel="noreferrer"
              className="flex"
            >
              <img
                src={Integrify}
                alt="logo"
                className="w-8 h-8 rounded-lg shadow-xl ml-2 mb-2"
              />
              <h4 className="text-lg ml-2 mt-2">Full stack (TypeScript / Java / PostgreSQL)</h4>
            </a>
          </div>

          <div className="hover:text-yellow-600">
            <a
              href="https://openbadgefactory.com/v1/assertion/1cea68af2fafd68fb996cc00499232dce126ba78"
              target="_blank"
              rel="noreferrer"
              className="flex"
            >
              <img
                src={FiTech}
                alt="logo"
                className="w-8 h-8 rounded-lg shadow-xl ml-2 mb-2"
              />
              <h4 className="text-xl ml-2 pt-2">Front-end Development</h4>
            </a>
          </div>

          <div className="hover:text-yellow-600">
            <a
              href="https://openbadgefactory.com/v1/assertion/866f35fed9494d04a1b0eed33e6478cc22fd3bed"
              target="_blank"
              rel="noreferrer"
              className="flex"
            >
              <img
                src={FiTech}
                alt="logo"
                className="w-8 h-8 rounded-lg shadow-xl ml-2 mb-2"
              />

              <h4 className="text-lg ml-2 mt-2">Web Dev & Programming</h4>
            </a>
          </div>

          <div className="flex">
            <img
              src={OpiFrame}
              alt="logo"
              className="w-8 h-8 rounded-lg shadow-xl ml-2 mb-2"
            />

            <h4 className="text-lg mx-2 mt-2">Full-stack(MERN) Development</h4>
          </div>
        </div>
        <div>
          <h4 className="text-yellow-600 font-semibold text-lg xl:text-xl lg:text-xl pl-2 mt-4 mb-2 rounded-lg shadow-xl underline">
            Social Media:
          </h4>
        </div>
        <div className="inline-flex text-3xl">
          <a
            href="https://www.linkedin.com/in/shoaib-kiyani-aa30b759/"
            target="_blank"
            rel="noreferrer"
            className="mx-1 pr-2 text-md transition ease-in-out duration-500 hover:scale-105  hover:text-[#ca8a04]"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/shoaebkiyani"
            target="_blank"
            rel="noreferrer"
            className="pr-2 text-md transition ease-in-out duration-500 hover:scale-105  hover:text-[#ca8a04]"
          >
            <FaGithub />
          </a>
        </div>

        <div>
          <h4 className="text-yellow-600 font-semibold text-lg xl:text-xl lg:text-xl pl-2 mt-4 mb-2 rounded-lg shadow-xl underline">
            Contact Info:
          </h4>
        </div>
        <div className="flex flex-wrap">
          <div className="hover:text-[#ca8a04]">
            <FaEnvelope className="inline ml-2" />
            <a
              href="mailto:shoaebkiyani@yahoo.com"
              title="Send me an email"
              className="ml-2"
            >
              shoaebkiyani@yahoo.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
