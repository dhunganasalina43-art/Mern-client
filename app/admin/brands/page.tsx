import BrandList from '@/components/admin/brand/list'
import PageTitle from '@/components/admin/page-title'
import React from 'react'

const BrandsPage = () => {
    return (
        <main className='h-full '>
            <PageTitle
                title='All Brands'
                linkText='Add New'
                link='/admin/brands/create'

            />
            <BrandList />
        </main>
    )
}

export default BrandsPage