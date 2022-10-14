import './table.css'
import React from 'react'
import Card from './Card'
import { useTable, useSortBy } from 'react-table'

const Table = ({ data, columns }) => {
    const tableInstance = useTable({ columns, data }, useSortBy)
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        tableInstance
    return (
        <Card className="table-card">
            <table className="table" {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th
                                    {...column.getHeaderProps(
                                        column.getSortByToggleProps()
                                    )}
                                >
                                    {column.render('Header')}
                                    <span>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? ' ↓ '
                                                : ' ↑ '
                                            : ''}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                {
                    <tbody {...getTableBodyProps()}>
                        {rows.map((row) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map((cell) => {
                                        return (
                                            <td {...cell.getCellProps()}>
                                                {Array.isArray(cell.value)
                                                    ? cell.value.map(
                                                          (value, index) =>
                                                              index > 0 ? (
                                                                  <span
                                                                      key={
                                                                          value
                                                                      }
                                                                  >
                                                                      <br />
                                                                      {value}
                                                                  </span>
                                                              ) : (
                                                                  <span
                                                                      key={
                                                                          value
                                                                      }
                                                                  >
                                                                      {value}
                                                                  </span>
                                                              )
                                                      )
                                                    : cell.render('Cell')}
                                            </td>
                                        )
                                    })}
                                    <td>edit-icon</td>
                                </tr>
                            )
                        })}
                    </tbody>
                }
            </table>
        </Card>
    )
}

export default Table
