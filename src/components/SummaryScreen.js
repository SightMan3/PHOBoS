import React, { Component } from "react";
import "../sass/summary.scss";
import { getDistance } from "geolib";

import Countdown from "react-countdown";
class SummaryScreen extends Component {
  constructor(props) {
    super(props);
    this.key = "BrAsr22igPnrx6MHvRmzxbiHIDNfr7hA";
    console.log(props.location.state.rocket.time);
    console.log(new Date(props.location.state.rocket.time).getTime() / 1000000);
    this.state = {
      timeToArrive: new Date(props.location.state.rocket.time).getTime(),
      countdownFrom: Date.now(),
      error: null,
      isLoaded: false,
      items: [],
      secondLoaded: false,
      text: "Loading...",
      price: "unknown €",
    };
  }
  componentDidMount() {
    this.fetchDistanceFromTwoPoints();
    this.fetch();
    console.log("mary summary |/ ");
    console.log(this.props);

    var rocket = this.props.location.state.rocket.price;
    var array = this.props.location.state.items; //price
    console.log(rocket);
    console.log(array);
    var final = rocket;
    for (var i = 0; i < array.length; i++) {
      final += array[i].price;
    }
    this.setState({price: final});
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

  timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp);
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var year = a.getFullYear();
    var month = a.getMonth();
    var date = a.getDate();
    var time = year + "." + month + "." + date + ".";
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
    const { price, error, isLoaded, items, secondLoaded, text, timeToArrive } =
      this.state;
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
        <div className="container_of_content">
          <div className="rocket_part">
            <p className="title">SUMMARY</p>

            <Countdown className="title_s" date={timeToArrive} />
          </div>

          <div className="w-section_f_sum">
            <div className="main_f_sum">
              <div className="title_f_sum">Flight details</div>

              <div className="secondGlass_sum">
                <div className="glass">
                  <div className="item">
                    <div className="text_div_left">
                      <p className="item_left"> Money to pay: </p>
                    </div>
                    <div className="text_div_right">
                      <p className="item_right"> {price} €</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="text_div_left">
                      <p className="item_left">
                        People waiting for you in space:
                      </p>
                    </div>
                    <div className="text_div_right">
                      <p className="item_right"> {items.number}</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="text_div_left">
                      <p className="item_left"> Km left to destination: </p>
                    </div>
                    <div className="text_div_right">
                      <p className="item_right"> {text}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      );
    }
  }
}

export default SummaryScreen;
