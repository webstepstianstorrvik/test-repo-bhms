import React from 'react'
import Icons from '../../assets/img/icons/icons.svg'

interface IIconsProps {
    name: string
    color: string
    size: number
}

const Icon = ({ name, color, size }: IIconsProps) => (
    <svg
        className={`icon icon-${name}`}
        fill={color}
        width={size}
        height={size}
    >
        <use xlinkHref={`${Icons}#icon-${name}`} />
    </svg>
)

export default Icon
