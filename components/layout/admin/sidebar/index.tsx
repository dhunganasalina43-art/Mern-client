import React from 'react'
import Logo from '../../logo'
import SidebarLinks from './sidebar-content'

const Sidebar = () => {
    return (
        <section className='h-full w-70 border-r border-indigo-200 py-2'>
            {/* logo */}
            <div className='h-16 flex flex-col py-2 items-center justify-center gap-1 '>
                <Logo />
                <p className='text-[20px] font-semibold italic text-indigo-600'>Online</p>
            </div>
            {/* sidebar content */}
            <div className='mt-8'>
                <SidebarLinks />
            </div>
        </section>
    )
}

export default Sidebar