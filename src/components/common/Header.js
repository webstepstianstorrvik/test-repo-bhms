import '../../assets/css/fonts.css';

import React from 'react';
import Topheader from './Topheader.js';

class Header extends React.Component {
    render() {
        return (
            <div>
                <Topheader title={this.props.headertext}/>
            </div>
        );
    }
}

export default Header;
