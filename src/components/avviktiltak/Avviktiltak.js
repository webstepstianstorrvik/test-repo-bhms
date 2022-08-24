import "./avviktiltak.css"

import React from 'react';
import Button from "../common/Button";

import OversiktIcon from '../../assets/img/icons/avviktiltak/oversikt.svg';
import MineFristerIcon from '../../assets/img/icons/avviktiltak/minefrister.svg';
import NyttAvviktiltakIcon from '../../assets/img/icons/avviktiltak/minefrister.svg';
import Card from "../common/Card";
import PieChart from "../common/charts/PieChart";


const Avviktiltak = () => {

    const data = [
        {
          name: 'Over frist',
           value: 17,
           color: "#e74c3c"
        },
        {
          name: 'Nærmer seg frist',
           value: 22,
           color: "#f1c40f"
        },
        {
          name: 'Ikke over frist',
           value: 50,
           color: "#27ae60"
        },
      ];

    const buttons = [
        {
            link: 'oversikt',
            icon: OversiktIcon,
            title: 'Oversikt'
        },
        {
            link: 'mine-frister',
            icon: MineFristerIcon,
            title: 'Mine frister'
        },
        {
            link: 'nytt-avviktiltak',
            icon: NyttAvviktiltakIcon,
            title: 'Nytt avviktiltak'
        },
    ]
    
    return (
        <div className="grid avviktiltak">
            <div className="container grid buttons">
                {buttons.map(({title, icon, link}) => <Button key={title} title={title} icon={icon} link={link} />)}
            </div>
            <div className="container chart">
                <Card title="Aktiviteter">
                    <PieChart data={data} />
                </Card>
            </div>
        </div>
    );
}

export default Avviktiltak;
