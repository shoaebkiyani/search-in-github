import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Spinner from "../../components/layout/Spinner";
import ReposList from "../repos/ReposList";
import { useParams } from "react-router-dom";
import GithubContext from "../../context/github/GithubContext";

const User = () => {
  const { getUser, user, loading, getUserRepos, repos } =
    useContext(GithubContext);

  const params = useParams();

  useEffect(() => {
    getUser(params.login);
    getUserRepos(params.login);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="w-full mx-auto mt-4 lg:w-10/12">
        <div className="mb-4">
          <Link to="/" className="btn btn-outline mb-20">
            Back To Search
          </Link>
          <div className="grid grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
            <div className="custom-card-image mb-6 md:mb-0">
              <div className="rounded-full shadow-xl card image-full">
                <figure>
                  <img src={avatar_url} alt="" />
                </figure>
              </div>
            </div>
            <div className="col-span-2 xl:mt-4">
              <div className="mb-6">
                <h1 className="text-2xl xl:text-3xl lg:text-3xl md:text-3xl card-title">
                  {name}
                  <p className="text-sm">({login})</p>
                  <div className="ml-2 mr-1 badge badge-success">{type}</div>
                  {hireable && (
                    <div className="mx-1 badge badge-info">Hireable</div>
                  )}
                </h1>
                <p className="text-justify my-2">{bio}</p>
                <div className="my-4 card-actions">
                  <a
                    href={html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline"
                  >
                    Visit Github Profile
                  </a>
                </div>
              </div>
              {/* stats */}
              <div className="flex mr-2 w-full ">
                <div className="flex-grow">
                  {location && (
                    <div>
                      <div className=" text-sm">Location</div>
                      <div className="text-lg">{location}</div>
                    </div>
                  )}
                </div>
                <div className="flex-grow">
                  {blog && (
                    <div className="hover:scale-105 transition-all ease-in-out duration-200">
                      <div className="text-sm">Website</div>
                      <div className="text-lg">
                        <a
                          href={`https://${blog}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {blog}
                        </a>
                      </div>
                    </div>
                  )}
                </div>
                <div>
                  {twitter_username && (
                    <div className="hover:scale-105 transition-all ease-in-out duration-200">
                      <div className="text-md">Twitter</div>
                      <div className="text-lg">
                        <a
                          href={`https://twitter.com/${twitter_username}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {twitter_username}
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-200 stats">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div className="stat border-r-2">
              <div className="stat-figure text-secondary">
                <FaUsers className="text-3xl md:text-5xl text-fuchsia-400" />
              </div>
              <div className="stat-title pr-5">Followers</div>
              <div className="stat-value pr-5 text-3xl md:text-4xl">
                {followers}
              </div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaUserFriends className="text-3xl md:text-5xl text-fuchsia-400" />
              </div>
              <div className="stat-title pr-5">Following</div>
              <div className="stat-value pr-5 text-3xl md:text-4xl">
                {following}
              </div>
            </div>

            <div className="stat border-r-2">
              <div className="stat-figure text-secondary">
                <FaCodepen className="text-3xl md:text-5xl text-fuchsia-400" />
              </div>
              <div className="stat-title pr-5">Public Repos</div>
              <div className="stat-value pr-5 text-3xl md:text-4xl">
                {public_repos}
              </div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaStore className="text-3xl md:text-5xl text-fuchsia-400" />
              </div>
              <div className="stat-title pr-5">Public Gists</div>
              <div className="stat-value pr-5 text-3xl md:text-4xl">
                {public_gists}
              </div>
            </div>
          </div>
        </div>
        <ReposList repos={repos} />
      </div>
    </>
  );
};

export default User;
