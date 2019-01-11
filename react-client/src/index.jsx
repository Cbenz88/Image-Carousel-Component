import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Images from "./components/images.jsx";
import Video from "./components/video.jsx";
import MainFrame from "./components/mainFrame.jsx";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { //in production refactor this. do not currentListing
      id: "", 
      images: [],
      videoUrl: null,
      currentListing: null, //the random listing
      currentSelect: null,
      currentSelectType: null
    };
    this.populateImages = this.populateImages.bind(this);
    this.getListing = this.getListing.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  populateImages() {
    axios
      .get(`/listing/${this.state.currentListing}`)
      .then(response => {
        var responseImages = [];
        function populateImageArray() {
          if (response.data.image1Url !== null) {
            responseImages.push(response.data.image1Url);
          }
          if (response.data.image2Url !== null) {
            responseImages.push(response.data.image2Url);
          }
          if (response.data.image3Url !== null) {
            responseImages.push(response.data.image3Url);
          }
          if (response.data.image4Url !== null) {
            responseImages.push(response.data.image4Url);
          }
          if (response.data.image5Url !== null) {
            responseImages.push(response.data.image5Url);
          }
          if (response.data.image6Url !== null) {
            responseImages.push(response.data.image6Url);
          }
        }
        populateImageArray();
        this.setState({
          id: response.data.id,
          images: responseImages,
          videoUrl: response.data.videoUrl,
          currentSelect: response.data.image1Url,
          currentSelectType: "image"
        });
      })
      .catch(err => {
        console.log("Error populating images in client: ", err);
      });
  }

  getListing() {
    //to get a random listing 1-100, not to be used in production
    var listing = document.URL.split("?")[1];
    return listing;
  }

  onMouseOver(e) {
    this.setState({
      currentSelect: e.target.src
    });
    if (e.target.id === "video-thumbnail") {
      this.setState({
        currentSelectType: "video",
        currentSelect: this.state.videoUrl
      });
    } else if (e.target.tagName === "IMG") {
      this.setState({ currentSelectType: "image" });
    }
  }

  componentDidMount() {
    this.setState({ currentListing: this.getListing() }, () => {
      this.populateImages();
    });
  }

  render() {
    return (
      <div id="image-carousel">
        <div id="thumbnail-bar">
          <Images images={this.state.images} onMouseOver={this.onMouseOver} />
          <Video video={this.state.videoUrl} onMouseOver={this.onMouseOver} />
          {/* Instead of a single function, should I create two (specific to the type for each mouseover?)*/}
        </div>
        <MainFrame
          currentSelect={this.state.currentSelect}
          currentSelectType={this.state.currentSelectType}
          video={this.state.videoUrl}
        />
      </div>
    );
  }
}

ReactDOM.render(<Carousel />, document.getElementById("carousel"));