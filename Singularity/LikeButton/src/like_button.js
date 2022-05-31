"use strict";

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLiked: false };
  }
  btnOne() {
    return e(
      "button",
      {
        onClick: () => this.setState({ isLiked: !this.state.isLiked }),
      },
      "👍"
    );
  }

  btnTwo() {
    return e(
      "button",
      {
        onClick: () => this.setState({ isLiked: !this.state.isLiked }),
      },
      "👎"
    );
  }

  render() {
    if (this.state.isFirstLiked) {
      return e("div", { className: "btn-container" }, [
        this.btnTwo(),
        this.btnOne(),
      ]);
    }

    return e("div", { className: "btn-container" }, [
      this.btnOne(),
      this.btnTwo(),
    ]);

    // if (this.state.isSecondLiked) {
    //   return this.btnOne();
    // }

    // return [this.btnTwo(), this.btnTwo()];
    //   "button",
    //   { onClick: () => this.setState({ liked: !this.state.liked }) },
    //   "👎"
  }
}

const domContainer = document.querySelector("#like_button_container");
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));
