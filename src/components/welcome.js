import React, {Component} from 'react';
import "../sass/welocme.scss";

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "lukas",
        }
    }

    test = () => {
        console.log(this.props);
        this.props.history.push("/wallmart")
    }

    render() {
        return (
            <div className="w-section">
                <div className="firstGlass">
                    <div className="glassFirst">
                        make new memories,
                        discover darkness of space,
                        live the life you wanted
                    </div>
                </div>
                <div className="main">
                    <div className="title">P.H.O.B.o.S</div>
                    <div className="content">
                        painless hybrid obtainable backup plan on starship
                    </div>
                    <div className="btn_con">

                        <button className="continue" onClick={this.test}>start exploring</button>

                        <button onClick = {
                            () =>{
                                this.props.history.push("/flightpickup");
                            }

                        }className="continue">flight choose, wisely</button>

                    </div>

                    <div className="secondGlass">
                        <div className="glass">
                            live the way your kids to live, you want.
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}


export default Welcome;