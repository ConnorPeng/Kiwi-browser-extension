import React, { Component } from "react";
import SingleReview from "../SingleReview/SingleReview";

const dummyData = [
  {
    username: "Jinghong",
    imgSrc:
      "https://images.unsplash.com/photo-1556807457-9c4f0a528934?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    tags: ["# White", "# Fashion"],
    reviewText:
      "I bought this shoe with size 43 from SSense. The size goes a little bit smaller than normal. I really like this shoe! It is very comfortable and you can wear it all the time.",
  },
  {
    username: "Zhen",
    imgSrc:
      "https://images.unsplash.com/photo-1612905468542-585ca599afbc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=806&q=80",
    tags: ["# White", "# Fashion"],
    reviewText:
      "I bought this shoe with size 44 from Saks Fifth Avenue. This shoe is really comforatable, and I would recommend buying it.",
  },
];

class Reviews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: dummyData,
    };
  }

  render() {
    const { reviews } = this.state;

    return (
      <div>
        {reviews.map((review) => (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SingleReview review={review} />
          </div>
        ))}
      </div>
    );
  }
}

export default Reviews;
