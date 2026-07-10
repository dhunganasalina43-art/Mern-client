import PageTitle from '@/components/admin/page-title'
import React from 'react'

const BrandsPage = () => {
    return (
        <main className='h-full'>
            <PageTitle
                title='All Products'
                linkText='Add New'
                link='/admin/create'
            />
        </main>
    )
}

export default BrandsPage