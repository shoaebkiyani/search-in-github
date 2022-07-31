import MyBio from "../pages/MyBio";
import { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";

const UserSearch = () => {
  const { users, searchUsers, clearUsers } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const [text, setText] = useState("");

  const handleChange = (e) => setText(e.target.value);

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
              <button className="btn btn-md absolute top-0 right-0 rounded-l-none w-32">
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length <= 0 ? (
        <MyBio />
      ) : (
        <div>
          <button
            onClick={clearUsers}
            className="md:relative md:top-10 btn btn-md hover:bg-red-500 hover:text-black"
          >
            Clear List
          </button>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
