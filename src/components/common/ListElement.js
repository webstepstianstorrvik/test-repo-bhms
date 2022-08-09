import "./listelement.css"
import React from "react";

const ListElement = ({children}) => {
    return (
        <div className="list-element">
        {children}
    </div>
    );
}

export default ListElement;