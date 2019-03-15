import React, { Component } from 'react';
import './project-tile.css';
import { FaExpandArrowsAlt } from 'react-icons/fa';

class ProjectTile extends Component {
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
        if(this.state.expanded){
        var panel = [<a className="tile-header" href={this.props.link}>{this.props.link}</a>,
                <p className="tile-header">{this.props.description}</p>]
        }else{
            var panel = []
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