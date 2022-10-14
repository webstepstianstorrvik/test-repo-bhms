import './aktiviteter.css'

import React from 'react'
import Button from '../common/Button'

import AvtalerIcon from '../../assets/img/icons/aktiviteter/avtaler.svg'
import MineFristerIcon from '../../assets/img/icons/aktiviteter/minefrister.svg'
import NyAktivitetIcon from '../../assets/img/icons/aktiviteter/nyaktivitet.svg'
import AktivitetsoversiktIcon from '../../assets/img/icons/aktiviteter/oversikt.svg'
import Card from '../common/Card'
import BarChart from '../common/charts/BarChart'

const Aktiviteter = () => {
    const data = [
        {
            name: 'Over frist',
            value: 5,
        },
        {
            name: 'Nærmer seg frist',
            value: 3,
        },
        {
            name: 'Ikke over frist',
            value: 55,
        },
    ]

    const buttons = [
        {
            link: 'avtaler',
            icon: AvtalerIcon,
            title: 'Avtaler',
        },
        {
            link: 'mine-frister',
            icon: MineFristerIcon,
            title: 'Mine frister',
        },
        {
            link: 'ny-aktivitet',
            icon: NyAktivitetIcon,
            title: 'Ny aktivitet',
        },
        {
            link: 'oversikt',
            icon: AktivitetsoversiktIcon,
            title: 'Oversikt',
        },
    ]

    return (
        <div className="grid aktiviteter">
            <div className="container grid buttons">
                {buttons.map(({ title, icon, link }) => (
                    <Button key={title} title={title} icon={icon} link={link} />
                ))}
            </div>
            <div className="container chart">
                <Card title="Aktiviteter">
                    <BarChart data={data} />
                </Card>
            </div>
        </div>
    )
}

export default Aktiviteter
