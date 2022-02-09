import '../../assets/css/fonts.css';

import React from 'react';
import './header.css';
import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';

class Topheader extends React.Component {
    constructor() {
        super();

        this.renderHeader = this.renderHeader.bind(this);

        this.state = {
            isMobile: false
        };

    }
    renderHeader() {
        if (this.state.isMobile) {
            return (
                <MobileHeader text={this.props.title}/>
            )
        } else {
            return (
                <DesktopHeader text={this.props.title}/>
            )
        }
    }

    render() {
        return (
            <div className="header bg-bevarblue">
                <div className="container">
                    <div className="content">
                        { this.renderHeader() }
                    </div>
                </div>
            </div>
        );
    }
}

export default Topheader;
