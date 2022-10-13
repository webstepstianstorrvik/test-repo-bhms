import '../../assets/css/fonts.css'

import React from 'react'
import './subheader.css'

class Subheader extends React.Component {
    render() {
        return (
            <div className="subheader">
                <div className="subheader-text">{this.props.title}</div>
            </div>
        )
    }
}

export default Subheader
