import React from 'react';
class MenuItem extends React.Component {

    render() {
        return (
            <a className="sidebarmenu-item" href={this.props.itemUrl} style={ {textDecoration: 'none' }}>
                <img src={this.props.itemImgUrl} className="sidebarmenu-item-img" alt={this.props.title}/>
                <div className="sidebarmenu-item-title">{this.props.title}</div>
            </a>
        );
    }
}

export default MenuItem;
