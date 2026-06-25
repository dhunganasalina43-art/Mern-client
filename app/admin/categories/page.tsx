import PageTitle from '@/components/admin/page-title'
import React from 'react'

const CategoriesPage = () => {
    return (
        <main className='h-full'>
            <PageTitle
                title='All Categories'
                linkText='Add New'
                link='/admin/categories/create'

            />
        </main>
    )
}

export default CategoriesPage