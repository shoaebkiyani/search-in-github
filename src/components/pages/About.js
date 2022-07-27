const About = () => {
  return (
    <div>
      <h1 className="text-6xl text-gray-200 mb-4">Search GitHub</h1>
      <p className="mb-4 text-2xl font-light">
        A React app to search GitHub profiles and see profile details.
      </p>
      <p className="text-lg text-green-300">
        Version <span className="text-white">1.0.0</span>
      </p>
      <p className="text-lg text-green-300">
        Developed By:
        <a
          className="text-white"
          href="https://github.com/shoaebkiyani"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Shoaib Kiyani
        </a>
      </p>
    </div>
  );
};

export default About;
