import React, { Component } from 'react';
import './style.css';
class ShowCard extends Component {

    render() {
        return (
            <div className="product">
                <div style={{display:'flex',flexWrap:'wrap'}}>
                <div className="text">
                    <div className="p-name"><a href="">{this.props.type} </a></div>
                </div>
                <div className="p-img">
                    <img src={this.props.image} width={200} height="200"/>
                </div>
                <div className="text">
                    <div className="p-card">{this.props.content}</div>
                    <div className="p-price">Xem tin</div>
                    {/* <input type="button" className="button" name="add" defaultValue="Add to cart"/> */}
                </div>
                <div className="clear"/>
                </div>
            </div>
        );
    }
}

export default ShowCard;