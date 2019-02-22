import React, { Component } from 'react';
import './coop-tile.css';
class CoopTile extends Component {
    constructor() {
        super();
        this.state = {
            expanded: false,
        }
    }


    render() {
        var details = this.props.details.map((detail,key) =>
        <li key={detail.id}>{detail.name}</li>
        );
        return (
            <div className="coop-tile">
               <h2 className="tile-header">{this.props.semester}</h2>
               <h3 className="tile-header">{this.props.company}</h3>
               <ul>{details}</ul>
            </div>
        )
    }
}

export default CoopTile; 