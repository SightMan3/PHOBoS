import React, {Component} from 'react';
import "../sass/wallmart.scss";
import axios from "axios";

class Wallmart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            in_val: ""
        }
    }


    redirect = (prop) => {
        this.props.history.push({
            pathname: "/category",
            state: { route: prop }
        })
    }


    setIn = (e) => {
        this.setState({
            in_val: e.target.value,
        })

    }


    render() {
        return (
            <div className="wm-section">
                <div className="title">
                    Pick everything you need for you trip
                </div>
                <div className="tiles">
                    <div className="first_category">
                        <div
                            className="electronics"
                            onClick={() => {
                                this.redirect("elk")
                            }}
                        />
                        <div
                            className="food"
                            onClick={() => { this.redirect("food") }}
                        />
                    </div>
                    <div className="second_category">
                        <div className="own_category">
                            <p>or search on your own</p>
                            <input
                                type="text"
                                onChange={(e) => { this.setIn(e) }}/>
                            <button onClick={() => { this.redirect(this.state.in_val) }}
                            >search</button>
                        </div>
                        <div
                            className="health"
                            onClick={() => { this.redirect("health") }}
                        />
                    </div>

                </div>
            </div>
        );
    }
}

export default Wallmart;