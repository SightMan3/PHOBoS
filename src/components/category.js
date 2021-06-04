import React, {Component} from 'react';
import "../sass/category.scss"
import Product from "./subComponents/product";
import Distance from "geo-distance";
import {NotificationContainer, NotificationManager} from "react-notifications";
import 'react-notifications/lib/notifications.css';

class Category extends Component {
    constructor(props) {
        super(props);

        this.state = {
            res: [],
            price: [],
            endpoint: "",
            isOpen: false,
        }
    }

    test = () => {
        console.log(this.props.location.state);
    }

    daco = () => {
        var test = Distance().human_readable();
    }

    componentWillMount() {
        const route = this.props.location.state.route;
        if (route === "electronics") {
            this.setState({
                endpoint: "/products/category/electronics",
            })
        } else if (route === "stuff") {
            this.setState({
                endpoint: "/products",
            })
        } else if (route === "jewelery") {
            this.setState({
                endpoint: "/products/category/jewelery"
            })
        } else if (route === "Clothing") {
            this.setState({
                endpoint: "/products/category/men's clothing"
            })
        }
    }

    componentDidMount() {

     
       
    
        fetch(`https://fakestoreapi.com${this.state.endpoint}`,  {
            method: "GET",
            mode: "cors",
        })
            .then(res => {
                return res.json()
            }).then(dato => {

            this.setState({
                res: dato
            })
        })
            .catch(err => {
                console.log(err);
            })


        const route = this.props.location.state.route;

        if (route === "Clothing") {
            fetch("https://fakestoreapi.com/" +
                "products/category/women's clothing",  {
                method: "GET",
                mode: "cors",
            })
                .then(res => {
                    return res.json()
                }).then(dato => {
     
                this.setState({
                    res: dato
                })
            })
                .catch(err => {
                    console.log(err);
                })
        }

    }

    close = () => {
        this.setState({
            isOpen: false
        })
    }

    componentDidUpdate() {
        const { isOpen } = this.state;

        if (isOpen) {
            window.addEventListener("click", () => {
                console.log("adding");
            })
        } else {
            window.removeEventListener("click", () => {
                console.log("removing");
            })
        }

        window.onpopstate = e => {
            this.props.history.push({
                pathname: "/Wallmart",
                state: {
                    items: this.arr,
                    name:this.props.location.state.name,
                    adress:this.props.location.state.adress,
                    money:this.props.location.state.money,
                    rocket: {
                        name:    this.props.location.state.rocket.name,
                        price:   this.props.location.state.rocket.price,
                        details: this.props.location.state.rocket.details,
                        time:    this.props.location.state.rocket.time,
                    },
                }
            });
        }
    }

    arr = this.props.location.state.items;
    componentWillUnmount() {



    }

    createNotif = () => {
        return (
            NotificationManager.success("item added to cart", "Added")
        )

    }


    getChildData = (obj) => {
        this.arr.push(obj);
        this.createNotif()
    }

    render() {
        return (
            <div className="ct-section">
                <div className="title">
                    {this.props.history.location.state.route}
                    <div className="dropdown">
                        <button
                            className="item_list_btn"
                            onClick={() => {
                                this.props.history.push({
                                    pathname: "/list",
                                    state: {
                                        name:this.props.location.state.name,
                                        adress:this.props.location.state.adress,
                                        money:this.props.location.state.money,
                                        items: this.props.location.state.items,
                                        rocket: {
                                            name:    this.props.location.state.rocket.name,
                                            price:   this.props.location.state.rocket.price,
                                            details: this.props.location.state.rocket.details,
                                            time:    this.props.location.state.rocket.time,
                                        }

                                    }
                                })
                            }}
                        >flight accsesories</button>
                    </div>
                </div>
                <div className="center_of_items">
                    {this.state.res.map((x, y) => {


                        return <Product
                            title={x.title}
                            image={x.image}
                            price={x.price}
                            func={this.getChildData}
                        />
                    })}
                </div>
                <NotificationContainer />
            </div>
        );
    }
}

export default Category;