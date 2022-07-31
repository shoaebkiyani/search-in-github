import RepoItem from "./RepoItem";
import PropTypes from "prop-types";

const ReposList = ({ repos }) => {
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

ReposList.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default ReposList;
