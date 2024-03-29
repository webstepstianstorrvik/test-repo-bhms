import '../../assets/css/fonts.css'

import React from 'react'
import './footer.css'

class Footer extends React.Component {
    render() {
        return (
            <footer className="container">
                <div className="align-center text-muted">
                    Copyright © 2022 - HMS1 AS & SPINE AS -{' '}
                    <a
                        style={{ textDecoration: 'none' }}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://info.bevarhms.no/personvern/personvernerklaering.pdf"
                    >
                        Personvernerklæring{' '}
                    </a>
                </div>
            </footer>
        )
    }
}

export default Footer
