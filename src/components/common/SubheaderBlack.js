import '../../assets/css/fonts.css'

import React from 'react'
import ReactDOM from 'react-dom'
import './subheader.css'

class Subheader extends React.Component {
    render() {
        return (
            <div className="subheader bg-bevarblack">
                <div className="container">
                    <div className="content">
                        <div className="subheader-text">{this.props.title}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Subheader
