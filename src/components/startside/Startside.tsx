import './startside.css'

import React from 'react'
import BevarButton from '../common/BevarButton'

import NyKontaktIcon from '../../assets/img/icons/startside/nykontakt.svg'
import OmBevarHMSIcon from '../../assets/img/icons/startside/ombevarhms.svg'
import StatusRapportIcon from '../../assets/img/icons/startside/statusrapport.svg'
import TilsynFraMyndigheteneIcon from '../../assets/img/icons/startside/tilsynframyndighetene.svg'
import Card from '../common/Card'
import Borettslaget from './Borettslaget'
import MineFrister from './MineFrister'
import NewsSlider from './NewsSlider'

const Startside = () => {
    const buttons = [
        {
            link: '#',
            icon: NyKontaktIcon,
            title: 'Ny kontakt',
        },
        {
            link: '#',
            icon: OmBevarHMSIcon,
            title: 'Om BevarHMS',
        },
        {
            link: '#',
            icon: StatusRapportIcon,
            title: 'Status rapport',
        },
        {
            link: '#',
            icon: TilsynFraMyndigheteneIcon,
            title: 'Tilsyn fra myndighetene',
        },
    ]

    return (
        <div className="startside grid">
            <div className="borettslaget-wrapper">
                <Card>
                    <Borettslaget />
                </Card>
            </div>
            <div className="mine-frister-wrapper">
                <Card title="Mine frister">
                    <MineFrister />
                </Card>
            </div>
            <div className="nyheter-wrapper">
                <Card>
                    <NewsSlider />
                </Card>
            </div>
            <div className="aktuelle-tema-wrapper">
                <h2>Aktuelle tema</h2>
                <div className="container grid">
                    {buttons.map(({ title, icon, link }) => (
                        <BevarButton
                            key={title}
                            title={title}
                            icon={icon}
                            link={link}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Startside
