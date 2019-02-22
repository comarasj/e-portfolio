import React, { Component } from 'react';
import "./coop.css";
import CoopTile from '../../utils/coop-tile';

class Coop extends Component {
    constructor() {
        super();
        this.state = {
            data: null,
        };
    }

    render() {
        var tile_list =[];
        for (var i = 0; i < 2; i++){
            var semester = coop_data[i]["semester"]
            var company = coop_data[i]["company"]
            var details = coop_data[i]["details"]
            tile_list.push(<CoopTile semester={semester}/>)
        }
        return (
            <div>
                <h1 className="header">Co-op & Experience</h1>
                <div className="tiles">
                    {tile_list}
                </div>
            </div>
        )
    }
}

const coop_data =[
    {
        "number": 1,
        "semester": "Spring 2018",
        "company": "Siemens PLM Software",
        "details": "details here, blah blah blah"
    },
    {
        "number": 2,
        "semester": "Fall 2018",
        "company": "Siemens PLM Software",
        "details": "details here, blah blah blah"
    }
]

export default Coop;