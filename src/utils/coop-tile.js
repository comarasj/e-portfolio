import React, { Component } from 'react';
import './coop-tile.css';
import { FaExpandArrowsAlt } from 'react-icons/fa';

class CoopTile extends Component {
    constructor() {
        super();
        this.state = {
            expanded: true,
        }
    }

    toggleExpanded = () => {
        this.setState({
            expanded: !this.state.expanded
        });

    }


    render() {
        var details = this.props.details.map((detail, key) =>
            <li key={detail.id}>{detail.detail}</li>
        );
        var panel;
        if (this.state.expanded) {
            panel = [<h3 className="tile-header">{this.props.company}</h3>,
            <h4 className="tile-header">{this.props.position}</h4>,
            <p className="tile-text">{this.props.intro}</p>,
            <h4 className="tile-header">Project Highlights: </h4>,
            <ul className="list-group">{details}</ul>,
            <h4 className="tile-header">Skills Learned</h4>,
            <p className="tile-text">{this.props.skills}</p>]
        } else {
            panel = []
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