import React, { Component } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import "./resume.css";

import resume from "../../static/Stephen_Comarata_resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Resume extends Component {
    constructor() {
        super();
        this.state = {
            numPages: null,
            pageNumber: 1,
        };
    }
    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    render() {
        const { pageNumber, numPages } = this.state;
        return (
            <div classname="resume-wrapper">
                <h1 className="header">Resume</h1>
                <div className="resume">
                    <Document
                        file={"./Stephen_Comarata_resume.pdf"}
                        onLoadSuccess={this.onDocumentLoadSuccess}
                        className="document"
                    >
                        <Page pageNumber={pageNumber} />
                    </Document>
                    <a href={resume} className="resume-button">Download Here</a>
                </div>
            </div>

        )
    }
}

export default Resume;