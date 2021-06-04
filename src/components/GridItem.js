import React from 'react'

class GridItem extends React.Component {
    constructor(props) {
        super(props);
        this.dateUnix = props.dateUnix;
        this.name = props.name;
        this.details = props.details;
        this.callback = props.callback;
        this.date = props.date;
    }
    render(){
        return (
            <div className="gridItem">
              <div className="upperHalf">
                <div className="upperHalfChild">
                  <img className="spaceImage" />
                </div>
                <div className="upperHalfChild">
                  <p className="spaceTextItemBold">{ this.name}</p>
                </div>
              </div>
      
              <div style={{}} className="downHalf">
                <div style={{ flex: "2", width: "100%" }} className="downDivider">
                  <p  className="spaceTextItem">Flight date:  {this.date}</p>
                  <br/>
                  <p  className="spaceTextItem">Price: {Math.floor(Math.random() * 1000000)+50000} $</p>
                  <br/>
                  <p  className="spaceTextItem">{this.details}</p>
                </div>

                <div
                  style={{ flex: "1", flexDirection: "row", width: "100%" }}
                  className="downDivider"
                >
                  <div className="btn_con">
                    <button onClick= {()=> {
                        let price = Math.floor(Math.random() * 1000000)+50000;

                        this.callback(this.name,this.details, price,this.dateUnix)
                    }}className="continue">start exploring</button>
                  </div>
                </div>
              </div>
            </div>
          );
    }
}

export default GridItem
