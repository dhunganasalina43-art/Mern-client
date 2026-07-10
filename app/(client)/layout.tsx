import Navbar from '@/components/layout/header';
import React from 'react'

const Layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <main className='h-full'>
            <Navbar />
            <section className='min-h-[80vh]  pt-1'>
                {children}
            </section>
            <div>Client Footer</div>

        </main>
    )
}

export default Layout