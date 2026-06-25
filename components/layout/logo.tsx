import Image from 'next/image'
import React from 'react'

const Logo = () => {
    return (
        <div className='h-8 flex items-center justify-center max-w-30 '>
            <Image
                src={'/next.svg'}
                alt='logo'
                height={100}
                width={100}
                className='h-8 w-full object-contain'
            />
        </div>

    )
}

export default Logo