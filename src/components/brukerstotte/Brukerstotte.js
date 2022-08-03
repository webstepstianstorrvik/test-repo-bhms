import React from "react";
import Button from "../common/Button";

import BrukerveiledningerIcon from '../../assets/img/icons/brukerstotte/brukerveiledninger.svg';
import KontaktboligbyggelagetIcon from '../../assets/img/icons/brukerstotte/kontaktboligbyggelaget.svg';
import OftestiltesporsmolIcon from '../../assets/img/icons/brukerstotte/oftestiltesporsmol.svg';
import OpplaeringsvideoerIcon from '../../assets/img/icons/brukerstotte/opplaeringsvideoer.svg';

const Brukerstotte = () => {

    const buttons = [
        {
            link: 'brukerveiledning',
            icon: BrukerveiledningerIcon,
            title: 'Brukerveiledninger'
        },
        {
            link: 'kontakt-boligbyggelaget',
            icon: KontaktboligbyggelagetIcon,
            title: 'Kontakt boligbyggelaget'
        },
        {
            link: 'ofte-stilte-spoersmal',
            icon: OftestiltesporsmolIcon,
            title: 'Ofte stilte spørsmål'
        },
        {
            link: 'opplaeringsvideoer',
            icon: OpplaeringsvideoerIcon,
            title: 'Opplæringsvideoer'
        },
    ]

    return (
        <section>
            <h1>Brukerstøtte</h1>
            <div className="container grid">
                {buttons.map(({title, icon, link}) => <Button key={title} title={title} icon={icon} link={link} />)}
            </div>
        </section>
    )
} 

export default Brukerstotte;