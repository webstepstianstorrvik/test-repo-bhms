import React from 'react'
import { Table } from '@tanstack/react-table'
import Button from './Button'
import Select from './forms/Select'

interface ITablePaginationProps<T> {
    table: Table<T>
    size: number
}

const TablePagination = <T,>({ table, size }: ITablePaginationProps<T>) => {
    const pageSize = table.getState().pagination.pageSize
    const pageIndex = table.getState().pagination.pageIndex + 1

    return (
        <div className="table-pagination">
            <div className="flex align-ic mhl">
                <span className="mrm">Antall rader per side</span>
                <Select
                    id="pagination-select"
                    name="pagination-size"
                    value={table.getState().pagination.pageSize}
                    onChange={(e) => {
                        table.setPageSize(Number(e.target.value))
                    }}
                    options={[1, 5, 10, 20, 30, 40, 50]}
                />
            </div>

            <span className="flex mhl">
                <span>
                    {`${pageIndex} - ${Math.min(
                        pageSize * pageIndex,
                        size
                    )} av ${size}`}
                </span>
            </span>

            <div className="mll">
                <Button
                    className="double-chevron"
                    onClick={() => table.setPageIndex(0)}
                    disabled={!table.getCanPreviousPage()}
                    variant="icon"
                >
                    &lt;&lt;
                </Button>
                <Button
                    className=""
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                    variant="icon"
                >
                    &lt;
                </Button>
                <Button
                    className=""
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                    variant="icon"
                >
                    &gt;
                </Button>
                <Button
                    className="double-chevron"
                    onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                    disabled={!table.getCanNextPage()}
                    variant="icon"
                >
                    &gt;&gt;
                </Button>
            </div>
        </div>
    )
}

export default TablePagination
