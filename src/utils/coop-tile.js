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
        return (
            <div className="coop-tile">
               <h2 className="tile-header">{this.props.semester}</h2>
               
            </div>
        )
    }
}

export default CoopTile; 