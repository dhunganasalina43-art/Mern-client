'use client'

import React from 'react'

interface IProps {
    label: string,
    type?: 'reset' | 'submit' | 'button'
}

const Button = ({ label = 'Button', type = 'button' }: IProps) => {
    return (
        <div className='w-full h-full'>
            <button
                type={type}
                className="w-full h-full bg-linear-to-r from-indigo-400 to-indigo-600 py-2.5 rounded-sm cursor-pointer text-white font-bold  ">
                {label}
            </button>
        </div>
    )
}

export default Button



// server component

// client component