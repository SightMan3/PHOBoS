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
  componentDidMount() {
    console.log("fetching...")
    fetch("https://api.spacexdata.com/v4/launches")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  gridItem(name,details) {
    return <GridItem name={name} details = {details}></GridItem>;
  }

  render() {
    const { error, isLoaded, items } = this.state;
    console.log(this.state.items)
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
              {items.map((el) => this.gridItem(el.name, el.details))}
            </div>
          </div>
        </div>
      );
    }

   
  }
}

export default Spacechoose;
