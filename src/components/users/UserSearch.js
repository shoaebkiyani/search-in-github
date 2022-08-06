import MyBio from "../pages/MyBio";
import { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";

const UserSearch = () => {
  const { users, searchUsers, clearUsers, rate_limit, limit_remaining } =
    useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const [text, setText] = useState("");

  const handleChange = (e) => {
    limit_remaining > 0
      ? setText(e.target.value)
      : setAlert("You have exceeded the limit, please wait for a while");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      setAlert("Please enter something", "error");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-8 mb-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control mb-10">
            <div className="relative top-10">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-md text-black"
                placeholder="Search Github User"
                value={text}
                onChange={handleChange}
              />
              {limit_remaining > 0 ? (
                <button className="btn btn-md absolute top-0 right-0 rounded-l-none w-32">
                  Go
                </button>
              ) : (
                <button className="btn btn-md btn-disabled text-black absolute top-0 right-0 rounded-l-none w-32">
                  Go
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 ? (
        <div>
          <button
            onClick={clearUsers}
            className="md:relative md:top-10 btn btn-md hover:bg-red-500 hover:text-black"
          >
            Clear List
          </button>
        </div>
      ) : (
        <MyBio />
      )}
      <div className="absolute mt-2 right-4 xl:right-8 lg:right-8 md:right-6 bg-red-600 text-white px-2 rounded-lg">
        <p className="inline">Rate Limit (per min): </p>
        {limit_remaining} / {rate_limit}
      </div>
    </div>
  );
};

export default UserSearch;
