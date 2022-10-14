import './listelement.css'
import React, { ReactNode } from 'react'

interface IListElementProps {
    children: ReactNode
}

const ListElement = ({ children }: IListElementProps) => {
    return <div className="list-element">{children}</div>
}

export default ListElement
