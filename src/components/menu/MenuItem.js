import React from 'react';
class MenuItem extends React.Component {

    constructor() {
        super();


    }
    render() {
        return (
            <div className="menu-item">
                <img src={this.props.itemUrl} className="menu-item-img"/>
                <div className="menu-item-title">{this.props.title}</div>
            </div>
        );
    }
}

export default MenuItem;
