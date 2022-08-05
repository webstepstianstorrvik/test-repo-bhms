import React from 'react';
import Button from "../common/Button";

import AvtalerIcon from '../../assets/img/icons/aktiviteter/avtaler.svg';
import MineFristerIcon from '../../assets/img/icons/aktiviteter/minefrister.svg';
import NyAktivitetIcon from '../../assets/img/icons/aktiviteter/nyaktivitet.svg';
import AktivitetsoversiktIcon from '../../assets/img/icons/aktiviteter/oversikt.svg';

const Aktiviteter = () => {

    const buttons = [
        {
            link: 'avtaler',
            icon: AvtalerIcon,
            title: 'Avtaler'
        },
        {
            link: 'mine-frister',
            icon: MineFristerIcon,
            title: 'Mine frister'
        },
        {
            link: 'ny-aktivitet',
            icon: NyAktivitetIcon,
            title: 'Ny aktivitet'
        },
        {
            link: 'oversikt',
            icon: AktivitetsoversiktIcon,
            title: 'Oversikt'
        },
    ]
    
    return (
        <div className="container grid">
            {buttons.map(({title, icon, link}) => <Button key={title} title={title} icon={icon} link={link} />)}
        </div>
    );
}

export default Aktiviteter;
