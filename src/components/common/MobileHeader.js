import '../../assets/css/fonts.css';

import React from 'react';
import Subheader from './Subheader.js';
import DesktopHeader from './DesktopHeader';

class Header extends React.Component {
    render() {
        return (
            <div>
                <DesktopHeader text={this.props.headertext}/>
                <Subheader text={this.props.subheadertext}/>
            </div>
        );
    }
}

export default Header;
