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
        for (var i = 0; i < 3; i++){
            var name = project_data[i]["name"]
            var gitlink = project_data[i]["gitlink"]
            var description = project_data[i]["description"]
            tile_list.push(<ProjectTile name={name} gitlink={gitlink} description={description}/>)
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
        "gitlink" : "https://github.com/comarasj/WindGame",
        // eslint-disable-next-line
        "description" : "The Wind Game is a High School coding project that utilzes Processing and Arduino. \
            The Wind Game features ways to play with an Arduino custom built controller or the keyboard. \
            This project was meant to be a combination of hardware and software with different communication techniques. \
            See the Code on Github.",
        "picture" : ""
    },
    {
        "number" : 2,
        "name" : "Spotify Playlist Generator",
        "gitlink" : "https://github.com/comarasj/spotipy",
        // eslint-disable-next-line
        "description" : "This project was built using Python and a Python Library called Spotipy. \
            It allows the user to create custom spotify playlists in minutes as opposed to handpicking songs. Read more on Github.",
        "picture" : ""
    },
    {
        "number" : 3,
        "name" : "E-portfolio Project",
        "link" : "https://comarasj.github.io/e-portfolio/#/",
        "gitlink" : "https://github.com/comarasj/e-portfolio",
        // eslint-disable-next-line
        "description" : "This is an E-Portfolio Project for PD-2050. This project was built using ReactJS and Github Pages. \
            Its a website meant to act as an online Resume for myself. Check out the code on Github.",
        "picture" : ""
    }
]

export default Projects;