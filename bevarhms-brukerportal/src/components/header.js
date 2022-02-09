import './../assets/css/fonts.css';

import React from 'react';
import Topheader from './Topheader.js';
import Subheader from './Subheader.js';

class Header extends React.Component {
    render() {
        return (
            <div>
                <Topheader text={this.props.headertext}/>
                <Subheader text={this.props.subheadertext}/>
            </div>
        );
    }
}

export default Header;
