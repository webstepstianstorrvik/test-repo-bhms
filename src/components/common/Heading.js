import "./heading.css"

import React from "react";
import { Link, useLocation } from "react-router-dom";

const Heading = () => {
    const location = useLocation();
    const paths = location.pathname.split("/").filter(path => path);
    const heading = paths[paths.length - 1]



    /** @TODO: START Fix this hack to avoid broken backlink in haandbok */
    if (paths[0] === 'haandbok') {
        paths[0] = 'brukerstotte';
    }
    /** @Todo: END */

    const formatText = (text) => {
        return text.charAt(0).toUpperCase() + text.slice(1).replaceAll("-", " ").replaceAll("aa","å").replaceAll("ae","æ").replaceAll("oo", "ø")
    }

    const getPath = (index) => {
        let path = ""
        for (let i = 0; i <= index; i++) {
            path += "/" + paths[i];
          }
        return path;
    }

    if (paths.length === 0) {
        return null;
    }

    return (
        <div className="top-heading">
            <h1>{formatText(heading)}</h1>
            <div>{paths.map( (path, index) => (
                <div key={path} className="heading-path-item">
                    {index > 0 ? <span>&gt;</span>: null}
                    <Link to={getPath(index)}>{formatText(path)}</Link>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Heading;