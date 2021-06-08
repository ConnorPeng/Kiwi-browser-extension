// eslint-disable-next-line react/no-deprecated
import React, { PropTypes, Component } from "react";
import "./ItemBox.css";

export default class ItemBox extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  openTab(url) {
    openNewPAge(url);
  }

  render() {
    const {website, imgSrc,  price, freeShip, shipCost, size, popularity, url} = this.props.detail;
    return (
      <div className="main-itembox-leo">
        <div className="main-itembox-img-btn">
          <img className="main-itembox-image-leo" src={imgSrc} />
          <a href={url} target="_blank">
            <input
              className="main-item-buy-it-button"
              type="button"
              value="Buy It!"
            />
          </a>
        </div>
        <div className="main-itembox-info-leo">
          <p className="main-itembox-website">
            <span>{website}</span>
          </p>
          <p className="main-itembox-price">
            ${price} +{" "}
            {freeShip === 1 ? "free shipping" : `$${shipCost} shipping`}
          </p>
        </div>
      </div>
    );
  }
}
