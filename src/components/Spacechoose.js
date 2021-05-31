import React, { PureComponent } from "react";
import "../sass/space.scss";
import GridItem from "./GridItem";
class Spacechoose extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }
  timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear() + 76;
    var month = a.getMonth();
    var date = a.getDate();

    var time =  year + '.' + month + '.'+ date + '.';
    return time;
  }
  componentDidMount() {
    console.log("fetching...");
    fetch("https://api.spacexdata.com/v4/launches")
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
  callback = (name, details) => {
    this.props.history.push("/summary");
  };

  gridItem(name, details,static_fire_date_unix) {
    var date = this.timeConverter(static_fire_date_unix)
    try{
      var max = 40;
      var data = details.split(" ");
      if(data.length > max){
        details = data.slice(0, max).join(" ")+"..."; 
      }
      }catch(Exception){}
    
    return (
      <GridItem callback={this.callback} name={name} details={details} date={date}></GridItem>
    );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    console.log(this.state.items);
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="spaceContainer">
          <div className="spaceHeaderContainer">
            <p className="title">Flight pick up, you.</p>
          </div>
          <div className="spaceRocketContainer">
            <div className="spaceGrid">
              {items.map((el) => this.gridItem(el.name, el.details,el.static_fire_date_unix))}
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Spacechoose;
