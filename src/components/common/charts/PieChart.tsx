import './charts.css'

import React from 'react'
import {
    PieChart as RechartsPieChart,
    Cell,
    Legend,
    Pie,
    ResponsiveContainer,
    Tooltip,
} from 'recharts'

const COLORS = ['#e17055', '#fdcb6e', '#00b894']

type DataPoint = {
    name: string
    value: string | number
}

interface IPieChart {
    data: DataPoint[]
}

const PieChart = ({ data }: IPieChart) => {
    return (
        <ResponsiveContainer width="100%" height="100%" className="pie-chart">
            <RechartsPieChart
                data={data}
                margin={{
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 20,
                }}
            >
                <Pie data={data} dataKey="value">
                    {data.map(({ name }, index) => (
                        <Cell key={name} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip itemStyle={{ fontSize: '0.75rem' }} />
                <Legend style={{ fontSize: '0.2rem' }} />
            </RechartsPieChart>
        </ResponsiveContainer>
    )
}

export default PieChart
