import Link from 'next/link'
import React from 'react'
import { CiTrash } from 'react-icons/ci'
import { MdEditDocument } from 'react-icons/md'

interface IProps {
    onDelete: () => void,
    editLink: string
}

const ActionButtons = ({ onDelete, editLink = '#' }: IProps) => {
    return (
        <div className='flex gap-2 justify-center'>
            <CiTrash onClick={() => { onDelete() }} title='Delete' size={26} className='text-red-500 cursor-pointer' />
            <Link href={editLink}>
                <MdEditDocument title='Edit' size={24} className='text-indigo-500 cursor-pointer' />
            </Link>
        </div>
    )
}

export default ActionButtons