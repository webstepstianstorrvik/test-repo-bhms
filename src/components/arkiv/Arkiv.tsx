import React from 'react'
import Button from '../common/Button'

import ArkivIcon from '../../assets/img/icons/arkiv/arkiv.svg'
import LeggtilFilerIcon from '../../assets/img/icons/arkiv/leggtilfiler.svg'
import RedigerArkivIcon from '../../assets/img/icons/arkiv/redigerarkiv.svg'
import SoeppelboetteIcon from '../../assets/img/icons/arkiv/soppelbotte.svg'

const Arkiv = () => {
    const buttons = [
        {
            link: 'arkiv',
            icon: ArkivIcon,
            title: 'Arkiv',
        },
        {
            link: 'legg-til-filer',
            icon: LeggtilFilerIcon,
            title: 'Legg til filer',
        },
        {
            link: 'rediger-arkiv',
            icon: RedigerArkivIcon,
            title: 'Rediger arkiv',
        },
        {
            link: 'sooppelbootte',
            icon: SoeppelboetteIcon,
            title: 'Søppelbøtte',
        },
    ]

    return (
        <div className="container grid">
            {buttons.map(({ title, icon, link }) => (
                <Button key={title} title={title} icon={icon} link={link} />
            ))}
        </div>
    )
}

export default Arkiv
