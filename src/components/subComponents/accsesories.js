import React, {Component} from 'react';
import "../../sass/category.scss";


class Accsesories extends Component {
    constructor(props) {
        super(props);
    }

    style = {
        backgroundImage: 'url(' +  + ')',
    }

    render() {
        return (
            <div>
                <div className="wrapper">
                    <div className="acc-title">shopping cart</div>
                    <div className="under_title">this is list with all products you have choosen</div>
                    <div className="items">
                        {this.props.location.state.items.map((x, y) => {
                            return (
                                <div className="item" key={y}>

                                    <div className="img_cover">
                                        <div
                                            className="image"
                                            style={{
                                                backgroundImage: 'url(' + x.img + ')',
                                            }}
                                        />
                                    </div>
                                    <div className="name">{x.name}</div>
                                    <div className="price">{x.price} $</div>
                                    <button>X</button>
                                </div>
                            )
                        })}


                        <button className="confirm_buy">confirm</button>
                    </div>

                </div>
            </div>
        );
    }
}

export default Accsesories;