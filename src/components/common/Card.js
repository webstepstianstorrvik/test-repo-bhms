import '../../assets/css/fonts.css';
import './card.css';

import React from 'react';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.backgroundColor = "white";
        this.borderColor = "black";
    }

    render() {
        return (
            <div className={ "card" + (this.props.border ? "" : " no-border")}>
                <div className="card-content">
                    { this.props.content }
                </div>
            </div>
        );
    }
}

export default Card;
