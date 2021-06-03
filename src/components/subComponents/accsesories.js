import React, {Component} from 'react';
import "../../sass/category.scss";


class Accsesories extends Component {
    constructor(props) {
        super(props);
    }

    style = {
        backgroundImage: 'url(' +  + ')',
    }

    buttonClick = () =>{
        //summary
        console.log("aksesorís \|/ ")
        console.log(this.props)
        this.props.history.push({
            pathname: "/summary",
            state: {
                name:this.props.location.state.name,
                adress:this.props.location.state.adress,
                money:this.props.location.state.money,
                rocket: {
                    name:    this.props.location.state.rocket.name,
                    price:   this.props.location.state.rocket.price,
                    details: this.props.location.state.rocket.details,
                    time:    this.props.location.state.rocket.time,
                },
                items: this.props.location.state.items
            }
        })
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


                        <button onClick = {this.buttonClick} className="confirm_buy">confirm</button>
                    </div>

                </div>
            </div>
        );
    }
}

export default Accsesories;