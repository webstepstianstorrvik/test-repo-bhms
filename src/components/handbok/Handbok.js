import './handbok.css'

import React from 'react'
import Button from '../common/Button'

import CancelIcon from '../../assets/img/icons/general/cancel.svg'
import RutinerIcon from '../../assets/img/icons/handbok/rutiner.svg'
import SkjemaIcon from '../../assets/img/icons/handbok/skjema.svg'
import FagvideoerIcon from '../../assets/img/icons/handbok/fagvideoer.svg'
import SjekklisterIcon from '../../assets/img/icons/handbok/sjekklister.svg'
import Card from '../common/Card'
import ListElement from '../common/ListElement'

const Handbok = () => {
    const buttons = [
        {
            link: 'rutiner',
            icon: RutinerIcon,
            title: 'Rutiner',
        },
        {
            link: 'skjema',
            icon: SkjemaIcon,
            title: 'Skjema',
        },
        {
            link: 'fagvideoer',
            icon: FagvideoerIcon,
            title: 'Fagvideoer',
        },
        {
            link: 'sjekklister',
            icon: SjekklisterIcon,
            title: 'Sjekklister',
        },
    ]

    const handbokList = [
        {
            title: 'Fagvideo om brannsikkerhet',
            category: 'Fagvideoer',
        },
        {
            title: 'Egenkontroll av bygning A',
            category: 'Sjekklister',
        },
        {
            title: 'Skjema for vedlikehold',
            category: 'Skjema',
        },
        {
            title: 'Styrets ansvar',
            category: 'Rutiner',
        },
    ]

    return (
        <div className="grid handbok">
            <div className="container grid buttons">
                {buttons.map(({ title, icon, link }) => (
                    <Button key={title} title={title} icon={icon} link={link} />
                ))}
            </div>
            <Card title="Håndbok">
                {handbokList.map(({ title, category }) => (
                    <ListElement>
                        <div className="container">
                            <div className="list-item">
                                <h5 className="list-heading">{title}</h5>
                                <h6 className="list-subheading">{category}</h6>
                            </div>
                            <img
                                className="cancel-icon"
                                src={CancelIcon}
                                alt="Cancel icon"
                            />
                        </div>
                    </ListElement>
                ))}
            </Card>
        </div>
    )
}

export default Handbok
