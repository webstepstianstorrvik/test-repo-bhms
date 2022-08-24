import React from "react";
import { BarChart as RechartsBarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const COLORS = ['#e17055', '#fdcb6e', '#00b894'];

const BarChart = ({data}) => {
    return (
        <ResponsiveContainer width="100%" height="100%" className="bar-chart">
            <RechartsBarChart
            data={data}
            margin={{
                top: 40,
                right: 30,
                left: -10,
                bottom: 30,
            }}
            >
            <CartesianGrid strokeDasharray="1" />
            <XAxis dataKey="name" style={{fontSize: "0.7rem"}}/>
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" barSize={60}>
                {data.map(({name}, index) => (
                    <Cell key={name} fill={COLORS[index % COLORS.length]} />
                ))}
            </Bar>
            </RechartsBarChart>
        </ResponsiveContainer>
    );
}

export default BarChart;