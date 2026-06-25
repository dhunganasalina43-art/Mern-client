import AdminHeader from '@/components/layout/admin/header';
import Sidebar from '@/components/layout/admin/sidebar';
import React from 'react'

const Layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <main className='h-screen max-h-screen w-full flex overflow-clip'>
            <Sidebar />
            <section className='w-full h-full'>
                <AdminHeader />
                <section className='py-4 px-2 h-full overflow-auto'>

                    {children}
                </section>
            </section>
        </main>
    )
}

export default Layout