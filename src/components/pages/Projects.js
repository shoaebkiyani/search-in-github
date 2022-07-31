import RepoItem from "../repos/RepoItem";
import { useEffect, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";

const Projects = () => {
  const { getUserRepos, repos } = useContext(GithubContext);

  useEffect(() => {
    getUserRepos("shoaebkiyani");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="repos rounded-lg shadow-lg card">
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title">Top Repositories</h2>
        {repos.map((repo) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
