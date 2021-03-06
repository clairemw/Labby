import React, { Component } from 'react';
import { PropTypes } from "prop-types";
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';

export default class Nav extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }



    render() {
        return (
            <header>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">Labby</a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li><AccountsUIWrapper /></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}