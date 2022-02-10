import React from 'react';
class MenuItem extends React.Component {

    constructor() {
        super();
    }
    render() {
        return (
            <div className="sidebarmenu-item">
                <img src={this.props.itemUrl} className="sidebarmenu-item-img"/>
                <div className="sidebarmenu-item-title">{this.props.title}</div>
            </div>
        );
    }
}

export default MenuItem;
