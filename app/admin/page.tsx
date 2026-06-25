import PageTitle from '@/components/admin/page-title'
import React from 'react'

const page = () => {
    return (
        <main>
            <PageTitle
                title='Dashboard'
                linkText='View Orders'
                link='/admin/orders'
            />

        </main>
    )
}

export default page