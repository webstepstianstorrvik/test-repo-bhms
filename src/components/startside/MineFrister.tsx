import './minefrister.css'
import React from 'react'
import ListElement from '../common/ListElement'

import MessageIcon from '../../assets/img/icons/startside/melding.svg'

const MineFrister = () => {
    const frister = [
        {
            title: 'Spiker ut av vegg i trappoppgang',
            type: 'Avvik/tiltak',
            deadline: '04.10.2019',
            comment: '',
        },
        {
            title: 'Spiker ut av vegg i trappoppgang 1',
            type: 'Avvik/tiltak',
            deadline: '04.10.2019',
            comment: 'Some comment',
        },
        {
            title: 'Spiker ut av vegg i trappoppgang 2',
            type: 'Avvik/tiltak',
            deadline: '04.10.2019',
            comment: 'Some comment',
        },
        {
            title: 'Spiker ut av vegg i trappoppgang 3',
            type: 'Avvik/tiltak',
            deadline: '04.10.2019',
            comment: '',
        },
        {
            title: 'Spiker ut av vegg i trappoppgang 4',
            type: 'Avvik/tiltak',
            deadline: '04.10.2019',
            comment: 'Some comment',
        },
    ]

    return (
        <div className="mine-frister">
            <div className="top">
                <h4>
                    Over fristen<div className="frist-count">0</div>
                </h4>
                <h4>
                    Nærmer seg frist<div className="frist-count">3</div>
                </h4>
            </div>
            <div className="main">
                {frister.map(({ title, deadline, type, comment }) => (
                    <ListElement key={title}>
                        <div
                            className={`container ${
                                comment ? 'has-comment' : ''
                            }`}
                        >
                            <div className="list-item">
                                <h4>{title}</h4>
                                <span className="list-subheading">
                                    Frist: {deadline}
                                    <div className="status-badge green small"></div>
                                    {type}
                                </span>
                            </div>
                            {comment ? (
                                <img src={MessageIcon} alt="Message icon" />
                            ) : null}
                        </div>
                    </ListElement>
                ))}
            </div>
            <div className="bottom">
                <button className="btn">Se flere frister</button>
                <button className="btn">Ny frist</button>
            </div>
        </div>
    )
}

export default MineFrister
