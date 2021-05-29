import React from 'react'

class GridItem extends React.Component {
    constructor(props) {
        super(props)
        this.name = props.name
        this.state = {
            
        }
    }
    render(){
        return (
            <div className="gridItem">
              <div className="upperHalf">
                <div className="upperHalfChild">
                  <img className="spaceImage" />
                </div>
                <div className="upperHalfChild">
                  <p className="spaceTextItem">{ this.name}</p>
                </div>
              </div>
      
              <div style={{}} className="downHalf">
                <div style={{ flex: "2", width: "100%" }} className="downDivider">
                  <p  className="spaceTextItem">Flight date: 2020. 07. 01 T00:00:00 .000Z</p>
                  <p  className="spaceTextItem">Čo, stojí líístok na Mars: 1000 000 000 Dollars </p>
                </div>
      
                <div
                  style={{ flex: "1", flexDirection: "row", width: "100%" }}
                  className="downDivider"
                >
                  <div className="btn_con">
                    <button className="continue">start exploring</button>
                  </div>
                </div>
              </div>
            </div>
          );
    }
}

export default GridItem
