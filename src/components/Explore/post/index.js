import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
//import styles from './styles.css' //className={classes.ABC}
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import PropTypes from 'prop-types';

var cards = {
    marginRight: "30px",
    flexWrap: "wrap",
    direction: "column",
    columnCount: 3,
    display: "flex",
    justifyContent: "space-between",
}

var card = {
    backgroundColor: "white",
    marginBottom: "3%",
    //borderRadius: "5%",
    //boxShadow: "1px 1px 1px blue",
    width: "30%",
    marginLeft: "30px",
}

var cardImage = {
    height: 280,
    width: 1000,
    objectFit: "cover",
    overflow: "hidden",
    //marginBottom: "px",
}

var cardInfo = {
    padding: 10,
}

var caption = {
    //backgroundColor: "white"
}

export default function Post({ content }) {
  const commentInput = useRef(null);
  const handleFocus = () => commentInput.current.focus();

  // components
  // -> header, image, actions (like & comment icons), footer, comments
  return (

          <div style={card}>
              <img
                  className="rounded-circle"
                  resizeMode={"cover"}
                  alt={content.caption}
                  style={cardImage}
                  src={content.imageSrc}
              />
              <div style={cardInfo}>
                  <Link to={`/u/${content.username}`}>
                      <span className="mr-1 font-bold" style={{ marginTop: "3%" }}>{content.username}</span>
                  </Link>
                  <div>
                      <span className="italic">{content.caption}</span>
                  </div>
              </div>
          </div>
  );
}

Post.propTypes = {
  content: PropTypes.shape({
    username: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    docId: PropTypes.string.isRequired,
    userLikedPhoto: PropTypes.bool.isRequired,
    likes: PropTypes.array.isRequired,
    comments: PropTypes.array.isRequired,
    dateCreated: PropTypes.number.isRequired
  })
};
