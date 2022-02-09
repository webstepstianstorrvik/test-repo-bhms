import './../assets/css/fonts.css';

import React from 'react';
import './header.css';

class Topheader extends React.Component {
    render() {
        return (
            <div className="header bg-bevarblue">
                <div className="container">
                    <div className="content">
                        <div className="left-content">
                            <div className="logo-content">
                                <img className="header-logo" src="./img/bevarhms-hvit_compressed.svg" alt=""/>
                            </div>
                            <div className="header-filler-border x-auto y-auto"></div>
                            <div className="y-auto">
                                <div className="header-text">{this.props.text}</div>
                            </div>
                        </div>
                        <div className="center-content">
                        </div>
                        <div className="right-content">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Topheader;
