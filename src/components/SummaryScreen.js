import React, { Component } from "react";
import "../sass/summary.scss";

class SummaryScreen extends Component {

  constructor(props) {
    super(props);
    this.key = "BrAsr22igPnrx6MHvRmzxbiHIDNfr7hA"
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      secondLoaded: false,
      text: "Loading...",
    };
    this.fetch();
    this.fetchDistance();
    this.fetchPoint();
  }
  fetchPoint() {
    var url =
      "http://www.mapquestapi.com/geocoding/v1/address?key=BrAsr22igPnrx6MHvRmzxbiHIDNfr7hA&location=Washington,DC";

    fetch(url)
      .then((response) => response.json())
      .then((data) => console.log(data.results[0].locations[0].displayLatLng));
  }

  fetchDistance() {
    fetch(
      "http://www.mapquestapi.com/geocoding/v1/reverse?key=BrAsr22igPnrx6MHvRmzxbiHIDNfr7hA&location=48.720287208800855, 21.25956559132703&includeRoadMetadata=true&includeNearestIntersection=true"
    )
      .then((response) => response.json())
      .then((data) => {

        console.log("dupii")
        console.log(data.results[0].locations[0].adminArea5)
        var url =
        "http://www.mapquestapi.com/directions/v2/route?" +
        "key=" + this.key + "&" +
        "from=Bratislava&" +
        "to=" +data.results[0].locations[0].adminArea5+
        "unit=k&" +
        "routeType=fastest&" +
        "doReverseGeocode=true";
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log("dadaaa");
          console.log(data);
          this.setState({
            text: data.toString(),
            secondLoaded: true,
          });

        });
      
      
      
      });

  }
  fetch() {
    var url = "http://api.open-notify.org/astros.json";
    console.log("fetching...");
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  render() {
    const { error, isLoaded, items, secondLoaded } = this.state;
    console.log(this.state.items);
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded || !secondLoaded) {
      return (
        <div className="spaceContainerSummary">
          <p
            style={{
              alignSelf: "center",
              justifyContent: "center",
              marginTop: "20%",
            }}
            className="summaryTitle"
          >
            Loading...
          </p>
        </div>
      );
    } else {
      return (
        <div className="spaceContainerSummary">
          <p className="summaryTitle">SUMMMARY</p>
          <p className="summarySubtitle">TIMELEFT</p>
          <p className="defaultText">PEOPLE IN LOBBY: {items.number}</p>
          <p className="defaultText">KM TO TRAVEL: {items.text}</p>
        </div>
        //   <div className="spaceContainer">
        //      <div className="spaceHeaderContainer">
        //       <p className="title">Flight pick up, you.</p>
        //     </div>
        //     {/*  <div className="spaceRocketContainer">
        //        <div className="spaceGrid">

        //        </div>
        //      </div>  */}
        //   </div>
      );
    }
  }
}

export default SummaryScreen;
