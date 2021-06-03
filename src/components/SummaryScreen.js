import React, { Component } from "react";
import "../sass/summary.scss";
import { getDistance } from "geolib";

import Countdown from 'react-countdown';
class SummaryScreen extends Component {
  constructor(props) {
    super(props);
    this.key = "BrAsr22igPnrx6MHvRmzxbiHIDNfr7hA";

    this.state = {
      timeToArrive: 1627995532*1000,
      countdownFrom : Date.now(),
      error: null,
      isLoaded: false,
      items: [],
      secondLoaded: false,
      text: "Loading...",

    };
  }
  componentDidMount() {
    this.fetchDistanceFromTwoPoints();
    this.fetch();
  }

  async fetchDistanceFromTwoPoints() {
    var first_point = await this.fetchPoint("kosice");
    first_point = { latitude: first_point.lat, longitude: first_point.lng };
    var second_point = await this.fetchPoint("bratislava");
    second_point = { latitude: second_point.lat, longitude: second_point.lng };
    var distance = getDistance(first_point, second_point) / 1000 + "km";
    console.log(distance);
    this.setState({
      text: distance,
      secondLoaded: true,
    });
    return distance;
  }
  timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = a.getMonth();
    var date = a.getDate();
    var time =  year + '.' + month + '.'+ date + '.';
    return time;
  }
  async fetchPoint(point) {
    var url =
      "http://www.mapquestapi.com/geocoding/v1/address?key=BrAsr22igPnrx6MHvRmzxbiHIDNfr7hA&location=" +
      point;
    var return_data = "dull";
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("point of " + point);
        return_data = data.results[0].locations[0].displayLatLng;
      });

    return return_data;
  }

  fetchMatrix() {
    var url =
      "http://open.mapquestapi.com/directions/v2/routematrix?key=BrAsr22igPnrx6MHvRmzxbiHIDNfr7hA";
    var json = {
      locations: ["Kosice Slovakia", "New york"],
      options: {
        allToAll: true,
      },
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(json),
    };
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  fetchDistance() {
    // fetch(
    //   "http://www.mapquestapi.com/geocoding/v1/reverse?key=BrAsr22igPnrx6MHvRmzxbiHIDNfr7hA&location=48.720287208800855, 21.25956559132703&includeRoadMetadata=true&includeNearestIntersection=true"
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    // console.log("dupii")
    // console.log(data.results[0].locations)
    //   var url =
    //   "http://www.mapquestapi.com/directions/v2/route?" +
    //   "key=" + this.key + "&" +
    //   "from="+{locations: [{ adminArea1Type: "Country", latLng: {lat: 45.750307,lng: -104.999472}} ]}+
    //   "to="+{locations: [{ adminArea1Type: "Country", latLng: {lat: 39.750307,lng: -104.999472}} ]}+
    //   "unit=k&" +
    //   "routeType=fastest&" +
    //   "doReverseGeocode=true";
    // fetch(url)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("dadaaa");
    //     console.log(data);
    //     this.setState({
    //       text: data.toString(),
    //       secondLoaded: true,
    //     });
    //   });
    //});
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
    const { error, isLoaded, items, secondLoaded, text,timeToArrive } = this.state;
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
          <p className="summaryTitle">Time to arrive</p>
          <Countdown  className="defaultText"  date={timeToArrive} />
          <p className="defaultText">PEOPLE IN SPACE: {items.number}</p>
    
          <p className="defaultText">KM TO TRAVEL: {text}</p>
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
