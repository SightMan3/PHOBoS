import React, {Component} from 'react';
import "../sass/category.scss"
import Product from "./subComponents/product";


class Category extends Component {
    constructor(props) {
        super(props);

        this.state = {
            res: [],
        }
    }

    test = () => {
        console.log(this.props.location.state);
    }

    fetchEbay = async () => {
        fetch('https://api.countdownapi.com/request?' +
            'api_key=80B8F925BD074429B6A6F813436F067C&' +
            'type=search&ebay_domain=ebay.com&' +
            'search_term=space', {
            method: "GET",
            mode: "cors",
        })
            .then(res => {
                return res.json()
            }).then(dato => {
            console.log(dato.search_results[20].image)
            this.setState({
                res: dato.search_results
            })
        })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <div className="ct-section">
                <button onClick={this.fetchEbay}>d</button>
                <div className="center_of_items">
                    <Product />
                </div>
            </div>
        );
    }
}

export default Category;