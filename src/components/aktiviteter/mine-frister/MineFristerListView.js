import React, { useState } from "react";
import Table from "../../common/Table";

const MineFristerListView = ({events}) => {
    const [filter, setFilter] = useState("Aktive");


      const columns = React.useMemo(
        () => [
          {
            Header: 'Tittel',
            accessor: 'tittel',
          },
          {
            Header: 'Hyppighet',
            accessor: 'hyppighet',
          },
          {
            Header: 'Neste frist',
            accessor: 'nesteFrist',
          },
          {
            Header: 'Sist utført',
            accessor: 'sistUtført',
          },
          {
            Header: 'Ansvarlige',
            accessor: 'ansvarlige',
          },
        ],
        []
      )

    const filteredData = events.filter(row => filter === "Aktive" ? row.isActive : !row.isActive)

    return (
        <div className="list-view">
            <div className="buttons-wrapper">
                <select className="form-select" onChange={event => setFilter(event.target.value)}>
                    <option>Aktive</option>
                    <option>Stoppet</option>
                </select>
                <button className="btn btn-primary">Ny aktivitet</button>
            </div>
            <Table data={filteredData} columns={columns}/>
        </div>
    )
}

export default MineFristerListView;