import React from 'react'
import Button from '../common/Button'

import BrukerregisterIcon from '../../assets/img/icons/innstillinger/brukerregister.svg'
import InnstillingvarslingIcon from '../../assets/img/icons/innstillinger/innstillingvarsling.svg'
import LoggvarslerIcon from '../../assets/img/icons/innstillinger/loggvarsler.svg'
import OmBoligselskapetIcon from '../../assets/img/icons/innstillinger/omboligselskapet.svg'
import RedigerBildeIcon from '../../assets/img/icons/innstillinger/redigerbilde.svg'
import RedigerRettighetIcon from '../../assets/img/icons/innstillinger/redigerrettighet.svg'
import RedigerStyrelederIcon from '../../assets/img/icons/innstillinger/redigerstyreleder.svg'
import SnarveierIcon from '../../assets/img/icons/innstillinger/snarveier.svg'

const Innstillinger = () => {
    const buttons = [
        {
            link: 'brukerregister',
            icon: BrukerregisterIcon,
            title: 'Brukerregister',
        },
        {
            link: 'innstillingvarsling',
            icon: InnstillingvarslingIcon,
            title: 'Innstillingvarsling',
        },
        {
            link: 'loggvarsler',
            icon: LoggvarslerIcon,
            title: 'Loggvarsler',
        },
        {
            link: 'om-boligselskapet',
            icon: OmBoligselskapetIcon,
            title: 'Om boligselskapet',
        },
        {
            link: 'rediger-bilde',
            icon: RedigerBildeIcon,
            title: 'Rediger bilde',
        },
        {
            link: 'rediger-rettighet',
            icon: RedigerRettighetIcon,
            title: 'Rediger rettighet',
        },
        {
            link: 'rediger-styreleder',
            icon: RedigerStyrelederIcon,
            title: 'Rediger styreleder',
        },
        {
            link: 'snarveier',
            icon: SnarveierIcon,
            title: 'Snarveier',
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

export default Innstillinger
