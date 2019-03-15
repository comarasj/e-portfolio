import React, { Component } from 'react';
import "./projects.css";
import ProjectTile from "../../utils/project-tile";

class Projects extends Component {
    constructor() {
        super();
        this.state = {
            data: null,
        };
    }

    render() {
        var tile_list = []
        for (var i = 0; i < 2; i++){
            var name = project_data[i]["name"]
            var link = project_data[i]["link"]
            var description = project_data[i]["description"]
            tile_list.push(<ProjectTile name={name} link={link} description={description}/>)
        }
        return (
            <div>
                <h1 className="header">Projects</h1>
                <div className="tiles">
                    {tile_list}
                </div>
            </div>
        )
    }
}

const project_data =[
    {
        "number" : 1,
        "name" : "Wind Game",
        "link" : "https://github.com/comarasj/WindGame",
        "description" : "blah",
        "picture" : ""
    },
    {
        "number" : 2,
        "name" : "Spotify Playlist Generator",
        "link" : "https://github.com/comarasj/spotipy",
        "description" : "blah",
        "picture" : ""
    }



]

export default Projects;