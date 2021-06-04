import React, {Component} from 'react';
import "../../sass/category.scss";


class Accsesories extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        }


    }


    style = {
        backgroundImage: 'url(' +  + ')',
    }

    buttonClick = () =>{
        //summary
     
   
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

    componentDidMount() {
        this.setState({
            items: this.props.location.state.items
        })
    }

    render() {
        return (
            <div className="wrapper-wrapper">
                <div className="wrapper">
                    <div className="acc-title">shopping cart</div>
                    <div className="under_title">this is list with all products you have choosen</div>
                    <div className="items">
                        {this.state.items.map((x, y) => {
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
                                    <button
                                        onClick={() => {
                                            let itm = this.state.items;
                       
                                            for (let i = 0; i < itm.length; i++) {
                                               if (itm[i].name === x.name) {
                                                   itm.pop(i);
                                               }

                                            }

                                            this.setState({
                                                items: itm
                                            })
                                        }}
                                    >X</button>
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