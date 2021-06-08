import React, { Component } from "react";
import Filter from "../../components/Filter/Filter";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ItemBox from "../../components/ItemBox/ItemBox";
import SortButton from "../../components/SortButton/SortButton";
import "./MainPage.css";

const fakeData = [
  {
    website: "Farfetch",
    imgSrc:
      "https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/2/1/21-08-2019_commonprojects_originalachilleslow_white_1528-0506_jm_1x.jpg",
    price: 325,
    freeShip: 1,
    shipCost: 0,
    size: [39, 40, 41, 42, 43, 44, 45, 46, 47],
    popularity: 10,
    url:
      "https://www.farfetch.com/shopping/men/common-projects-achilles-lace-up-sneakers-item-13838256.aspx?storeid=10853",
  },
  {
    website: "SSense",
    imgSrc:
      "https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/2/1/21-08-2019_commonprojects_originalachilleslow_white_1528-0506_jm_1x.jpg",
    price: 495,
    freeShip: 1,
    shipCost: 0,
    size: [40, 41, 42, 43],
    popularity: 7,
    url:
      "https://www.ssense.com/en-us/men/product/common-projects/white-achilles-laceless-sneakers/5702571",
  },
  {
    website: "END.",
    imgSrc:
      "https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/2/1/21-08-2019_commonprojects_originalachilleslow_white_1528-0506_jm_1x.jpg",
    price: 425,
    freeShip: 0,
    shipCost: 20,
    size: [38, 39, 40, 41, 42, 43, 44, 45],
    popularity: 6,
    url:
      "https://www.endclothing.com/us/common-projects-original-achilles-low-1528-0506.html",
  },
  {
    website: "Saks Fifth Avenue",
    imgSrc:
      "https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/2/1/21-08-2019_commonprojects_originalachilleslow_white_1528-0506_jm_1x.jpg",
    price: 425,
    freeShip: 1,
    shipCost: 0,
    size: [39, 40, 41, 42, 43, 44, 45, 46, 47],
    popularity: 4,
    url:
      "https://www.saksfifthavenue.com/product/common-projects-original-achilles-leather-low-top-sneakers-0400099153185.html?dwvar_0400099153185_color=WHITE",
  },
  {
    website: "Neiman Marcus",
    imgSrc:
      "https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/2/1/21-08-2019_commonprojects_originalachilleslow_white_1528-0506_jm_1x.jpg",
    price: 425,
    freeShip: 0,
    shipCost: 23,
    size: [39, 40, 41, 42, 43, 44, 45, 46],
    popularity: 10,
    url:
      "https://www.neimanmarcus.com/p/common-projects-mens-achilles-leather-low-top-sneakers-white-prod198371542?childItemId=NMN4HT0_",
  },
];

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    const dupFakeData = [];
    for (let i = 0; i < fakeData.length; i++) {
      dupFakeData.push(fakeData[i]);
    }
    this.state = {
      items: dupFakeData,
      targetSize: -1,
      sortKey: "Default",
    };
  }

  populateItems() {
    const result = [];
    // eslint-disable-next-line react/destructuring-assignment
    for (let i = 0; i < this.state.items.length; i += 1) {
      let found = 0;
      // eslint-disable-next-line react/destructuring-assignment,react/prop-types
      for (let j = 0; j < this.props.brands.length; j += 1) {
        // eslint-disable-next-line react/prop-types,react/destructuring-assignment
        if (this.props.brands[j] === this.state.items[i].website) {
          found = 1;
          break;
        }
      }
      if (found !== 0) {
        // eslint-disable-next-line react/destructuring-assignment
        const detail = this.state.items[i];
        // eslint-disable-next-line react/destructuring-assignment
        if (this.state.targetSize === -1) {
          result.push(<ItemBox detail={detail} />);
        } else {
          // eslint-disable-next-line react/destructuring-assignment
          const sizes = this.state.items[i].size;
          for (let j = 0; j < sizes.length; j++) {
            if (sizes[j] == this.state.targetSize) {
              result.push(<ItemBox detail={detail} />);
              break;
            }
          }
        }
      }
    }
    return result;
  }

  handleFilter(event) {
    const keySize = event.target.value;
    if (keySize < 34 || keySize > 47) {
      if (keySize === "") {
        this.setState({ targetSize: -1 });
        this.forceUpdate();
      }
      return null;
    }
    this.setState({ targetSize: keySize });
    this.forceUpdate();
    return null;
  }

  handleSorter(event) {
    const checkedKey = event.target.innerText;
    // eslint-disable-next-line react/destructuring-assignment
    const oldList = this.state.items;
    let newList = [];
    if (checkedKey == "Price") {
      newList = oldList.sort((a, b) => {
        const priceA = a.price + (a.freeShip === 0 ? a.shipCost : 0);
        const priceB = b.price + (b.freeShip === 0 ? b.shipCost : 0);
        return priceA - priceB;
      });
    } else if (checkedKey == "Popularity") {
      newList = oldList.sort((a, b) => {
        return b.popularity - a.popularity;
      });
    }
    if (newList.length > 0) {
      this.setState({ items: newList });
    }
    this.forceUpdate();
  }

  render() {
    return (
      <div className="main-page-body-leo">
        <div className="main-upper-part">
          <div className="main-around-header">
            <Header />
            <p />
          </div>
          <div className="filter-and-sorter">
            <Filter handler={(event) => this.handleFilter(event)} />
            <SortButton handler={(event) => this.handleSorter(event)} />
          </div>
        </div>
        <hr />
        <div className="main-items-list">
          {this.populateItems()}
        </div>
        <div className="main-lower-part">
          <hr />
          <Footer
            redirection={(targetPage) => this.props.redirection(targetPage)}
            page="Main"
          />
        </div>
      </div>
    );
  }
}
