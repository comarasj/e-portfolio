import React, { Component } from 'react';
import './project-tile.css';
import { FaExpandArrowsAlt } from 'react-icons/fa';

class ProjectTile extends Component {
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
        var panel;
        if (this.state.expanded) {
            panel = [
            <p className="tile-header">{this.props.description}</p>,
            <a className="tile-header" href={this.props.gitlink}>Repo on Github</a>
        ]

        } else {
            panel = []
        }


        return (
            <div className="project-tile">
                <h2 className="tile-header">{this.props.name}<button className="expand" onClick={this.toggleExpanded}><FaExpandArrowsAlt /></button></h2>
                {panel}
            </div>
        )
    }
}

export default ProjectTile; 