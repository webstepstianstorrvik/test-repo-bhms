import React from 'react';

class DesktopHeader extends React.Component {
    render() {
        return (
            <div className="desktop-header">
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
        );
    }
}

export default DesktopHeader;
