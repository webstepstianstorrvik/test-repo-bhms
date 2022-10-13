import React from 'react'
import Button from '../common/Button'

import BoligbyggelagetIcon from '../../assets/img/icons/kontakter/boligbyggelaget.svg'
import KontaktregisterIcon from '../../assets/img/icons/kontakter/kontaktregister.svg'
import MinKontaktinformasjonIcon from '../../assets/img/icons/kontakter/minkontaktinfo.svg'
import NyKontaktIcon from '../../assets/img/icons/kontakter/nykontakt.svg'

const Kontakter = () => {
    const buttons = [
        {
            link: 'boligbyggelaget',
            icon: BoligbyggelagetIcon,
            title: 'Boligbyggelaget',
        },
        {
            link: 'kontaktregister',
            icon: KontaktregisterIcon,
            title: 'Kontaktregister',
        },
        {
            link: 'min-kontaktinformasjon',
            icon: MinKontaktinformasjonIcon,
            title: 'Min kontaktinformasjon',
        },
        {
            link: 'ny-kontakt',
            icon: NyKontaktIcon,
            title: 'Ny kontakt',
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

export default Kontakter
