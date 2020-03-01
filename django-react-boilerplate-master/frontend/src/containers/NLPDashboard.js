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
import { connect } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import { authLogin } from "../store/actions/auth";

class NlpDashboard extends Component {
    state = {
        title1: "CLASSIFICATION",
        title2: "EXTRACTION",
        title3: "TEXT PROCESSING"
    }
    move_to_nlpprocessing = (title, category) => {
        return <Redirect to="/nlpprocessing" title={title} category={category} />;
    }
    state = {
        username: "",
        password: ""
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        const { username, password } = this.state;
        this.props.login(username, password);
    };
    render() {
        return (
            <div>
                <div style={{ height: 60 }}>
                </div>
                <div className="row gray" style={{ height: 65, padding: 7.5 }}>
                    <div className="col-md-2"></div>
                    <div className="col-md-8 row">
                        <div className="col-sm-4">
                            <Button className="btn btn-success custombtn"><h4>CLASSIFICATION</h4></Button>
                        </div>
                        <div className="col-sm-4">
                            <Button className="btn btn-success custombtn"><h4>EXTRACTION</h4></Button>
                        </div>
                        <div className="col-sm-4">
                            <Button className="btn btn-success custombtn"><h4>TEXT PROCESSING</h4></Button>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ height: 100, padding: 30 }}>
                    <div className="col-md-2"></div>
                    <div className="col-md-8 row">
                        <div className="col-sm-4">
                            <hr className="yellow" ></hr>
                        </div>
                        <div className="col-sm-4">
                            <hr className="green" ></hr>
                        </div>
                        <div className="col-sm-4">
                            <hr className="blue" ></hr>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 row">
                        <div className="col-sm-4">
                            <div className="customcolumn">
                                <Button className="btn btn-primary custombtn yellow third" onClick={this.move_to_nlpprocessing(this.state.title1, value)}><h5>Sentiment Analysis</h5></Button>
                                <Button className="btn btn-success custombtn yellow third"><h5>Topic Detection</h5></Button>
                                <Button className="btn btn-success custombtn yellow third"><h5>Language Detection</h5></Button>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="customcolumn">
                                <Button className="btn btn-success custombtn green fourth"><h5>Summarization</h5></Button>
                                <Button className="btn btn-success custombtn green fourth"><h5>Entity Extraction</h5></Button>
                                <Button className="btn btn-success custombtn green fourth"><h5>Keyword Extraction</h5></Button>
                                <Button className="btn btn-success custombtn green fourth"><h5>Article Extraction</h5></Button>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="customcolumn">
                                <Button className="btn btn-success custombtn blue fourth"><h5>Stemmer</h5></Button>
                                <Button className="btn btn-success custombtn blue fourth"><h5>Tokenizer</h5></Button>
                                <Button className="btn btn-success custombtn blue fourth"><h5>Normalizer</h5></Button>
                                <Button className="btn btn-success custombtn blue fourth"><h5>Similarity</h5></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NlpDashboard;
const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        token: state.auth.token
    };
};

const mapDispatchToProps = dispatch => {
    return {
        login: (username, password) => dispatch(authLogin(username, password))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);