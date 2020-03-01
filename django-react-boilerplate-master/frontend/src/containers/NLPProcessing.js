import PropTypes from "prop-types";
import React, { Component } from "react";
import "./Container.css"
import {
    Button,
    Container,
    Grid,
    Header,
    Icon,
    Image,
    Item,
    Label,
    Menu,
    Segment,
    Step,
    Table,
} from 'semantic-ui-react'

class NlpDashboard extends Component {
    render() {
        return (
            <div>
                <div style={{ height: 40 }}></div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 row column">
                        <div className="col-sm-3" style={{ backgroundColor: "gray" }}>
                            <div className="row">
                                <span className="cuscircle yellow"><h5 style={{ color: "white" }}>1</h5></span>
                                <h5 className="custitle" style={{ color: "yellow" }}>CLASSIFICATIONS</h5>
                            </div>
                            <Button className="btn btn-success sidebtn yellow"><h5>Sentiment Analysis</h5></Button>
                            <Button className="btn btn-success sidebtn yellow"><h5>Topic Detection</h5></Button>
                            <Button className="btn btn-success sidebtn yellow"><h5>Language Detection</h5></Button>
                            <div className="row">
                                <span className="cuscircle green"><h5 style={{ color: "white" }}>1</h5></span>
                                <h5 className="custitle" style={{ color: "green" }}>EXTRACTION</h5>
                            </div>
                            <Button className="btn btn-success sidebtn green"><h5>Summarization</h5></Button>
                            <Button className="btn btn-success sidebtn green"><h5>Entity Extraction</h5></Button>
                            <Button className="btn btn-success sidebtn green"><h5>Keyword Extraction</h5></Button>
                            <Button className="btn btn-success sidebtn green"><h5>Article Extraction</h5></Button>
                            <div className="row">
                                <span className="cuscircle blue"><h5 style={{ color: "white" }}>1</h5></span>
                                <h5 className="custitle" style={{ color: "blue" }}>TEXT PROCESS</h5>
                            </div>
                            <Button className="btn btn-success sidebtn blue"><h5>Stemmer</h5></Button>
                            <Button className="btn btn-success sidebtn blue"><h5>Tokenizer</h5></Button>
                            <Button className="btn btn-success sidebtn blue"><h5>Normalizer</h5></Button>
                            <Button className="btn btn-success sidebtn blue"><h5>Similarity</h5></Button>
                        </div>
                        <div className="col-sm-6">
                            <p className="comicfirst foreyellow">CLASSIFICATION</p>
                            <p className="comicsecond">Sentiment Analysis</p>
                            <div className="row mid">
                                <Button className="btn btn-success darkyellow long"><h5 style={{ color: "white" }}>Load Data</h5></Button>
                                <Button className="btn btn-success darkyellow short"><h5 style={{ color: "white" }}>Text</h5></Button>
                                <Button className="btn btn-success last darkyellow short"><h5 style={{ color: "white" }}>Url</h5></Button>
                            </div>
                            <div className="row mid">
                                <div className="col-sm-8 cusmargin">
                                    <input type="text" className="form-control custominput" />
                                </div>
                                <input type="file" hidden></input>
                                <div className="col-sm-4">
                                    <button className="btn btn-success browse darkyellow"><h5>Browse</h5></button>
                                </div>
                            </div>
                            <div className="form-group mid">
                                <textarea class="form-control" rows="15"></textarea>
                            </div>
                            <Button className="btn btn-success result darkyellow"><h5>Analysis</h5></Button>
                        </div>
                        <div className="col-sm-3" style={{ backgroundColor: "gray" }}>
                            <div style={{ height: 100 }}></div>
                            <Button className="btn btn-success result"><h5>Result</h5></Button>
                            <div className="form-group restxt">
                                <textarea class="form-control resinttxt" rows="15"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NlpDashboard;