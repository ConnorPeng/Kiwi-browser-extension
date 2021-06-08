import React, { Component } from "react";
import HomeIcon from "@material-ui/icons/Home";
import RateReviewIcon from "@material-ui/icons/RateReview";
import PersonIcon from "@material-ui/icons/Person";
import "./Footer.css";

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // enter state here
      current: "Main",
    };
  }

  setCurrent(IconText) {
    const { tempPage } = this.props.page;
    if (tempPage === IconText) {
      return;
    }
    this.props.redirection(IconText);
  }

  render() {
    return (
      <div className="nav-bar">
        <HomeIcon
          className={`first ${this.props.page === "Main" ? "grey" : "green"}`}
          onClick={() => this.setCurrent("Main")}
        />
        <RateReviewIcon
          className={`second ${
            this.props.page === "Review" ? "grey" : "green"
          }`}
          onClick={() => this.setCurrent("Review")}
        />
        <PersonIcon
          className={`third ${
            this.props.page === "Profile" ? "grey" : "green"
          }`}
          onClick={() => this.setCurrent("Profile")}
        />
      </div>
    );
  }
}

export default Footer;
