import React, {Component} from 'react';
import "../sass/wallmart.scss";

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
            state: {
                route: prop,
                rocket: {
                    name: this.props.location.state.rocket.name,
                    price: this.props.location.state.rocket.price,
                    details: this.props.location.state.rocket.details
                },
                items: this.props.location.state.items
            }
        })
    }


    setIn = (e) => {
        this.setState({
            in_val: e.target.value,
        })

    }

    componentDidMount() {
        console.log(this.props)
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
                                this.redirect("electronics")
                            }}
                        />
                        <div
                            className="jew"
                            onClick={() => { this.redirect("jewelery") }}
                        />
                    </div>
                    <div className="second_category">
                        <div className="own_category">
                            <p>or random stuff</p>

                            <button onClick={() => { this.redirect("stuff") }}
                            >search</button>
                        </div>
                        <div
                            className="clothing"
                            onClick={() => { this.redirect("Clothing") }}
                        />
                    </div>

                </div>
            </div>
        );
    }
}

export default Wallmart;