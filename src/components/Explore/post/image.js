import PropTypes from 'prop-types';

export default function Image({ src, caption }) {
    return (
        <div style={{ width: "610px", height: "610px", overflow: "hidden" }}>
            <img
                className="rounded-circle"
                resizeMode={"cover"}
                alt={caption}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                src={src}
            />
        </div>
    );    
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired
};
