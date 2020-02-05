import React from "react";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      active: 0
    };

    this.handleIndexClick = this.handleIndexClick.bind(this);
  }

  // This line below must be static and takes in a set props and returns a new state
  static getDerivedStateFromProps({ mediaList }) {
    let photos = ["http://placecorgi.com/600/600"];
    //fix this media keep showing as undefined
    if (mediaList !== undefined) {
      photos = mediaList.map(({ large }) => large);
    }
    return { photos };
  }

  handleIndexClick(e) {
    this.setState({
      //adding the + to couirse into a num
      active: +e.target.dataset.index
    });
  }

  render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active]} alt="/animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              // onKeyUp={this.handleOnKeyUp}
              onClick={this.handleIndexClick}
              data-index={index}
              src={photo}
              className={index === active ? "active" : ""}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
