/* eslint-disable jsx-a11y/img-redundant-alt */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Header({ username }) {
    const imageSrc = `/images/avatars/${username}.jpg`;
    const fallbackSrc = '/images/avatars/default.png';
  return (
    <div className="flex border-b border-gray-primary h-4 p-4 py-8">
      <div className="flex items-center">
        <Link to={`/u/${username}`} className="flex items-center">
          <img
            className="rounded-full h-8 w-8 flex mr-3"
            src={imageSrc}
            onError={(e) => { e.target.onError = null; e.target.src = fallbackSrc }}
            alt={`${username} profile picture`}
          />
          <p className="font-bold">{username}</p>
        </Link>
      </div>
    </div>
  );
}

Header.propTypes = {
  username: PropTypes.string.isRequired
};
