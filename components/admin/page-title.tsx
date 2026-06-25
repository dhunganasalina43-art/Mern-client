import Link from 'next/link'
import React from 'react'

interface IProps {
    title: string,
    linkText?: string
    link?: string
}

const PageTitle = ({ title, linkText, link = '#' }: IProps) => {
    return (
        <div className='flex w-full  items-center justify-between px-4 border border-gray-200 rounded py-3 min-h-24 shadow'>

            {/* tittle */}
            <h1 className='text-xl font-bold text-gray-700'>{title}</h1>

            {/* link */}
            {linkText && <Link
                href={link}
                className={`border bg-indigo-100/40 text-indigo-600
                 border-indigo-400 px-5 py-3  min-w-30 rounded text-center text-[18px] 
                 font-bold`}
            >
                {linkText}
            </Link>}
        </div>
    )
}

export default PageTitle