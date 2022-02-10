import React from 'react';
class MenuItem extends React.Component {

    render() {
        return (
            <div className="sidebarmenu-item">
                <a href={this.props.itemUrl} style={ {textDecoration: 'none' }}>
                    <img src={this.props.itemImgUrl} className="sidebarmenu-item-img" alt={this.props.title}/>
                    <div className="sidebarmenu-item-title">{this.props.title}</div>
                </a>
            </div>
        );
    }
}

export default MenuItem;
