import '../../assets/css/fonts.css';

import React from 'react';
import './footer.css';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="align-center text-muted">Copyright © 2021 - HMS1 AS & SPINE AS - <a style={ { 'text-decoration':'none'} } target="_blank" href="https://info.bevarhms.no/personvern/personvernerklaering.pdf">Personvernerklæring </a></div>
            </footer>
        );
    }
}

export default Footer;
