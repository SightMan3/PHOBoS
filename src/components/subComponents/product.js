import React, {Component} from 'react';
import "../../sass/category.scss"

class Product extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="center_of_windows">
                <div className="window">
                    <button>add to cart</button>
                    <div className="price">0.99$</div>
                </div>
            </div>
        );
    }
}

export default Product;