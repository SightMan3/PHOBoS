import React, {Component} from 'react';
import "../../sass/category.scss"
import {NotificationContainer, NotificationManager} from 'react-notifications';

class Product extends Component {
    constructor(props) {
        super(props);

        this.state = {
            item_price: this.props.price,
            item_title: this.props.title,
        }
    }

    image_url = this.props.image;

    style = {
        backgroundImage: 'url(' + this.image_url + ')',
    }

    render() {
        return (
            <div className="center_of_windows">

                <div
                    className="window"
                    style={this.style}
                >
                    <div className="hide">
                        <div className="product_title">
                            {this.state.item_title}
                        </div>
                        <button
                            className="buy"
                            onClick={() => {
                                let obj = {
                                    name: this.state.item_title,
                                    price: this.state.item_price,
                                    img: this.image_url
                                }

                                this.props.func(obj)

                            }}
                        >add to cart</button>
                        <div className="price">
                            {this.state.item_price} $
                        </div>
                    </div>


                </div>

            </div>
        );
    }
}

export default Product;