import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PropTypes from "prop-types";
import Avatar from "react-avatar";
import "./SingleReview.css";

export default function SingleReview(props) {
  const { review } = props;
  const { username, imgSrc, tags, reviewText } = review;

  return (
    <div>
      <div className="in-line">
        <Avatar size="45" round name="Foo Bar" />
        <span className="username-position">{username}</span>
        <div className="button-position">
          <button type="button" className="button-size">
            Follow
          </button>
        </div>
      </div>
      <img
        src={imgSrc}
        alt="Fashion Review"
        width="300px"
        height="250px"
        className="image-position"
      />
      <div className="in-line">
        <FavoriteBorderIcon className="icon-size" />

        {tags.map((tag) => (
          <div className="tag-position">
            <button
              type="button"
              className="tag-size"
              style={{ borderColor: "#2fb31a" }} // add kiwi green
            >
              {tag}
            </button>
          </div>
        ))}
      </div>
      <p className="text-position">{reviewText}</p>
    </div>
  );
}

SingleReview.propTypes = {
  review: PropTypes.objectOf(PropTypes.object()).isRequired,
};
