import React, {Component} from 'react';
import "../sass/category.scss"
import Product from "./subComponents/product";


class Category extends Component {
    constructor(props) {
        super(props);

        this.state = {
            res: [],
            price: [],
            endpoint: ""
        }
    }

    test = () => {
        console.log(this.props.location.state);
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
            console.log(dato)
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
                console.log(dato)
                this.setState({
                    res: dato
                })
            })
                .catch(err => {
                    console.log(err);
                })
        }

    }

    render() {
        return (
            <div className="ct-section">
                <div className="title">
                    {this.props.history.location.state.route}
                </div>
                <div className="center_of_items">
                    {this.state.res.map((x, y) => {
                        console.log(this.state.price[y]);

                        return <Product
                            title={x.title}
                            image={x.image}
                            price={x.price}
                        />
                    })}
                </div>
            </div>
        );
    }
}

export default Category;