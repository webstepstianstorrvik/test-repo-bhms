import React from 'react';
import Button from "../common/Button";

import OversiktIcon from '../../assets/img/icons/avviktiltak/oversikt.svg';
import MineFristerIcon from '../../assets/img/icons/avviktiltak/minefrister.svg';
import NyttAvviktiltakIcon from '../../assets/img/icons/avviktiltak/minefrister.svg';


const Avviktiltak = () => {

    const buttons = [
        {
            link: 'oversikt',
            icon: OversiktIcon,
            title: 'Oversikt'
        },
        {
            link: 'mine-frister',
            icon: MineFristerIcon,
            title: 'Mine frister'
        },
        {
            link: 'nytt-avviktiltak',
            icon: NyttAvviktiltakIcon,
            title: 'Nytt avviktiltak'
        },
    ]
    
    return (
        <div className="container grid">
            {buttons.map(({title, icon, link}) => <Button key={title} title={title} icon={icon} link={link} />)}
        </div>
    );
}

export default Avviktiltak;
