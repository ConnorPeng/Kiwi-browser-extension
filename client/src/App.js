/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";
import MainPage from "./containers/Main/MainPage";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Header from "./components/Header/Header";
import Reviews from "./components/Reviews/Reviews";
import SelectionPage from "./containers/Selection/SelectionPage";
// This should be changed later
import TempProfile from "./containers/Profile/TempProfile";

const possiblePage = new Set(["Selection", "Main", "Review", "Profile"]);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      page: "Selection",
      // eslint-disable-next-line react/no-unused-state
      checkedList: [
        "Farfetch",
        "SSense",
        "END.",
        "Saks Fifth Avenue",
        "Neiman Marcus",
      ],
    };
  }

  redirectByFooter (targetPage) {
    if (possiblePage.has(targetPage)) {
      this.setState({page: targetPage});
      this.forceUpdate();
    }
  }

  fromSelection2Main(list) {
    if (list.length >= 1) {
      // eslint-disable-next-line react/no-unused-state
      this.setState({
        checkedList: list,
        page: "Main"
      });
    }
    else {
      this.setState({ page: "Main" });
    }
    this.forceUpdate();
  }

  renderPage () {
    let { page } = this.state;
    if (page === "Selection") {
      return (
        <SelectionPage redirection={(list) => this.fromSelection2Main(list)} />
      );
    } else if (page === "Main") {
      let { checkedList } = this.state;
      return (
        <MainPage
          brands={ checkedList }
          redirection={(v) => this.redirectByFooter(v)}
        />
      );
    } else if (page === "Review") {
      return (
        <div>
          <Header />
          <Reviews />
          <Footer page={page} redirection={(v) => this.redirectByFooter(v)} />
        </div>
      );
    } else if (page === "Profile") {
      return (
        <div>
        <Header />
        <TempProfile />
        <Footer page={page} redirection={(v) => this.redirectByFooter(v)} />
        </div>
      );
    }
  }

  render() {
    return (
      <div> {this.renderPage()} </div>
    );
  }
}

export default App;
