/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import * as React from 'react'


import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table'

type Person = {
    firstName: string
    lastName: string
    age: number
    visits: number
    status: string
    progress: number
}




type IProps = {
    data: any[]
    columns: any[]
}

function Table({ data, columns }: IProps) {
    // const [data, _setData] = React.useState(() => [...defaultData])
    // const rerender = React.useReducer(() => ({}), {})[1]

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <div className="w-full  h-full min-h-100 rounded-md overflow-clip">
            <table className='w-full'>
                <thead className='bg-indigo-200 h-16'>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th className='text-lg' key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext(),
                                        )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row, i) => (
                        <tr key={row.id} className={`h-16 text-center border-b border-gray-100 hover:bg-indigo-100 transition-all duration-300 ${i % 2 !== 0 ? 'bg-indigo-50' : ''}`}>
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>

            </table>
            <div className="h-4" />

        </div>
    )
}

export default Table