import React from 'react'
import BevarButton from '../common/BevarButton'

import RedigerNyRisikovurderingIcon from '../../assets/img/icons/risikovurdering/redigernyrisikovurdering.svg'
import SeRisikovurderingIcon from '../../assets/img/icons/risikovurdering/serisikovurdering.svg'
import TidligereRevisjonerIcon from '../../assets/img/icons/risikovurdering/tidligererevisjoner.svg'

const Risikovurdering = () => {
    const buttons = [
        {
            link: 'rediger-ny-risikovurdering',
            icon: RedigerNyRisikovurderingIcon,
            title: 'Rediger ny risikovurdering',
        },
        {
            link: 'se-risikovurdering',
            icon: SeRisikovurderingIcon,
            title: 'Se risikovurdering',
        },
        {
            link: 'tidligere-revisjoner',
            icon: TidligereRevisjonerIcon,
            title: 'Tidligere revisjoner',
        },
    ]

    return (
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
    )
}

export default Risikovurdering
