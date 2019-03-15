import React, { Component } from 'react';
import './coop-tile.css';
import { FaExpandArrowsAlt } from 'react-icons/fa';

class CoopTile extends Component {
    constructor() {
        super();
        this.state = {
            expanded: false,
        }
    }

    toggleExpanded = () => {
        this.setState({
            expanded: !this.state.expanded
          });

    }


    render() {
        var details = this.props.details.map((detail, key) =>
            <li key={detail.id}>{detail.name}</li>
        );
        if (this.state.expanded) {
            var panel = [<h3 className="tile-header">{this.props.company}</h3>,
                <h4 className="tile-header">{this.props.position}</h4>,
                <ul>{details}</ul>]
        }else{
            var panel = []
        }


        return (
            <div className="coop-tile">
                <h2 className="tile-header">{this.props.semester} <button className="expand" onClick={this.toggleExpanded}><FaExpandArrowsAlt /></button></h2> 
                {panel}
            </div>
        )
    }
}

export default CoopTile; 