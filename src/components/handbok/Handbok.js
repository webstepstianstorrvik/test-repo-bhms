import React from 'react';
import Button from "../common/Button";

import RutinerIcon from '../../assets/img/icons/handbok/rutiner.svg';
import SkjemaIcon from '../../assets/img/icons/handbok/skjema.svg';
import FagvideoerIcon from '../../assets/img/icons/handbok/fagvideoer.svg';
import SjekklisterIcon from '../../assets/img/icons/handbok/sjekklister.svg';

const Handbok = () => {

    const buttons = [
        {
            link: 'rutiner',
            icon: RutinerIcon,
            title: 'Rutiner'
        },
        {
            link: 'skjema',
            icon: SkjemaIcon,
            title: 'Skjema'
        },
        {
            link: 'fagvideoer',
            icon: FagvideoerIcon,
            title: 'Fagvideoer'
        },
        {
            link: 'sjekklister',
            icon: SjekklisterIcon,
            title: 'Sjekklister'
        },
    ]
    
    return (
        <div className="container grid">
            {buttons.map(({title, icon, link}) => <Button key={title} title={title} icon={icon} link={link} />)}
        </div>
    );
}

export default Handbok;
