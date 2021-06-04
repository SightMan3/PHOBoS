import React, { Component } from "react";
import "../sass/summary.scss";
import { getDistance } from "geolib";

import Countdown from "react-countdown";
class SummaryScreen extends Component {
  constructor(props) {
    super(props);
    this.key = "BrAsr22igPnrx6MHvRmzxbiHIDNfr7hA";
    console.log(props)
    this.state = {
      timeToArrive: new Date(props.location.state.rocket.time).getTime(),
      countdownFrom: Date.now(),
      error: null,
      name: props.location.state.name,
      isLoaded: false,
      items: 0,
      secondLoaded: false,
      text: "Loading...",
      price: "unknown €",
    };
  }
  componentDidMount() {
    this.fetchDistanceFromTwoPoints();
    this.fetch();


    var rocket = this.props.location.state.rocket.price;
    var array = this.props.location.state.items; //price

    var final = rocket;
    for (var i = 0; i < array.length; i++) {
      final += array[i].price;
    }
    this.setState({ price: final });
  }

  async fetchDistanceFromTwoPoints() {
   // var first_point = await this.fetchPoint("kosice");
    var first_point = { latitude: 28.519687508787595, longitude: -80.65364264701837};
    var text = this.props.location.state.adress 
    var second_point = await this.fetchPoint(text === "" ? "Košice, Slovakia" : text);
    second_point = { latitude: second_point.lat, longitude: second_point.lng };
    var distance = getDistance(first_point, second_point) / 1000 + "km";

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
      "https://www.mapquestapi.com/geocoding/v1/address?key=BrAsr22igPnrx6MHvRmzxbiHIDNfr7hA&location=" +
      point;
    var return_data = "dull";
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {

        return_data = data.results[0].locations[0].displayLatLng;
      });

    return return_data;
  }

  fetchMatrix() {
    var url =
      "https://open.mapquestapi.com/directions/v2/routematrix?key=BrAsr22igPnrx6MHvRmzxbiHIDNfr7hA";
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
  

  fetch() {
    var url = "http://api.open-notify.org/astros.json";
    var count = -1
    try{
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          count = result;

          this.setState({
            isLoaded: true,
            items: result.number,
          });
        },
        (error) => {
          count = -1;
          this.setState({
            isLoaded: true,
            items: 7,
          });
        }
      );
    }catch (error){
      this.setState({
        isLoaded: true,
        items: 7,
      });
    }


  }
  render() {
    const { name,price, error, isLoaded, items, secondLoaded, text, timeToArrive } =
      this.state;

    if (error) {
      return <div>Error: {error.message} try refreshing the site</div>;
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
              <div className="title_f_sum">Flight details for {name}</div>

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
                      <p className="item_right"> {items}</p>
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
              <div style={{color:"white"}}className="subtitle">Future is waiting for you!</div>
            </div>

        
          </div>
        </div>
      );
    }
  }
}

export default SummaryScreen;
