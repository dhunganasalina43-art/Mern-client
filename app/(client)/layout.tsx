import React from 'react'
import Header from '../../components/layout/header/index';

const Layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <main className='h-full'>
            <Header />
            <section className='min-h-[80vh] px-20 pt-1'>
                {children}
            </section>
            <div>Client Footer</div>
{/*  */}
        </main>
    )
}

export default Layout