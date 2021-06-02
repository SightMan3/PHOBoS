import React, { Component } from "react";
import "../sass/summary.scss";
class SummaryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
    this.fetch();
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
    const { error, isLoaded, items } = this.state;
    console.log(this.state.items);
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <div className="spaceContainerSummary">
          <p style={{alignSelf: "center", justifyContent:"center", marginTop:"20%"}}className="summaryTitle">Loading...</p>
        </div>
      );
      
    } else {
      return (
        <div className="spaceContainerSummary">
          <p className="summaryTitle">SUMMMARY</p>
          <p className="summarySubtitle">TIMELEFT</p>
          <p className="defaultText">PEOPLE IN LOBBY: {items.number}</p>
          <p className="defaultText">KM TO TRAVEL: 7520km</p>
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
