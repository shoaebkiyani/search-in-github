import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <Link
      to={`/user/${login}`}
      className="transform cursor-pointer tranisition duration-500 hover:scale-105"
    >
      <div className="max-w-xs bg-gradient-to-b to-orange-400 shadow-md rounded-lg">
        <div className="py-3">
          <img
            className="w-24 h-24 rounded-full mx-auto"
            src={avatar_url}
            alt="profile_image"
          />
          <h3 className="text-center text-lg text-slate-300 font-medium leading-8">
            {login}
          </h3>
        </div>
      </div>
    </Link>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
