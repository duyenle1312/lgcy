import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default function Footer({ caption, username }) {
  return (
    <div className="p-4 pt-2 pb-1" style={{ textAlign: "left"  }}>
          <Link to={`/u/${username}`}>
              <span className="mr-1 font-bold">{username}</span>
          </Link>     
      <span className="italic">{caption}</span>
    </div>
  );
}

Footer.propTypes = {
  caption: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
};
