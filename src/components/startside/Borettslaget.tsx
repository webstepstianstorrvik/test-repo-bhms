import './borettslaget.css'

import React from 'react'
import BoligbyggelagetImage from '../../assets/img/ulsetskogen.png'

const Borettslaget = () => {
    return (
        <div className="borettslaget">
            <img src={BoligbyggelagetImage} alt="Bilde av borettslaget"></img>
            <div className="borettslaget-header">
                <div>
                    <h2>Ulsetskogen Borettslag</h2>
                    <p>Ulsetskogen 54, 5119 Bergen</p>
                </div>
                <button className="btn btn-secondary">Rediger</button>
            </div>
            <div className="borettslaget-content">
                <div className="container">
                    <h4>Styreleder</h4>
                    <p>Per Ole Mathisen Mathisen</p>
                </div>
                <div className="container">
                    <h4>Telefon</h4>
                    <p>+47 482 29 392</p>
                </div>
                <div className="container">
                    <h4>E-post</h4>
                    <p>perolemathisen@bevarhms.no</p>
                </div>
            </div>
        </div>
    )
}

export default Borettslaget
